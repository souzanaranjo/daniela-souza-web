import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    hero: {
      title: "Daniela Souza",
      subtitle: "World & Pan American Taekwondo Champion",
      cta: "Explore Achievements"
    },
    biography: {
      title: "About Daniela",
      content: "Daniela Paola Souza Naranjo, born in Zapopan, Mexico, is a world-renowned Taekwondo athlete competing in the -49 kg category. With a fierce fighting spirit, she secured the Gold Medal at the 2022 World Taekwondo Championships in Guadalajara and became a two-time Pan American Games Champion (Lima 2019 & Santiago 2023). Daniela exemplifies dedication and is one of Mexico's premier contenders on the Olympic stage."
    },
    achievements: {
      title: "Top Achievements",
      items: [
        {
          title: "World Taekwondo Championship 2022",
          description: "Gold Medalist (-49 kg) - Guadalajara, Mexico"
        },
        {
          title: "Pan American Games 2023",
          description: "Gold Medalist (Bicampeonato) - Santiago, Chile"
        },
        {
          title: "Pan American Games 2019",
          description: "Gold Medalist - Lima, Peru"
        },
        {
          title: "Pan American Championships 2021 & 2022",
          description: "Gold Medalist - Cancún & Punta Cana"
        },
        {
          title: "Central American & Caribbean Games 2018",
          description: "Gold Medalist - Barranquilla, Colombia"
        },
        {
          title: "U.S. Open Taekwondo Championships 2024",
          description: "Gold Medalist (-49 kg)"
        }
      ]
    },
    competitions: {
      title: "Next Competitions",
      status: {
        upcoming: "Upcoming",
        scheduled: "Scheduled",
        planned: "Planned"
      },
      items: [
        {
          name: "Paris 2024 Olympic Games",
          location: "Paris, France",
          date: "August 2024",
          statusKey: "upcoming"
        },
        {
          name: "World Taekwondo Grand Prix",
          location: "TBD",
          date: "Fall 2024",
          statusKey: "scheduled"
        },
        {
          name: "Pan American Championships",
          location: "TBD",
          date: "2025",
          statusKey: "planned"
        }
      ]
    },
    video: {
      title: "Featured Videos"
    },
    footer: {
      title: "Connect with Daniela",
      rights: "Daniela Souza Naranjo. All Rights Reserved.",
      createdBy: "Created with ❤️ by David Souza Naranjo"
    }
  },
  es: {
    hero: {
      title: "Daniela Souza",
      subtitle: "Campeona Mundial y Panamericana de Taekwondo",
      cta: "Explorar Logros"
    },
    biography: {
      title: "Sobre Daniela",
      content: "Daniela Paola Souza Naranjo, nacida en Zapopan, México, es una atleta de Taekwondo de renombre mundial que compite en la categoría de -49 kg. Con un espíritu de lucha indomable, aseguró la Medalla de Oro en el Campeonato Mundial de Taekwondo 2022 en Guadalajara y se consagró Bicampeona de los Juegos Panamericanos (Lima 2019 y Santiago 2023). Daniela ejemplifica la dedicación y es una de las principales contendientes de México en el escenario olímpico."
    },
    achievements: {
      title: "Principales Logros",
      items: [
        {
          title: "Campeonato Mundial de Taekwondo 2022",
          description: "Medallista de Oro (-49 kg) - Guadalajara, México"
        },
        {
          title: "Juegos Panamericanos 2023",
          description: "Medallista de Oro (Bicampeonato) - Santiago, Chile"
        },
        {
          title: "Juegos Panamericanos 2019",
          description: "Medallista de Oro - Lima, Perú"
        },
        {
          title: "Campeonatos Panamericanos 2021 y 2022",
          description: "Medallista de Oro - Cancún y Punta Cana"
        },
        {
          title: "Juegos Centroamericanos y del Caribe 2018",
          description: "Medallista de Oro - Barranquilla, Colombia"
        },
        {
          title: "Abierto de Estados Unidos de Taekwondo 2024",
          description: "Medallista de Oro (-49 kg)"
        }
      ]
    },
    competitions: {
      title: "Próximas Competencias",
      status: {
        upcoming: "Próxima",
        scheduled: "Programada",
        planned: "Planificada"
      },
      items: [
        {
          name: "Juegos Olímpicos de París 2024",
          location: "París, Francia",
          date: "Agosto 2024",
          statusKey: "upcoming"
        },
        {
          name: "Grand Prix Mundial de Taekwondo",
          location: "Por definir",
          date: "Otoño 2024",
          statusKey: "scheduled"
        },
        {
          name: "Campeonato Panamericano",
          location: "Por definir",
          date: "2025",
          statusKey: "planned"
        }
      ]
    },
    video: {
      title: "Videos Destacados"
    },
    footer: {
      title: "Conecta con Daniela",
      rights: "Daniela Souza Naranjo. Todos los derechos reservados.",
      createdBy: "Creado con ❤️ por David Souza Naranjo"
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');
  const t = translations[lang];

  const toggleLanguage = () => {
    setLang(prev => (prev === 'en' ? 'es' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
