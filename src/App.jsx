import React from 'react';
import Hero from './components/Hero';
import Biography from './components/Biography';
import Achievements from './components/Achievements';
import Competitions from './components/Competitions';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();
  return (
    <div
      className="lang-toggle-container glass"
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 100,
        display: 'flex',
        gap: '10px',
        padding: '8px 12px',
        borderRadius: '30px',
        background: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid var(--accent-gold)',
        alignItems: 'center'
      }}
    >
      <button
        onClick={() => setLang('es')}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1.5rem',
          opacity: lang === 'es' ? 1 : 0.4,
          transform: lang === 'es' ? 'scale(1.1)' : 'scale(1)',
          transition: 'all 0.2s ease',
          padding: 0,
          outline: 'none'
        }}
        title="Español"
      >
        🇲🇽
      </button>
      <div style={{ width: '1px', height: '20px', background: 'var(--accent-gold)', opacity: 0.5 }}></div>
      <button
        onClick={() => setLang('en')}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1.5rem',
          opacity: lang === 'en' ? 1 : 0.4,
          transform: lang === 'en' ? 'scale(1.1)' : 'scale(1)',
          transition: 'all 0.2s ease',
          padding: 0,
          outline: 'none'
        }}
        title="English"
      >
        🇺🇸
      </button>
    </div>
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
      <VideoSection />
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
