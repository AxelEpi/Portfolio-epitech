// Site-wide configuration
export const siteConfig = {
  // Site metadata
  name: "Axel — Portfolio",
  title: "Axel — Portfolio",
  description: "Étudiant Pré-MSc Tech @ Epitech Moulins · Data Analyst en alternance Portfolio avec Astro template",
  
  // Navigation
  navigation: {
    home: "Accueil",
    posts: "Expériences",
    skills: "compétences",
    comments: "Commentaires",
  },
  
  // Hero Section
  hero: {
    prefix: "Je suis",
    name: "Axel LARGUIER",
    intro: "Étudiant Pré-MSc Tech @ Epitech Moulins · Data Analyst en alternance",
    avatar: "/image/Photo.jpg",
    buttons: {
      viewPosts: "Voir les projets",
      contactMe: "Me contacter",
    },
    socialLinks: [
      { name: "Twitter", icon: "/svg/twitter.svg", url: "https://x.com/astrodotbuild" },
      { name: "LinkedIn", icon: "/svg/linkedin.svg", url: "https://www.linkedin.com/company/astrodotbuild" },
      { name: "Instagram", icon: "/svg/instagram.svg", url: "https://www.facebook.com/astrodotbuild" },
      { name: "GitHub", icon: "/svg/github.svg", url: "https://github.com/tomcomtang/astro-cartoon-portfolio" },
    ],
  },
  
  // About Section
  about: {
    title: "À propos de moi",
    text: "Titulaire d'une licence en mathématiques et actuellement en Pré-Master of Sciences Tech à Epitech Moulins, j'effectue mon alternance en tant qu'assistant data analyst au sein de Clauger 3E, le laboratoire numérique basé à Brignais.",
  },
  
  // Contact Page
  contact: {
    title: "Contact",
    subtitle: "Je suis toujours ouvert à discuter de nouveaux projets, d'idées créatives ou d'opportunités de collaboration.",
    info: {
       email: {
        label: "Email",
        value: "axel.larguier@epitech.eu",
        link: "axel.larguier@epitech.eu",
      },
      phone: {
        label: "Phone",
        value: "06 21 46 12 70",
        link: "tel:06 21 46 12 70",
      },
      location: {
        label: "Location",
        value: "Moulins sur Allier, France",
      },
    },
    followMe: {
      title: "Suivez-moi",
      links: [
        { name: "Twitter", icon: "/svg/twitter.svg", url: "https://x.com/astrodotbuild" },
        { name: "LinkedIn", icon: "/svg/linkedin.svg", url: "https://www.linkedin.com/company/astrodotbuild" },
        { name: "Insta", icon: "/svg/instagram.svg", url: "https://www.facebook.com/astrodotbuild" },
        { name: "GitHub", icon: "/svg/github.svg", url: "https://github.com/tomcomtang/astro-cartoon-portfolio" },
      ],
    },
    footerText: [
      "Je réponds généralement aux messages sous 24h en jours ouvrables.",
      "Hâte d'avoir de vos nouvelles ! 🚀",
    ],
    messageButton: "💬 Laisser un message",
  },
  
  // Footer
  footer: {
    copyright: "© 2026 Axel LARGUIER. email : axel.larguier@epitech.eu tel : 06 21 46 12 70",
    github: {
      text: "Étoiler ce projet sur GitHub",
      url: "https://github.com/AxelEpi/Portfolio-epitech",
    },
  },
  
  // Posts Page
  posts: {
    title: "Expériences",
    subtitle: "Découvrez mes dernieres expériences",
    searchPlaceholder: "Rechercher des expériences...",
  },
  Skills: {
    title: "Compétences"
  },
  
  // Comments Page
  comments: {
    title: "Commentaires & Discussion",
    subtitle: "Partagez vos pensées, questions ou suggestions ici. Connectons-nous et discutons !",
    guidelines: {
      title: "Règles de la communauté",
      items: [
        "Soyez respectueux et constructif dans vos commentaires",
        "Pas de spam, autopromotion ou publicité",
        "Pas d'attaques personnelles, discours haineux ou harcèlement",
        "Restez dans le sujet et gardez les discussions pertinentes",
        "Pas de contenu inapproprié, offensant ou illégal",
        "Utilisez un langage clair, amical et inclusif",
      ],
    },
  },
};