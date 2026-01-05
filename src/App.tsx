import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import OneAudiCaseStudy from './components/OneAudiCaseStudy';
import DealerThemeCaseStudy from './components/DealerThemeCaseStudy';

type PageView = 'portfolio' | 'oneaudi-case-study' | 'dealer-theme-case-study';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [currentPage, setCurrentPage] = useState<PageView>('portfolio');

  const handleCaseStudyClick = (projectIndex: number) => {
    if (projectIndex === 0) {
      setCurrentPage('oneaudi-case-study');
    } else if (projectIndex === 1) {
      setCurrentPage('dealer-theme-case-study');
    }
  };

  if (currentPage === 'oneaudi-case-study') {
    return (
      <div className="min-h-screen bg-white">
        <OneAudiCaseStudy onBack={() => setCurrentPage('portfolio')} />
      </div>
    );
  }

  if (currentPage === 'dealer-theme-case-study') {
    return (
      <div className="min-h-screen bg-white">
        <DealerThemeCaseStudy onBack={() => setCurrentPage('portfolio')} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <About />
      <Projects onCaseStudyClick={handleCaseStudyClick} />
      <Timeline />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
