import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    // typescript,
    html,
    css,
    reactjs,
    // redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    // docker,
    // meta,
    // tesla,
    // starbucks,
    // shopify,
    philiance,
    intergate,
    bh,
    // carrent,
    pizza,
    // jobit,
    tshirt,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "À propos",
    },
    {
      id: "work",
      title: "Expériences",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Passion",
      icon: web,
    },
    {
      title: "Innovation",
      icon: mobile,
    },
    {
      title: "Challenge",
      icon: backend,
    },
    {
      title: "Reconversion",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Développeur web & mobile",
      company_name: "Philliance (Formation)",
      icon: philiance,
      iconBg: "#383E56",
      date: "Septembre 2021 - Avril 2022",
      points: [
        "Développer et maintenir un site e-commerce en utilisant Symfony 5.",
        "Collaborer avec d'autres développeurs ayant des compétences complémentaires pour développer dans les meilleurs pratiques",
        "Mettre en œuvre un design responsive et assurer la compatibilité entre les navigateurs.",
        "Participer à des revues de code et fournir des commentaires constructifs avec le développeur sénior.",
      ],
    },
    {
      title: "Développeur web Laravel",
      company_name: "Intergate Logistique",
      icon: intergate,
      iconBg: "#E6DEDD",
      date: "Février 2022 - Avril 2022",
      points: [
        "Développer et maintenir une application interne en utilisant Laravel.",
        "Collaborer avec des commerciaux pour développer des fonctionnalités qui répondent aux besoins des utilisateurs.",
        "Communication avec le développeur sénior et le chef de projet pour assurer la qualité du code et des fonctionnalités.",
      ],
    },
    {
      title: "Développeur Web",
      company_name: "BH Compétences (Alternance)",
      icon: bh,
      iconBg: "#383E56",
      date: "Septembre 2022 - Actuellement",
      points: [
        "Concevoir et gérer des applications web en exploitant Wordpress ainsi que d'autres technologies associées.",
        "Travailler en synergie avec l'équipe de marketing digital pour optimiser les workflows grâce à des solutions en Python et Node.js, notamment le WebScrapping.",
        "Créer des outils innovants pour simplifier la planification des rendez-vous commerciaux en intégrant une API",
        "Engager des dialogues constructifs avec les managers et les équipes commerciales afin d'enrichir et d'affiner les fonctionnalités de nos applications web.",
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Pizza Menu",
      description:
        "Menu d'une pizzeria qui permet aux utilisateurs de consulter, choisir et commander des pizzas de différents types, offrant une solution pratique et efficace pour satisfaire leurs envies culinaires.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        // {
        //   name: "mongodb",
        //   color: "green-text-gradient",
        // },
        // {
        //   name: "tailwind",
        //   color: "pink-text-gradient",
        // },
      ],
      image: pizza,
      source_code_link: "https://github.com/GuiFraV/03-pizza-menu",
    },
    {
      name: "T-Shirt Shop 3D",
      description:
        "Application web permettant aux utilisateurs de visualiser un T-shirt en 3D, de le faire pivoter, de changer sa couleur et d'ajouter leur propre logo grâce à Three.js et React.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Three.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: tshirt,
      source_code_link: "https://github.com/GuiFraV/TshirtThreeJS",
    },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };