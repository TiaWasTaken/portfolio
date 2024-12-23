import {
  nextjs,
  smartprice,
  calendarg,
  ironbeton,
  uni,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  python,
  visual,
  nodejs,
  mongodb,
  git,
  shopify_logo,
  figma,
  docker,
  c,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Designer",
    icon: mobile,
  },
  {
    title: "UX/UI Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
 {
   name: "Shopify Liquid",
   icon: shopify,
 },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Typescript",
    icon: typescript,
  },
  // {
  //   name: "Visual Studio Code",
  //   icon: visual,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Tech Collaborator",
    company_name: "Iron Beton",
    icon: ironbeton,
    iconBg: "#383E56",
    date: "Oct 2023 - Apr 2024",
    points: [
      "Rebranding of an old website and new identity to the company.",
      "Collaborating with cross-functional teams including designers and developers.",
      "Formation of the employees and implementation of modern systems for scheduling and notes",
      "Creation of a check-in and check-out system for the employees connected to the server to track emails, and work time automatically.",
    ],
  },
  {
    title: "Student",
    company_name: "University of Verona (CS)",
    icon: uni,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - Present",
    points: [
      "Studying web applications and other related technologies.",
      "learing skills and information about Computer Science from some of the best professors in Italy.",
      "Implementing those informations with group projects and challenges.",
      "Participating in group events developing group skills and teamwork.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Oct 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Creating custom liquids and custom section designed for each specific Shopify Theme.",
      "Implementing and Developing responsive design and practical tools for Shopify Stores.",
      "Managing Google Pixels to handle data and informations about customers to implement email marketing at its best.",
    ],
  },
  {
    title: "Content Creator and Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Apr 2024 - Present",
    points: [
      "Hands-on experience in content creation, particularly in the areas of e-commerce and biohacking.",
      "Social and content creation experience which allowed me to grow an Instagram Page to +150K followers.",
      "Implementing the aspects of content creation with services and web tools which allow the public to have a deeper connection with the Influencer.",
      "Bridges creative strategy and technical execution, ensuring a seamless content experience.",
    ],
  },
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
    name: "CalendArg",
    description:
      "Web-based calendar app which lets the user create an account and sign in with Google or GitHub, link that account with Nylas and manage a fully functional calendar app.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: calendarg,
    source_code_link: "https://github.com/TiaWasTaken/calendarg",
  },
  {
    name: "SmartPrice",
    description:
      "A styled web scraper which let's the user paste an amazon link and displays info about the price of the product over time. It also email the user when the price get's lower.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "cheerio",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: smartprice,
    source_code_link: "https://github.com/TiaWasTaken/smartprice",
  },
  {
    name: "Coming Soon",
    description:
      "",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: calendarg,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
