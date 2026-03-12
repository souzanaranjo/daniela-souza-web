import React from 'react';
import { motion } from 'framer-motion';
import { FaMedal, FaTrophy } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const Achievements = () => {
  const { t } = useLanguage();

  const achievements = t.achievements.items.map((item, index) => ({
    ...item,
    icon: (index === 0 || index === 3 || index === 4) ? <FaMedal /> : <FaTrophy />
  }));

  return (
    <section id="achievements" className="container">
      <h2 className="section-title text-gradient">{t.achievements.title}</h2>
      
      <div className="achievements-grid">
        {achievements.map((item, index) => (
          <motion.div 
            key={index}
            className="achievement-card glass"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="medal-icon">
              {item.icon}
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
