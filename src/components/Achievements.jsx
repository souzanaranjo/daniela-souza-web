import React from 'react';
import { motion } from 'framer-motion';
import { FaMedal, FaAward, FaTrophy } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const Achievements = () => {
  const { t } = useLanguage();

  const getMedalStyles = (type) => {
    switch (type) {
      case 'gold':
        return { color: '#FFD700', icon: <FaMedal /> };
      case 'silver':
        return { color: '#C0C0C0', icon: <FaMedal /> };
      case 'bronze':
        return { color: '#CD7F32', icon: <FaMedal /> };
      case 'participant':
        return { color: '#4FC3F7', icon: <FaAward /> };
      default:
        return { color: 'var(--accent-gold)', icon: <FaTrophy /> };
    }
  };

  const achievements = t.achievements.items.map((item) => {
    const styles = getMedalStyles(item.medal);
    return {
      ...item,
      icon: styles.icon,
      iconColor: styles.color
    };
  });

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
            <div className="medal-icon" style={{ color: item.iconColor }}>
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
