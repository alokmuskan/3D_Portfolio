import {
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
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  mysql,
  bootstrap,
  sql,
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  
  {
    title: "Fast Learner",
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
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Sql",
    icon: sql,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Member",
    company_name: "The Singularity Lab",
    icon: starbucks,
    iconBg: "#383E56",
    date: "September 2025 - Till Date",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Internal Affairs & Operations Coordinator",
    company_name: "Coding Club",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2025 - Till Date",
    points: [
      "Coordinating internal club activities, events, and operations to ensure smooth execution and effective communication among members.",
      "Collaborating with core team members to plan, organize, and manage coding events, workshops, and meetings.",
      "Maintaining proper documentation, attendance, and communication channels to streamline club operations.",
      "Assisting in decision-making, task allocation, and resolving internal issues to support overall club growth and productivity.",
      "Fostering collaboration between technical and non-technical teams to enhance the club’s efficiency and member engagement.",

    ],
  },
  {
    title: "Member",
    company_name: "E-Cell SRMAP",
    icon: shopify,
    iconBg: "#383E56",
    date: "August 2024 - July 2025",
    points: [
      "Actively participated in various entrepreneurship and innovation events organized by the E-Cell.",
      "Engaged in workshops and discussions to develop a deeper understanding of startups, business models, and leadership skills.",
      "Collaborated with fellow members to exchange ideas and promote an entrepreneurial mindset within the student community.",
      "Contributed to group activities, brainstorming sessions, and networking opportunities with industry professionals.",
      "Learned about the fundamentals of entrepreneurship, teamwork, and creative problem-solving through active involvement in club initiatives.",
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
    name: "Singularity Lab's Website",
    description:
      "A responsive and visually appealing website built for Singularity Labs to present its tech-driven initiatives, research, and community engagement in a modern digital format.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://thesingularitylab.netlify.app/",
  },
  {
    name: " Listify - Full Stack",
    description:
      "Listify – Web application that allows users to browse, search, and list various services, view ratings and reviews from other users, and explore locations through integrated maps, providing a comprehensive platform for discovering and evaluating local offerings.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://majorproject-ycqi.onrender.com/",
  },
  {
    name: "SPOTIFY CLONE (UI/UX)",
    description:
      "Web-based music streaming application that allows users to browse songs, create playlists, and enjoy a seamless listening with an interactive and responsive user interface inspired by Spotify’s design.",
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
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/alokmuskan/Projects/tree/main/Spotify%20clone",
  },
];

export { services, technologies, experiences, testimonials, projects };