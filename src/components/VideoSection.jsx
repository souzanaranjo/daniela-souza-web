import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const VideoSection = () => {
    const { t } = useLanguage();

    return (
        <section id="videos" className="container" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
            <h2 className="section-title text-gradient" style={{ textAlign: 'center', marginBottom: '40px' }}>
                {t.video.title}
            </h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '30px',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {t.video.items.map((video, index) => (
                    <motion.div
                        key={video.id}
                        className="glass"
                        style={{
                            padding: '20px',
                            borderRadius: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '15px'
                        }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        vertical={{ once: true }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0, borderRadius: '15px', overflow: 'hidden' }}>
                            <iframe
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                                src={`https://www.youtube.com/embed/${video.id}`}
                                title={video.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <h3 style={{
                            fontSize: '1.1rem',
                            color: 'var(--text-primary)',
                            margin: 0,
                            textAlign: 'center',
                            minHeight: '2.4em',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            {video.title}
                        </h3>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default VideoSection;
