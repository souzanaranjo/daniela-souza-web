import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Competitions = () => {
  const { t } = useLanguage();

  return (
    <section id="competitions" className="container">
      <h2 className="section-title text-gradient">{t.competitions.title}</h2>
      
      <div className="competitions-list">
        {t.competitions.items.map((comp, index) => (
          <motion.div 
            key={index}
            className="competition-item glass"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="comp-details">
              <h3>{comp.name}</h3>
              <p>{comp.location}</p>
            </div>
            <div className="comp-date">
              {comp.date}
              <br />
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                {t.competitions.status[comp.statusKey]}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Competitions;
