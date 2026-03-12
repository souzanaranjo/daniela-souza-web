import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import heroBg from '../assets/hero-bg.jpg';

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="hero">
      <img
        src={heroBg}
        alt="Daniela Souza"
        className="hero-bg"
      />
      <div className="hero-overlay"></div>

      <div className="hero-content container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-gradient">{t.hero.title}</h1>
          <p>{t.hero.subtitle}</p>

          <motion.a
            href="#achievements"
            className="btn glass"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.hero.cta}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
