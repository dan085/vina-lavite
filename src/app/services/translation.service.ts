import { Injectable, signal, computed, effect } from '@angular/core';

export type Language = 'es' | 'en' | 'it';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  currentLang = signal<Language>(this.getInitialLanguage());
  private currentYear = new Date().getFullYear();

  constructor() {
    effect(() => {
      const lang = this.currentLang();
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('vinalavite-lang', lang);
      }
    });
  }

  private getInitialLanguage(): Language {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = localStorage.getItem('vinalavite-lang');
      if (saved === 'es' || saved === 'en' || saved === 'it') {
        return saved;
      }
    }
    return 'es';
  }

  translations = {
    es: {
      nav: {
        home: 'Inicio',
        wines: 'Vinos',
        gallery: 'Galería',
        about: 'Sobre Nosotros',
        contact: 'Contacto'
      },
      hero: {
        title: 'Viña La Vite',
        subtitle: 'Tradición y Excelencia en cada copa',
        description: 'Descubre nuestros vinos artesanales, cultivados con pasión en las mejores tierras de Chile.',
        winesBtn: 'Nuestros Vinos',
        contactBtn: 'Contáctanos'
      },
      featured: {
        title: 'Nuestros Vinos Destacados',
        viewMore: 'Ver más',
        wines: [
          {
            name: 'Malbec Gran Reserva',
            type: 'D.O. Colchagua 2022',
            description: 'Vino robusto con notas de frutos rojos y especias, ideal para carnes. Gran Reserva de la prestigiosa región de Colchagua.'
          },
          {
            name: 'Carmenere Gran Reserva',
            type: 'D.O. Aconcagua 2022',
            description: 'Elegante y complejo, con aromas frutales característicos de la cepa Carmenere del Valle de Aconcagua.'
          },
          {
            name: 'Cabernet Sauvignon Premium',
            type: 'D.O. Maipo 2021',
            description: 'Intenso y estructurado, con taninos suaves y largo retrogusto del prestigioso Valle del Maipo.'
          }
        ]
      },
      about: {
        title: 'Nuestra Historia',
        text: 'Viña La Vite nace del amor por la tierra y la pasión por crear vinos excepcionales. Con años de experiencia y dedicación, cada botella cuenta una historia de tradición y calidad desde el Valle de Colchagua.',
        btn: 'Conocer más'
      },
      cta: {
        title: 'Visítanos',
        text: 'Ven a conocer nuestros viñedos y degusta nuestros mejores vinos',
        btn: 'Agenda tu visita'
      },
      footer: {
        rights: `© ${this.currentYear} Viña La Vite. Todos los derechos reservados.`,
        terms: 'Términos y Condiciones',
        privacy: 'Política de Privacidad'
      },
      whatsappFloat: 'Chat en WhatsApp',
      contactPage: {
        title: 'Contáctanos',
        subtitle: 'Estamos aquí para ayudarte',
        directContact: 'Contacto Directo',
        whatsapp: 'Chatea con nosotros',
        instagram: 'Síguenos en Instagram',
        email: 'Envíanos un correo',
        formTitle: 'Envíanos un mensaje',
        name: 'Nombre Completo',
        emailLabel: 'Email',
        phone: 'Teléfono',
        message: 'Mensaje',
        send: 'Enviar Mensaje',
        address: 'Nuestra Ubicación'
      },
      winesPage: {
        title: 'Nuestros Vinos',
        subtitle: 'Descubre la excelencia en cada botella',
        all: 'Todos',
        red: 'Tintos',
        white: 'Blancos',
        rose: 'Rosados',
        sparkling: 'Espumantes',
        year: 'Cosecha',
        varietal: 'Varietal',
        alcohol: 'Alcohol',
        temperature: 'Temperatura',
        tastingNotes: 'Notas de Cata',
        pairing: 'Maridaje',
        list: [
          {
            description: 'Vino tinto de color rojo violáceo intenso, con aromas a frutos rojos maduros.',
            tastingNotes: 'En boca es robusto y balanceado, con taninos suaves y un final largo y persistente. Notas de ciruela, cereza y un toque de vainilla.',
            pairing: 'Ideal para acompañar carnes rojas asadas, cordero, quesos maduros y pasta con salsas intensas.'
          },
          {
            description: 'Vino tinto complejo y elegante con gran potencial de guarda.',
            tastingNotes: 'Aromas a cassis, pimiento verde y cedro. En boca presenta taninos firmes y estructura robusta con final largo.',
            pairing: 'Perfecto para carnes a la parrilla, guisos de carne, cordero al horno y quesos de alta maduración.'
          },
          {
            description: 'Vino blanco dorado brillante con fermentación en barrica.',
            tastingNotes: 'Aromas a frutas tropicales, manzana verde y notas de vainilla. En boca es cremoso y equilibrado con acidez refrescante.',
            pairing: 'Ideal con pescados en salsa, mariscos, pollo en crema y risottos.'
          },
          {
            description: 'Vino blanco joven y fresco con aromas herbáceos característicos.',
            tastingNotes: 'Aromas intensos a cítricos, pomelo y hierbas frescas. Paladar vibrante con acidez marcada y final refrescante.',
            pairing: 'Excelente con ensaladas, ceviches, sushi, quesos de cabra y mariscos.'
          },
          {
            description: 'Vino tinto elegante y sedoso de color rubí.',
            tastingNotes: 'Aromas a frutos rojos frescos, cereza y fresas. En boca es suave y sedoso con taninos finos y final delicado.',
            pairing: 'Perfecto con salmón, atún, pato, hongos y quesos suaves.'
          },
          {
            description: 'Vino rosado fresco y aromático de color salmón.',
            tastingNotes: 'Aromas a fresas, sandía y flores. En boca es ligero, fresco y con acidez equilibrada.',
            pairing: 'Ideal con ensaladas, tapas, carnes blancas, mariscos y comida mediterránea.'
          },
          {
            description: 'Espumante método tradicional sin dosage, burbujas finas y persistentes.',
            tastingNotes: 'Aromas a pan tostado, manzana verde y cítricos. Paladar seco, elegante con acidez viva y final prolongado.',
            pairing: 'Perfecto como aperitivo, con ostras, caviar, sushi y mariscos.'
          },
          {
            description: 'Vino tinto de edición limitada, nuestro mejor corte.',
            tastingNotes: 'Complejo con aromas a frutos negros, especias, chocolate y tabaco. En boca es potente, estructurado con taninos redondos.',
            pairing: 'Ideal para ocasiones especiales con carnes premium, caza mayor y platos gourmet.'
          }
        ]
      },
      galleryPage: {
        title: 'Galería',
        subtitle: 'Momentos capturados en Viña La Vite',
        instagramTitle: 'Síguenos en Instagram',
        instagramHandle: '@vinalavite',
        instagramDescription: 'Descubre más fotos de nuestros viñedos, eventos y productos en nuestra cuenta de Instagram',
        instagramButton: 'Visitar Instagram',
        items: [
          { title: 'Barriles de Roble', description: 'Donde nuestros vinos adquieren carácter' },
          { title: 'Catación Directa', description: 'Probando la calidad desde el barril' },
          { title: 'Carmenere Mulchén', description: 'Nuestro vino emblemático de 2009' },
          { title: 'Eventos Especiales', description: 'Celebraciones elegantes con nuestros vinos' },
          { title: 'Paisajes', description: 'La belleza de nuestra tierra' },
          { title: 'Nuestro Equipo', description: 'Personas apasionadas por el vino' },
          { title: 'Naturaleza', description: 'En armonía con el medio ambiente' },
          { title: 'Catas', description: 'Experiencias únicas para los sentidos' },
          { title: 'Reconocimientos', description: 'Premios y distinciones recibidas' }
        ]
      },
      aboutPage: {
        title: 'Sobre Nosotros',
        subtitle: 'Nuestra pasión por el vino, nuestra historia',
        historyTitle: 'Nuestra Historia',
        historyText1: 'Viña La Vite nace del sueño de crear vinos excepcionales que reflejen la esencia de nuestra tierra. Con años de experiencia y una profunda pasión por la viticultura, hemos cultivado nuestros viñedos con dedicación y respeto por la naturaleza.',
        historyText2: 'Cada botella cuenta una historia de tradición, innovación y compromiso con la excelencia. Desde la selección de las mejores uvas hasta el proceso de vinificación, cada paso está cuidadosamente pensado para crear vinos que deleiten los sentidos.',
        missionTitle: 'Nuestra Misión',
        missionText: 'Producir vinos de alta calidad que representen la excelencia y tradición de nuestra región, ofreciendo experiencias memorables a cada uno de nuestros clientes.',
        visionTitle: 'Nuestra Visión',
        visionText: 'Ser reconocidos como una de las viñas más prestigiosas, distinguiéndonos por la calidad de nuestros vinos y nuestro compromiso con la sustentabilidad.',
        valuesTitle: 'Nuestros Valores',
        teamTitle: 'Nuestro Equipo',
        teamIntro: 'Un grupo de profesionales apasionados dedicados a crear los mejores vinos',
        awardsTitle: 'Reconocimientos',
        values: [
          { title: 'Sustentabilidad', description: 'Comprometidos con prácticas agrícolas responsables y el cuidado del medio ambiente.' },
          { title: 'Calidad', description: 'Excelencia en cada paso del proceso, desde la viña hasta la copa.' },
          { title: 'Tradición', description: 'Respeto por las técnicas tradicionales combinadas con innovación.' },
          { title: 'Pasión', description: 'Amor genuino por el arte de hacer vino y compartirlo con el mundo.' }
        ],
        team: [
          { name: 'Roberto Martínez', role: 'Enólogo Principal', bio: 'Con más de 20 años de experiencia en vinificación, Roberto lidera nuestro proceso de elaboración.' },
          { name: 'María González', role: 'Directora de Viñedos', bio: 'Experta en viticultura, María supervisa el cultivo y cuidado de nuestras vides.' },
          { name: 'Carlos Rodríguez', role: 'Sommelier', bio: 'Sommelier certificado, Carlos dirige nuestras catas y experiencias enológicas.' }
        ],
        awards: [
          { title: 'Medalla de Oro - Malbec Reserva', year: '2023' },
          { title: 'Mejor Viña Boutique', year: '2022' },
          { title: 'Premio a la Sustentabilidad', year: '2023' },
          { title: 'Reconocimiento Regional', year: '2021' }
        ]
      }
    },
    en: {
      nav: {
        home: 'Home',
        wines: 'Wines',
        gallery: 'Gallery',
        about: 'About Us',
        contact: 'Contact'
      },
      hero: {
        title: 'Viña La Vite',
        subtitle: 'Tradition and Excellence in every glass',
        description: 'Discover our artisanal wines, cultivated with passion in the best lands of Chile.',
        winesBtn: 'Our Wines',
        contactBtn: 'Contact Us'
      },
      featured: {
        title: 'Our Featured Wines',
        viewMore: 'View more',
        wines: [
          {
            name: 'Malbec Gran Reserva',
            type: 'D.O. Colchagua 2022',
            description: 'A robust wine with notes of red fruits and spices, ideal for meats. Grand Reserve from the prestigious Colchagua region.'
          },
          {
            name: 'Carmenere Gran Reserva',
            type: 'D.O. Aconcagua 2022',
            description: 'Elegant and complex, with fruity aromas characteristic of the Carmenere grape from the Aconcagua Valley.'
          },
          {
            name: 'Cabernet Sauvignon Premium',
            type: 'D.O. Maipo 2021',
            description: 'Intense and structured, with smooth tannins and a long aftertaste from the prestigious Maipo Valley.'
          }
        ]
      },
      about: {
        title: 'Our History',
        text: 'Viña La Vite is born from the love for the land and the passion for creating exceptional wines. With years of experience and dedication, every bottle tells a story of tradition and quality from the Colchagua Valley.',
        btn: 'Learn more'
      },
      cta: {
        title: 'Visit Us',
        text: 'Come visit our vineyards and taste our best wines',
        btn: 'Schedule your visit'
      },
      footer: {
        rights: `© ${this.currentYear} Viña La Vite. All rights reserved.`,
        terms: 'Terms and Conditions',
        privacy: 'Privacy Policy'
      },
      whatsappFloat: 'Chat on WhatsApp',
      contactPage: {
        title: 'Contact Us',
        subtitle: 'We are here to help you',
        directContact: 'Direct Contact',
        whatsapp: 'Chat with us',
        instagram: 'Follow us on Instagram',
        email: 'Send us an email',
        formTitle: 'Send us a message',
        name: 'Full Name',
        emailLabel: 'Email',
        phone: 'Phone',
        message: 'Message',
        send: 'Send Message',
        address: 'Our Location'
      },
      winesPage: {
        title: 'Our Wines',
        subtitle: 'Discover excellence in every bottle',
        all: 'All',
        red: 'Reds',
        white: 'Whites',
        rose: 'Rosés',
        sparkling: 'Sparkling',
        year: 'Vintage',
        varietal: 'Varietal',
        alcohol: 'Alcohol',
        temperature: 'Temperature',
        tastingNotes: 'Tasting Notes',
        pairing: 'Pairing',
        list: [
          {
            description: 'Red wine with intense violet-red color and aromas of ripe red fruits.',
            tastingNotes: 'On the palate it is robust and balanced, with soft tannins and a long, persistent finish. Notes of plum, cherry and a touch of vanilla.',
            pairing: 'Ideal to accompany roast red meats, lamb, mature cheeses and pasta with intense sauces.'
          },
          {
            description: 'Complex and elegant red wine with great aging potential.',
            tastingNotes: 'Aromas of cassis, green pepper and cedar. On the palate it presents firm tannins and robust structure with a long finish.',
            pairing: 'Perfect for grilled meats, beef stews, roast lamb and highly aged cheeses.'
          },
          {
            description: 'Bright golden white wine with barrel fermentation.',
            tastingNotes: 'Aromas of tropical fruits, green apple and notes of vanilla. On the palate it is creamy and balanced with refreshing acidity.',
            pairing: 'Ideal with fish in sauce, seafood, chicken in cream and risottos.'
          },
          {
            description: 'Young, fresh white wine with characteristic herbaceous aromas.',
            tastingNotes: 'Intense citrus, grapefruit and fresh herb aromas. Vibrant palate with marked acidity and a refreshing finish.',
            pairing: 'Excellent with salads, ceviches, sushi, goat cheeses and seafood.'
          },
          {
            description: 'Elegant and silky red wine with ruby color.',
            tastingNotes: 'Aromas of fresh red fruits, cherry and strawberries. On the palate it is smooth and silky with fine tannins and a delicate finish.',
            pairing: 'Perfect with salmon, tuna, duck, mushrooms and soft cheeses.'
          },
          {
            description: 'Fresh, aromatic salmon-colored rosé wine.',
            tastingNotes: 'Aromas of strawberries, watermelon and flowers. On the palate it is light, fresh with balanced acidity.',
            pairing: 'Ideal with salads, tapas, white meats, seafood and Mediterranean food.'
          },
          {
            description: 'Traditional method sparkling wine without dosage, fine and persistent bubbles.',
            tastingNotes: 'Aromas of toasted bread, green apple and citrus. Dry, elegant palate with lively acidity and a prolonged finish.',
            pairing: 'Perfect as an aperitif, with oysters, caviar, sushi and seafood.'
          },
          {
            description: 'Limited edition red wine, our finest blend.',
            tastingNotes: 'Complex with aromas of black fruits, spices, chocolate and tobacco. On the palate it is powerful, structured with rounded tannins.',
            pairing: 'Ideal for special occasions with premium meats, big game and gourmet dishes.'
          }
        ]
      },
      galleryPage: {
        title: 'Gallery',
        subtitle: 'Moments captured at Viña La Vite',
        instagramTitle: 'Follow us on Instagram',
        instagramHandle: '@vinalavite',
        instagramDescription: 'Discover more photos of our vineyards, events and products on our Instagram account',
        instagramButton: 'Visit Instagram',
        items: [
          { title: 'Oak Barrels', description: 'Where our wines acquire character' },
          { title: 'Direct Tasting', description: 'Tasting quality straight from the barrel' },
          { title: 'Carmenere Mulchén', description: 'Our emblematic 2009 wine' },
          { title: 'Special Events', description: 'Elegant celebrations with our wines' },
          { title: 'Landscapes', description: 'The beauty of our land' },
          { title: 'Our Team', description: 'People passionate about wine' },
          { title: 'Nature', description: 'In harmony with the environment' },
          { title: 'Tastings', description: 'Unique experiences for the senses' },
          { title: 'Awards', description: 'Prizes and distinctions received' }
        ]
      },
      aboutPage: {
        title: 'About Us',
        subtitle: 'Our passion for wine, our history',
        historyTitle: 'Our History',
        historyText1: 'Viña La Vite was born from the dream of creating exceptional wines that reflect the essence of our land. With years of experience and a deep passion for viticulture, we have cultivated our vineyards with dedication and respect for nature.',
        historyText2: 'Each bottle tells a story of tradition, innovation and commitment to excellence. From the selection of the best grapes to the winemaking process, every step is carefully thought out to create wines that delight the senses.',
        missionTitle: 'Our Mission',
        missionText: 'To produce high quality wines that represent the excellence and tradition of our region, offering memorable experiences to each of our customers.',
        visionTitle: 'Our Vision',
        visionText: 'To be recognized as one of the most prestigious wineries, distinguished by the quality of our wines and our commitment to sustainability.',
        valuesTitle: 'Our Values',
        teamTitle: 'Our Team',
        teamIntro: 'A group of passionate professionals dedicated to creating the best wines',
        awardsTitle: 'Awards',
        values: [
          { title: 'Sustainability', description: 'Committed to responsible agricultural practices and care for the environment.' },
          { title: 'Quality', description: 'Excellence at every step of the process, from the vineyard to the glass.' },
          { title: 'Tradition', description: 'Respect for traditional techniques combined with innovation.' },
          { title: 'Passion', description: 'Genuine love for the art of making wine and sharing it with the world.' }
        ],
        team: [
          { name: 'Roberto Martínez', role: 'Head Winemaker', bio: 'With over 20 years of experience in winemaking, Roberto leads our production process.' },
          { name: 'María González', role: 'Vineyard Director', bio: 'An expert in viticulture, María oversees the cultivation and care of our vines.' },
          { name: 'Carlos Rodríguez', role: 'Sommelier', bio: 'A certified sommelier, Carlos directs our tastings and wine experiences.' }
        ],
        awards: [
          { title: 'Gold Medal - Malbec Reserva', year: '2023' },
          { title: 'Best Boutique Winery', year: '2022' },
          { title: 'Sustainability Award', year: '2023' },
          { title: 'Regional Recognition', year: '2021' }
        ]
      }
    },
    it: {
      nav: {
        home: 'Inizio',
        wines: 'Vini',
        gallery: 'Galleria',
        about: 'Chi Siamo',
        contact: 'Contatto'
      },
      hero: {
        title: 'Viña La Vite',
        subtitle: 'Tradizione ed Eccellenza in ogni bicchiere',
        description: 'Scopri i nostri vini artigianali, coltivati con passione nelle migliori terre del Cile.',
        winesBtn: 'I Nostri Vini',
        contactBtn: 'Contattaci'
      },
      featured: {
        title: 'I Nostri Vini In Evidenza',
        viewMore: 'Vedi altro',
        wines: [
          {
            name: 'Malbec Gran Reserva',
            type: 'D.O. Colchagua 2022',
            description: 'Vino robusto con note di frutti rossi e spezie, ideale per le carni. Gran Riserva della prestigiosa regione di Colchagua.'
          },
          {
            name: 'Carmenere Gran Reserva',
            type: 'D.O. Aconcagua 2022',
            description: 'Elegante e complesso, con aromi fruttati caratteristici del vitigno Carmenere della Valle dell\'Aconcagua.'
          },
          {
            name: 'Cabernet Sauvignon Premium',
            type: 'D.O. Maipo 2021',
            description: 'Intenso e strutturato, con tannini morbidi e un lungo retrogusto della prestigiosa Valle del Maipo.'
          }
        ]
      },
      about: {
        title: 'La Nostra Storia',
        text: 'Viña La Vite nasce dall\'amore per la terra e dalla passione per creare vini eccezionali. Con anni di esperienza e dedizione, ogni bottiglia racconta una storia di tradizione e qualità dalla Valle di Colchagua.',
        btn: 'Saperne di più'
      },
      cta: {
        title: 'Visitaci',
        text: 'Vieni a visitare i nostri vigneti e degusta i nostri migliori vini',
        btn: 'Prenota la tua visita'
      },
      footer: {
        rights: `© ${this.currentYear} Viña La Vite. Tutti i diritti riservati.`,
        terms: 'Termini e Condizioni',
        privacy: 'Politica sulla Privacy'
      },
      whatsappFloat: 'Chatta su WhatsApp',
      contactPage: {
        title: 'Contattaci',
        subtitle: 'Siamo qui per aiutarti',
        directContact: 'Contatto Diretto',
        whatsapp: 'Chatta con noi',
        instagram: 'Seguici su Instagram',
        email: 'Inviaci un\'email',
        formTitle: 'Inviaci un messaggio',
        name: 'Nome Completo',
        emailLabel: 'Email',
        phone: 'Telefono',
        message: 'Messaggio',
        send: 'Invia Messaggio',
        address: 'La Nostra Posizione'
      },
      winesPage: {
        title: 'I Nostri Vini',
        subtitle: 'Scopri l\'eccellenza in ogni bottiglia',
        all: 'Tutti',
        red: 'Rossi',
        white: 'Bianchi',
        rose: 'Rosati',
        sparkling: 'Spumanti',
        year: 'Annata',
        varietal: 'Vitigno',
        alcohol: 'Alcol',
        temperature: 'Temperatura',
        tastingNotes: 'Note di Degustazione',
        pairing: 'Abbinamento',
        list: [
          {
            description: 'Vino rosso di colore rosso violaceo intenso, con aromi di frutti rossi maturi.',
            tastingNotes: 'In bocca è robusto ed equilibrato, con tannini morbidi e un finale lungo e persistente. Note di prugna, ciliegia e un tocco di vaniglia.',
            pairing: 'Ideale per accompagnare carni rosse alla griglia, agnello, formaggi stagionati e pasta con sughi intensi.'
          },
          {
            description: 'Vino rosso complesso ed elegante con grande potenziale di invecchiamento.',
            tastingNotes: 'Aromi di cassis, peperone verde e cedro. In bocca presenta tannini decisi e struttura robusta con finale lungo.',
            pairing: 'Perfetto per carni alla griglia, stufati di carne, agnello al forno e formaggi a lunga stagionatura.'
          },
          {
            description: 'Vino bianco dorato brillante con fermentazione in barrique.',
            tastingNotes: 'Aromi di frutti tropicali, mela verde e note di vaniglia. In bocca è cremoso ed equilibrato con acidità rinfrescante.',
            pairing: 'Ideale con pesci in salsa, frutti di mare, pollo alla crema e risotti.'
          },
          {
            description: 'Vino bianco giovane e fresco con aromi erbacei caratteristici.',
            tastingNotes: 'Aromi intensi di agrumi, pompelmo ed erbe fresche. Palato vibrante con acidità marcata e finale rinfrescante.',
            pairing: 'Eccellente con insalate, ceviche, sushi, formaggi di capra e frutti di mare.'
          },
          {
            description: 'Vino rosso elegante e setoso di colore rubino.',
            tastingNotes: 'Aromi di frutti rossi freschi, ciliegia e fragole. In bocca è morbido e setoso con tannini fini e finale delicato.',
            pairing: 'Perfetto con salmone, tonno, anatra, funghi e formaggi morbidi.'
          },
          {
            description: 'Vino rosato fresco e aromatico di colore salmone.',
            tastingNotes: 'Aromi di fragole, anguria e fiori. In bocca è leggero, fresco e con acidità equilibrata.',
            pairing: 'Ideale con insalate, tapas, carni bianche, frutti di mare e cucina mediterranea.'
          },
          {
            description: 'Spumante metodo classico senza dosaggio, bollicine fini e persistenti.',
            tastingNotes: 'Aromi di pane tostato, mela verde e agrumi. Palato secco, elegante con acidità viva e finale prolungato.',
            pairing: 'Perfetto come aperitivo, con ostriche, caviale, sushi e frutti di mare.'
          },
          {
            description: 'Vino rosso edizione limitata, il nostro miglior taglio.',
            tastingNotes: 'Complesso con aromi di frutti neri, spezie, cioccolato e tabacco. In bocca è potente, strutturato con tannini rotondi.',
            pairing: 'Ideale per occasioni speciali con carni pregiate, selvaggina e piatti gourmet.'
          }
        ]
      },
      galleryPage: {
        title: 'Galleria',
        subtitle: 'Momenti catturati a Viña La Vite',
        instagramTitle: 'Seguici su Instagram',
        instagramHandle: '@vinalavite',
        instagramDescription: 'Scopri più foto dei nostri vigneti, eventi e prodotti sul nostro account Instagram',
        instagramButton: 'Visita Instagram',
        items: [
          { title: 'Botti di Rovere', description: 'Dove i nostri vini acquisiscono carattere' },
          { title: 'Degustazione Diretta', description: 'Assaggiando la qualità dalla botte' },
          { title: 'Carmenere Mulchén', description: 'Il nostro vino emblematico del 2009' },
          { title: 'Eventi Speciali', description: 'Celebrazioni eleganti con i nostri vini' },
          { title: 'Paesaggi', description: 'La bellezza della nostra terra' },
          { title: 'Il Nostro Team', description: 'Persone appassionate di vino' },
          { title: 'Natura', description: 'In armonia con l\'ambiente' },
          { title: 'Degustazioni', description: 'Esperienze uniche per i sensi' },
          { title: 'Riconoscimenti', description: 'Premi e riconoscimenti ricevuti' }
        ]
      },
      aboutPage: {
        title: 'Chi Siamo',
        subtitle: 'La nostra passione per il vino, la nostra storia',
        historyTitle: 'La Nostra Storia',
        historyText1: 'Viña La Vite nasce dal sogno di creare vini eccezionali che riflettano l\'essenza della nostra terra. Con anni di esperienza e una profonda passione per la viticoltura, abbiamo coltivato i nostri vigneti con dedizione e rispetto per la natura.',
        historyText2: 'Ogni bottiglia racconta una storia di tradizione, innovazione e impegno per l\'eccellenza. Dalla selezione delle migliori uve al processo di vinificazione, ogni passo è attentamente studiato per creare vini che deliziano i sensi.',
        missionTitle: 'La Nostra Missione',
        missionText: 'Produrre vini di alta qualità che rappresentino l\'eccellenza e la tradizione della nostra regione, offrendo esperienze memorabili a ciascuno dei nostri clienti.',
        visionTitle: 'La Nostra Visione',
        visionText: 'Essere riconosciuti come una delle cantine più prestigiose, distinguendoci per la qualità dei nostri vini e il nostro impegno per la sostenibilità.',
        valuesTitle: 'I Nostri Valori',
        teamTitle: 'Il Nostro Team',
        teamIntro: 'Un gruppo di professionisti appassionati dedicati alla creazione dei migliori vini',
        awardsTitle: 'Riconoscimenti',
        values: [
          { title: 'Sostenibilità', description: 'Impegnati in pratiche agricole responsabili e nella cura dell\'ambiente.' },
          { title: 'Qualità', description: 'Eccellenza in ogni fase del processo, dalla vigna al bicchiere.' },
          { title: 'Tradizione', description: 'Rispetto per le tecniche tradizionali combinate con l\'innovazione.' },
          { title: 'Passione', description: 'Amore genuino per l\'arte di fare vino e condividerlo con il mondo.' }
        ],
        team: [
          { name: 'Roberto Martínez', role: 'Enologo Principale', bio: 'Con oltre 20 anni di esperienza in vinificazione, Roberto guida il nostro processo produttivo.' },
          { name: 'María González', role: 'Direttrice dei Vigneti', bio: 'Esperta di viticoltura, María supervisiona la coltivazione e la cura delle nostre viti.' },
          { name: 'Carlos Rodríguez', role: 'Sommelier', bio: 'Sommelier certificato, Carlos dirige le nostre degustazioni ed esperienze enologiche.' }
        ],
        awards: [
          { title: 'Medaglia d\'Oro - Malbec Reserva', year: '2023' },
          { title: 'Migliore Cantina Boutique', year: '2022' },
          { title: 'Premio per la Sostenibilità', year: '2023' },
          { title: 'Riconoscimento Regionale', year: '2021' }
        ]
      }
    }
  };

  t = computed(() => this.translations[this.currentLang()]);

  setLanguage(lang: Language) {
    this.currentLang.set(lang);
  }
}
