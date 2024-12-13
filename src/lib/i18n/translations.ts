import { Language } from '../context/language';

type TranslationTree = {
  [key: string]: string | TranslationTree;
};

type Translations = {
  [key in Language]: TranslationTree;
};

export const translations: Translations = {
  en: {
    common: {
      orderNow: 'Order Now',
      startFreeTrial: 'Start Free Trial',
      viewChannels: 'View Channels',
      getStarted: 'Get Started',
    },
    hero: {
      title: 'Premium IPTV Service',
      subtitle: 'Offering the best IPTV services in Europe.',
      description: 'Enjoy your time with excellent picture quality up to 4K, on any device, anytime and anywhere, with more than 79,000 channels, over 249,000 VOD content, and 100% uptime.',
    },
    features: {
      title: 'Why Choose Us',
      worldChannels: {
        title: '79,000+ World Channels',
        description: 'A complete list of all European channels available. With more than 79,000 TV channels, we can offer you the most advanced channel list in the market',
      },
      ultraFast: {
        title: 'Ultra-fast Connection',
        description: 'Unlike other IPTV providers, TVPLUX uses a high-quality dedicated European server. Opening our TV channels will take less than 0.5 seconds.',
      },
      installation: {
        title: 'Instant Installation',
        description: 'You can easily set up and install your IPTV subscription on your device of choice. We offer complete post-purchase support to make this process easy for everyone.',
      },
    },
  },
  fr: {
    common: {
      orderNow: 'Commander maintenant',
      startFreeTrial: 'Essai gratuit',
      viewChannels: 'Voir les chaînes',
      getStarted: 'Commencer',
    },
    hero: {
      title: 'Service IPTV Premium',
      subtitle: 'Offrant les meilleurs services IPTV en Europe.',
      description: 'Profitez de votre temps avec une excellente qualité d\'image allant jusqu\'à 4K, sur n\'importe quel appareil, à tout moment et n\'importe où, avec plus de + 79 000 chaînes, plus de 249 000 VOD et un temps de disponibilité de 100%.',
    },
    features: {
      title: 'Pourquoi nous choisir',
      worldChannels: {
        title: '79 000+ Chaînes mondiales',
        description: 'Une liste complète de toutes les chaînes européennes disponibles. Avec plus de 79 000 chaînes de télévision, nous pouvons vous offrir la liste de chaînes la plus avancée du marché',
      },
      ultraFast: {
        title: 'Connexion ultra-rapide',
        description: 'Contrairement aux autres fournisseurs IPTV, TVPLUX utilise un serveur européen dédié de haute qualité. L\'ouverture de nos chaînes de télévision prendra moins de 0,5 seconde.',
      },
      installation: {
        title: 'Installation instantanée',
        description: 'Vous pouvez facilement configurer et installer votre abonnement IPTV sur l\'appareil de votre choix. Nous offrons une assistance complète après l\'achat pour faciliter ce processus pour tout le monde.',
      },
    },
  },
  nl: {
    common: {
      orderNow: 'Nu bestellen',
      startFreeTrial: 'Gratis proberen',
      viewChannels: 'Bekijk kanalen',
      getStarted: 'Aan de slag',
    },
    hero: {
      title: 'Premium IPTV-dienst',
      subtitle: 'De beste IPTV-diensten in Europa.',
      description: 'Geniet van uw tijd met uitstekende beeldkwaliteit tot 4K, op elk apparaat, altijd en overal, met meer dan 79.000 kanalen, meer dan 249.000 VOD-content en 100% uptime.',
    },
    features: {
      title: 'Waarom ons kiezen',
      worldChannels: {
        title: '79.000+ Wereldkanalen',
        description: 'Een complete lijst van alle beschikbare Europese kanalen. Met meer dan 79.000 tv-kanalen kunnen we u de meest geavanceerde kanalenlijst op de markt bieden',
      },
      ultraFast: {
        title: 'Ultrasnelle verbinding',
        description: 'In tegenstelling tot andere IPTV-providers gebruikt TVPLUX een speciale Europese server van hoge kwaliteit. Het openen van onze tv-kanalen duurt minder dan 0,5 seconde.',
      },
      installation: {
        title: 'Directe installatie',
        description: 'U kunt uw IPTV-abonnement eenvoudig instellen en installeren op het apparaat van uw keuze. We bieden volledige ondersteuning na aankoop om dit proces voor iedereen gemakkelijk te maken.',
      },
    },
  },
  es: {
    common: {
      orderNow: 'Ordenar ahora',
      startFreeTrial: 'Prueba gratuita',
      viewChannels: 'Ver canales',
      getStarted: 'Empezar',
    },
    hero: {
      title: 'Servicio IPTV Premium',
      subtitle: 'Ofreciendo los mejores servicios IPTV en Europa.',
      description: 'Disfruta de tu tiempo con una excelente calidad de imagen de hasta 4K, en cualquier dispositivo, en cualquier momento y en cualquier lugar, con más de 79.000 canales, más de 249.000 contenidos VOD y un tiempo de actividad del 100%.',
    },
    features: {
      title: 'Por qué elegirnos',
      worldChannels: {
        title: '79.000+ Canales mundiales',
        description: 'Una lista completa de todos los canales europeos disponibles. Con más de 79.000 canales de televisión, podemos ofrecerle la lista de canales más avanzada del mercado',
      },
      ultraFast: {
        title: 'Conexión ultrarrápida',
        description: 'A diferencia de otros proveedores de IPTV, TVPLUX utiliza un servidor europeo dedicado de alta calidad. La apertura de nuestros canales de televisión tardará menos de 0,5 segundos.',
      },
      installation: {
        title: 'Instalación instantánea',
        description: 'Puede configurar e instalar fácilmente su suscripción de IPTV en el dispositivo que elija. Ofrecemos asistencia completa después de la compra para facilitar este proceso para todos.',
      },
    },
  },
};