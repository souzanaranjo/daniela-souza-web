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
          title: "U.S. Open Taekwondo Championships 2025",
          description: "Gold Medalist (-49 kg) - Reno, NV",
          medal: "gold"
        },
        {
          title: "Paris 2024 Olympic Games",
          description: "Participant (-49 kg) - Paris, France",
          medal: "participant"
        },
        {
          title: "U.S. Open Taekwondo Championships 2024",
          description: "Gold Medalist (-49 kg) - Reno, NV",
          medal: "gold"
        },
        {
          title: "Pan American Games 2023",
          description: "Gold Medalist (Bicampeonato) - Santiago, Chile",
          medal: "gold"
        },
        {
          title: "World Taekwondo Championships 2022",
          description: "Gold Medalist (-49 kg) - Guadalajara, Mexico",
          medal: "gold"
        },
        {
          title: "World Taekwondo Grand Prix 2022",
          description: "Bronze Medalist - Rome, Italy",
          medal: "bronze"
        },
        {
          title: "Pan American Championships 2021 & 2022",
          description: "Gold Medalist - Cancún & Punta Cana",
          medal: "gold"
        },
        {
          title: "WT Women's Open Championships 2021",
          description: "Bronze Medalist - Riyadh, Saudi Arabia",
          medal: "bronze"
        },
        {
          title: "Pan American Games 2019",
          description: "Gold Medalist - Lima, Peru",
          medal: "gold"
        },
        {
          title: "Central American & Caribbean Games 2018",
          description: "Gold Medalist - Barranquilla, Colombia",
          medal: "gold"
        }
      ]
    },
    video: {
      title: "Featured Videos",
      items: [
        {
          id: "tUQlj8fbBFE",
          title: "World Championships 2022 | SF vs Panipak Wongpattanakit"
        },
        {
          id: "pfXPe5XrtWU",
          title: "Career Highlights & Best Moments"
        },
        {
          id: "JHgXd0WrqPA",
          title: "TEDx Talk: Lecciones del Fracaso"
        }
      ]
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
          title: "Abierto de Estados Unidos 2025",
          description: "Medallista de Oro (-49 kg) - Reno, NV",
          medal: "gold"
        },
        {
          title: "Juegos Olímpicos de París 2024",
          description: "Participante (-49 kg) - París, Francia",
          medal: "participant"
        },
        {
          title: "Abierto de Estados Unidos 2024",
          description: "Medallista de Oro (-49 kg) - Reno, NV",
          medal: "gold"
        },
        {
          title: "Juegos Panamericanos 2023",
          description: "Medallista de Oro (Bicampeonato) - Santiago, Chile",
          medal: "gold"
        },
        {
          title: "Campeonato Mundial de Taekwondo 2022",
          description: "Medallista de Oro (-49 kg) - Guadalajara, México",
          medal: "gold"
        },
        {
          title: "Grand Prix Mundial de Taekwondo 2022",
          description: "Medallista de Bronce - Roma, Italia",
          medal: "bronze"
        },
        {
          title: "Campeonatos Panamericanos 2021 y 2022",
          description: "Medallista de Oro - Cancún y Punta Cana",
          medal: "gold"
        },
        {
          title: "Campeonato Femenino de Taekwondo 2021",
          description: "Medallista de Bronce - Riad, Arabia Saudita",
          medal: "bronze"
        },
        {
          title: "Juegos Panamericanos 2019",
          description: "Medallista de Oro - Lima, Perú",
          medal: "gold"
        },
        {
          title: "Juegos Centroamericanos y del Caribe 2018",
          description: "Medallista de Oro - Barranquilla, Colombia",
          medal: "gold"
        }
      ]
    },
    video: {
      title: "Videos Destacados",
      items: [
        {
          id: "tUQlj8fbBFE",
          title: "Campeonato Mundial 2022 | SF vs Panipak Wongpattanakit"
        },
        {
          id: "pfXPe5XrtWU",
          title: "Momentos Destacados de Carrera"
        },
        {
          id: "JHgXd0WrqPA",
          title: "TEDx Talk: Lecciones del Fracaso"
        }
      ]
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
