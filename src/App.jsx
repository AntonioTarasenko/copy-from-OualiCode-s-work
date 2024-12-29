import { useState } from 'react';
import ThreeBackground from './components/ThreeBackground';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import NumbersSection from './components/NumbersSection';
import ServicesSection from './components/ServicesSection';
import SkillsSection from './components/SkillsSection';
import EducationAndExperience from './components/EducationAndExperience';
import ProjectsSection from './components/ProjectsSection';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ThreeBackground />
      {loading ? (
        <LoadingSpinner onComplete={() => setLoading(false)} />
      ) : (
        <>
          <NavBar />
          <HeroSection />
          <NumbersSection />
          <ServicesSection />
          <SkillsSection />
          <EducationAndExperience />
          <ProjectsSection />
          <ContactUs />
          <Footer />
          <BackToTop />
        </>
      )}
    </div>
  );
}

export default App;
