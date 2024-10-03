import { FaCss3, FaGithub, FaHtml5, FaJs, FaLinkedin, FaReact, FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";

const links = [
  { name: "accueil", href: "/" },
  { name: "services", href: "/services" },
  { name: "profil", href: "/resume" },
  { name: "projets", href: "/work" },
  { name: "contact", href: "/contact" },
];

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Austin-William" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/austin-william-lo-2a75271a1/" },
];

const stats = [
  { num: 2, text: "Années d'expériences pro" },
  { num: 16, text: "Projets complétés" },
  { num: 8, text: "Téchnologies maîtrisées" },
  { num: 4, text: "Nombre d'expériences pro" },
]

const services = [
  {
    num: "01",
    title: "Développement Front-end",
    description: "",
    href: ""
  },
  {
    num: "02",
    title: "Développement Full-stack",
    description: "",
    href: ""
  },
  {
    num: "03",
    title: "Tests unitaires et d'intégration",
    description: "",
    href: ""
  },
  {
    num: "04",
    title: "CI/CD",
    description: "",
    href: ""
  },
]

const about = {
  title: "À propos de moi",
  description: "Je suis un développeur full-stack basé à Paris et passionné par le développement web. Mon langage favoris est ReactJS et j'aime créer des petites applications pour m'entrainer et apprendre.",
  info: [
    { name: "Nom", value: "Austin-William Lo" },
    { name: "Email", value: "austinw@live.fr" },
    { name: "Localisation", value: "Paris, France" },
    { name: "Hobbies", value: "Jeux vidéo, musique, sports" },
  ]
}

const experience = {
  title: "Expériences",
  description: "J'ai travaillé dans plusieurs entreprises en tant que développeur front-end et full-stack. J'ai acquis de l'expérience pour devenir un développeur autonome et flexible avec les bonnes pratiques nécessaires pour avoir du code propre et maintenable. J'ai travaillé avec des technologies telles que ReactJS, AngularJS, HCL Commerc, Java, .NET, C#, ...",
  jobs: [
    {
      company: "Ecocea Technologies",
      position: "Développeur Full-stack",
      duration: "2023 - 2024",
    },
    {
      company: "Natixis",
      position: "Développeur Full-stack",
      duration: "2022 - 2022",
    },
    {
      company: "Linagora",
      position: "Développeur Front-end",
      duration: "2020 - 2021",
    },
    {
      company: "Paperwork",
      position: "Développeur Full-stack",
      duration: "2022 - 2024",
    },
  ]
}

const education = {
  title: "Parcours",
  description: "J'ai étudié à Epitech Paris pendant 5 ans pour devenir Expert en Technologies de l'Information. Pendant mon cursus, j'ai appris divers langages de bas niveaux puis j'ai appris à développer des applications web et mobiles.",
  jobs: [
    {
      institution: "Epitech",
      degree: "Expert en Technologies de l'Information",
      duration: "2019 - 2024",
    },
    {
      institution: "Keimyung University",
      degree: "Etude à l'étranger",
      duration: "2022- 2023",
    }
  ]
}

const skills = {
  title: "Compétences",
  description: "J'ai travaillé avec un certain nombre de technologies et je suis toujours prêt à en apprendre davantage.",
  list: [
    { icon: <FaHtml5 />, name: "HTML 5" },
    { icon: <FaCss3 />, name: "CSS 3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <FaReact />, name: "ReactJS" },
    { icon: <SiNextdotjs />, name: "Next.Js" },
    { icon: <SiTailwindcss />, name: "TailwindCSS" },
    { icon: <FaGithub />, name: "Git | Github" },
  ]
}

const projects = [
  {
    number: "01",
    category: "Fullstack",
    title: "Paperwork",
    description: "A web app and a mobile app to help you to manage your french administrative paperworks.",
    stack: [
      { name: "ReactJS" },
      { name: "Next.JS" },
      { name: "React Native" },
      { name: "NodeJS" },
      { name: "PostgreSQL" },
      { name: "Docker" },
    ],
    image: "/assets/paperwork.PNG",
    link: "",
    github: "https://github.com/Paperwork-EIP"
  },
  {
    number: "02",
    category: "Mobile App",
    title: "Redditech",
    description: "A mobile application using Reddit API. This app is built with Flutter. This app will not be updated anymore. (School project)",
    stack: [
      { name: "Flutter" },
      { name: "Reddit API" }
    ],
    image: "/assets/redditech.png",
    link: "",
    github: "https://github.com/Austin-William/Redditech"
  },
  {
    number: "03",
    category: "Fullstack",
    title: "Area",
    description: "A web app to manage your different account in one app thanks to the API of the different services (Discord, Twitter, ...). This app is built with React JS, NodeJS/ExpressJS and Firebase. This app will not be updated anymore. (School project)",
    stack: [
      { name: "ReactJS" },
      { name: "Flutter" },
      { name: "SCSS" },
      { name: "Docker" },
      { name: "NodeJS" },
      { name: "Firebase" },
      { name: "Differents API" },
    ],
    image: "/assets/area.png",
    link: "",
    github: "https://github.com/Austin-William/Area"
  },
  {
    number: "04",
    category: "Frontend",
    title: "Area",
    description: "A web app to manage your different account in one app thanks to the API of the different services (Discord, Twitter, ...). This app is built with React JS, NodeJS/ExpressJS and Firebase. This app will not be updated anymore. (School project)",
    stack: [
      { name: "ReactJS" },
      { name: "Bootstrap 5" },
      { name: "Differents API" },
    ],
    image: "/assets/dashboard.png",
    link: "",
    github: "https://github.com/Austin-William/Dashboard-API"
  },
  {
    number: "05",
    category: "Frontend",
    title: "Telltale Game",
    description: "A story game made in Javascript which the end will depend on the user's choices (School project)",
    stack: [
      { name: "ReactJS" },
      { name: "SCSS" },
    ],
    image: "/assets/game_jam.png",
    link: "https://austin-william.github.io/JAM-Epitech-2022/",
    github: "https://github.com/Austin-William/JAM-Epitech-2022"
  },
  {
    number: "06",
    category: "Frontend",
    title: "Check The Time",
    description: "A website to check the time in different cities. This app is built with ReactJS. (Personal project)",
    stack: [
      { name: "ReactJS" },
      { name: "Bootstrap 5" },
      { name: "Differents API" },
    ],
    image: "/assets/check_the_time.png",
    link: "https://austin-william.github.io/CheckTheTime/",
    github: "https://github.com/Austin-William/CheckTheTime"
  },
];

const contact = [
  {
    icon: <FaPhoneAlt />,
    title: "Téléphone",
    description: "06 51 95 24 78",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "austinw@live.fr",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Localisation",
    description: "Paris, France",
  },
];

export { contact, links, socials, stats, services, about, experience, education, skills, projects };