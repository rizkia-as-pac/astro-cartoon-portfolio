// Site-wide configuration
export const siteConfig = {
  // Site metadata (SEO)
  name: "ardhisa.com",
  title: "Rizkia Adhy Syahputra | Backend Engineer & Full-Stack Developer",
  description:
    "Portfolio and technical blog of Rizkia Adhy Syahputra. Backend Engineer focused on Go, PostgreSQL, Redis, Clean Architecture, and building scalable systems including digital medical record solutions (FHIR/SATUSEHAT).",

  // Navigation
  resume: "https://drive.google.com/file/d/18HpcLSwnoX0rp6gcg4pDst4u-nDD_ogU/view?usp=drive_link",
  navigation: {
    home: "Home",
    projects: "Projects",
    posts: "Blog",
    contact: "Contact",
    resume: "My Resume",
    // comments: "Discussion",
  },

  // Hero Section
  hero: {
    prefix: "Hi, I'm",
    name: "Rizkia Adhy Syahputra",
    intro:
      "Full-Stack Developer who enjoys building web applications and learning how systems work end to end. I work on both frontend and backend, focusing on writing clear, maintainable code and gradually improving system design.\n\nThis site is a collection of my projects, notes, and things I’ve learned along the way.",
    avatar: "/images/1767370257032.jpg",
    buttons: {
      viewPosts: "Read Blog",
      contactMe: "Contact",
    },
    socialLinks: [
      {
        name: "LinkedIn",
        icon: "/svg/linkedin.svg",
        url: "https://www.linkedin.com/in/rizkia-as/",
      },
      {
        name: "GitHub",
        icon: "/svg/github.svg",
        url: "https://github.com/rizkia-as-pac",
      },
      {
        name: "Email",
        icon: "/svg/email2.svg",
        url: "mailto:rizkia.as.pac@gmail.com",
      },
      {
        name: "Whatsapp",
        icon: "/svg/whatsapp.svg",
        url: "https://wa.me/6282248943527",
      },
    ],
  },

  // About Section
  about: {
    title: "About",
    text: "I’m Rizkia Adhy Syahputra, a Full-Stack Developer who enjoys building and maintaining web applications. I work across backend and frontend, focusing on clear logic, structured code, and reliable systems.\n\nHere I share some of my projects, technical notes, and lessons learned from practical development work.",
  },

  // Contact Page
  contact: {
    title: "Get In Touch",
    subtitle:
      "Open to web developer or full-stack opportunities, especially backend, or a simple conversation about building and maintaining software.",
    info: {
      email: {
        label: "Email",
        value: "rizkia.as.pac@gmail.com",
        link: "mailto:rizkia.as.pac@gmail.com",
      },
      phone: {
        label: "Phone",
        value: "+62 822-4894-3527",
        link: "https://wa.me/6282248943527",
      },
      location: {
        label: "Location",
        value: "Yogyakarta, Indonesia",
      },
    },
    followMe: {
      title: "Socials",
      links: [
        {
          name: "LinkedIn",
          icon: "/svg/linkedin.svg",
          url: "https://www.linkedin.com/in/rizkia-as/",
        },
        {
          name: "GitHub",
          icon: "/svg/github.svg",
          url: "https://github.com/rizkia-as-pac",
        },
        {
          name: "Email",
          icon: "/svg/email2.svg",
          url: "mailto:rizkia.as.pac@gmail.com",
        },
        {
          name: "Whatsapp",
          icon: "/svg/whatsapp.svg",
          url: "https://wa.me/6282248943527",
        },
      ],
    },
    footerText: [
      "I usually reply as soon as possible, but it might take a bit during busy hours.",
    ],
    messageButton: "Leave a Message",
  },

  // Footer
  footer: {
    copyright: "© 2026 Rizkia Adhy Syahputra. All rights reserved.",
    links: [
      // { text: "Privacy Policy", url: "/privacy" },
      // { text: "Terms", url: "/terms" },
      // { text: "Sitemap", url: "/sitemap.xml" },
    ],
    github: {
      text: "View source on GitHub",
      url: "https://github.com/<your-github-username>/<your-repo>",
    },
  },

  // Posts Page
  posts: {
    title: "Blog",
    subtitle: "A place for notes, thoughts, and anything I feel like writing.",
    searchPlaceholder: "Search articles...",
  },

  // Comments Page
  comments: {
    title: "Discussion",
    subtitle:
      "Share feedback, questions, or corrections. Constructive technical discussion is welcome.",
    guidelines: {
      title: "Guidelines",
      items: [
        "Be respectful and constructive",
        "No spam, self-promotion, or advertising",
        "No harassment, hate speech, or personal attacks",
        "Stay on topic and keep discussions relevant",
        "No illegal or offensive content",
        "Use clear and inclusive language",
      ],
    },
  },
};
