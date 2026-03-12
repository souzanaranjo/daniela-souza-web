import React from 'react';
import Hero from './components/Hero';
import Biography from './components/Biography';
import Achievements from './components/Achievements';
import Competitions from './components/Competitions';
import Footer from './components/Footer';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

const LanguageToggle = () => {
  const { lang, toggleLanguage } = useLanguage();
  return (
    <button 
      onClick={toggleLanguage} 
      className="lang-toggle-btn glass"
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 100,
        padding: '10px 15px',
        borderRadius: '30px',
        background: 'rgba(0, 0, 0, 0.5)',
        color: 'var(--accent-gold)',
        border: '1px solid var(--accent-gold)',
        cursor: 'pointer',
        fontSize: '1rem',
        fontWeight: '600'
      }}
    >
      {lang === 'en' ? 'ESP' : 'ENG'}
    </button>
  );
};

function AppContent() {
  return (
    <div className="App">
      <LanguageToggle />
      <Hero />
      <Biography />
      <Achievements />
      <Competitions />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
