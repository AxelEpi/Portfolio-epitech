import { title } from "framer-motion/client";
import Skills from "../pages/skills.astro";

// Site-wide configuration
export const siteConfig = {
  // Site metadata
  name: "Axel — Portfolio",
  title: "Axel — Portfolio",
  description: "Pre-MSc Tech Student @ Epitech Moulins · Data Analyst Apprentice Portfolio with Astro template",
  
  // Navigation
  navigation: {
    home: "Home",
    posts: "Experiences",
    Skills: "skills",
    comments: "Comments",
  },
  
  // Hero Section
  hero: {
    prefix: "I am",
    name: "Axel LARGUIER",
    intro: "Pre-MSc Tech Student @ Epitech Moulins · Data Analyst Apprentice",
    avatar: "/image/Photo.jpg",
    buttons: {
      viewPosts: "View Projects",
      contactMe: "Contact Me",
    },
    socialLinks: [
      { name: "Twitter", icon: "/svg/twitter.svg", url: "Mon-url" },
      { name: "LinkedIn", icon: "/svg/linkedin.svg", url: "Mon-url" },
      { name: "Instagram", icon: "/svg/instagram.svg", url: "Mon-url" },
      { name: "GitHub", icon: "/svg/github.svg", url: "Mon-url" },
    ],
  },
  
  // About Section
  about: {
    title: "About Me",
    text: "Holder of a mathematics degree and currently in Pre-Master of Sciences Tech at Epitech Moulins, I am doing my apprenticeship as an assistant data analyst at Clauger 3E, the digital laboratory based in Brignais.",
  },
  
  // Contact Page
  contact: {
    title: "Contact",
    subtitle: "I'm always open to discussing new projects, creative ideas, or collaboration opportunities.",
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
      title: "Follow Me",
      links: [
        { name: "Twitter", icon: "/svg/twitter.svg", url: "Mon-url" },
        { name: "LinkedIn", icon: "/svg/linkedin.svg", url: "Mon-url" },
        { name: "Instagram", icon: "/svg/instagram.svg", url: "Mon-url" },
        { name: "GitHub", icon: "/svg/github.svg", url: "Mon-url" },
      ],
    },
    footerText: [
      "I typically respond to messages within 24 hours on business days.",
      "Looking forward to hearing from you! 🚀",
    ],
    messageButton: "💬 Leave a Message",
  },
  
  // Footer
  footer: {
    copyright: "© 2026 Axel LARGUIER. email : axel.larguier@epitech.eu tel : 06 21 46 12 70",
    github: {
      text: "Star this project on GitHub",
      url: "https://github.com/AxelEpi/Portfolio-epitech",
    },
  },
  
  // Posts Page
  posts: {
    title: "Experiences",
    subtitle: "Discover my latest experiences",
    searchPlaceholder: "Search experiences...",
  },
  Skills: {
    title: "Skills"
  },
  
  // Comments Page
  comments: {
    title: "Comments & Discussion",
    subtitle: "Share your thoughts, questions or suggestions here. Let's connect and discuss!",
    guidelines: {
      title: "Community Guidelines",
      items: [
        "Be respectful and constructive in your comments",
        "No spam, self-promotion or advertising",
        "No personal attacks, hate speech or harassment",
        "Stay on topic and keep discussions relevant",
        "No inappropriate, offensive or illegal content",
        "Use clear, friendly and inclusive language",
      ],
    },
  },
};