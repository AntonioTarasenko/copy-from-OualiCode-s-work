/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useRef, useMemo, useEffect, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Reflector, OrbitControls, useTexture } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

function LoadingBar({ progress }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '5px',
        background: '#ffc107',
        transform: `scaleX(${progress})`,
        transformOrigin: 'left',
        transition: 'transform 0.1s ease-out',
        zIndex: 9999,
      }}
    ></div>
  );
}

function ImageMesh({ position = [0, 0, 0], scale }) {
  const ref = useRef();
  const texture = useTexture('welcome.png');

  const aspectRatio = 1920 / 1000;
  const width = aspectRatio * scale;
  const height = scale;
  const geom = useMemo(() => new THREE.PlaneGeometry(width, height), [width, height]);

  useFrame((state) => {
    if (ref.current) {
      const { clock } = state;
      ref.current.position.y = Math.sin(clock.elapsedTime) * 0.2;
    }
  });

  return (
    <mesh ref={ref} position={position} geometry={geom} castShadow receiveShadow>
      <meshBasicMaterial map={texture} toneMapped={false} transparent={true} />
    </mesh>
  );
}

function Ground(props) {
  const [floor, normal] = useTexture(['/Surface1.jpg', '/Surface2.jpg']);
  return (
    <Reflector resolution={1024} args={[8, 8]} {...props}>
      {(Material, props) => (
        <Material
          color="#f0f0f0"
          metalness={0}
          roughnessMap={floor}
          normalMap={normal}
          normalScale={[2, 2]}
          {...props}
        />
      )}
    </Reflector>
  );
}

export default function LoadingSpinner({ onComplete }) {
  const [scale, setScale] = useState(1);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const newScale = window.innerWidth < 600 ? 0.5 : 1;
      setScale(newScale);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev < 1) return prev + 0.1;
        clearInterval(interval);
        return prev;
      });
    }, 500);

    if (loadingProgress >= 1) onComplete();

    return () => clearInterval(interval);
  }, [loadingProgress, onComplete]);

  return (
    <>
      <LoadingBar progress={loadingProgress} />
      <Canvas
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 1.5, 5], fov: 60 }}
      >
        <ambientLight />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        <ImageMesh position={[0, 0, 0]} scale={scale} />
        <Ground
          mirror={1}
          blur={[500, 100]}
          mixBlur={12}
          mixStrength={1.5}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          position-y={-0.8}
        />
        <EffectComposer multisampling={8}>
          <Bloom
            kernelSize={3}
            luminanceThreshold={0}
            luminanceSmoothing={0.4}
            intensity={0.6}
          />
          <Bloom
            kernelSize={2}
            luminanceThreshold={0}
            luminanceSmoothing={0}
            intensity={0.5}
          />
        </EffectComposer>
      </Canvas>
    </>
  );
}
