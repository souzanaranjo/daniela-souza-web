import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer>
      <div className="container footer-content">
        <h2 className="text-gradient" style={{ fontSize: '2rem' }}>{t.footer.title}</h2>
        
        <div className="social-links">
          <motion.a 
            href="https://www.instagram.com/danielapsouzan/" 
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn glass"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaInstagram />
          </motion.a>
          {/* 
          <motion.a 
            href="#" 
            className="social-btn glass"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaFacebookF />
          </motion.a> 
          */}
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
