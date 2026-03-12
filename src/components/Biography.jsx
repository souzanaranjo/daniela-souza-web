import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Biography = () => {
  const { t } = useLanguage();

  return (
    <section id="biography" className="container" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
      <motion.div 
        className="glass"
        style={{ padding: '40px 30px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title text-gradient" style={{ marginBottom: '30px' }}>{t.biography.title}</h2>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          {t.biography.content}
        </p>
      </motion.div>
    </section>
  );
};

export default Biography;
