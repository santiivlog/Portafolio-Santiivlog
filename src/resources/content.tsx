import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";

const person: Person = {
  firstName: "Santiago",
  lastName: "",
  name: "Santiago",
  role: "Desarrollador",
  avatar: "/images/profile/logo.gif",
  email: "santiagomendozacordero@gmail.com",
  location: "America/Buenos_Aires",
  languages: ["Español"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Suscríbete al newsletter de {person.firstName}</>,
  description: <>Mi newsletter sobre desarrollo, mods y tecnología</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/santiivlog",
    essential: true,
  },
  {
    name: "Modrinth",
    icon: "modrinth",
    link: "https://modrinth.com/user/SantiivlogDev",
    essential: true,
  },
  {
    name: "Discord",
    icon: "discord",
    link: "https://discord.gg/sZtsUsacUJ",
    essential: true,
  },
  {
    name: "Twitter",
    icon: "twitter",
    link: "https://x.com/Santiivlog_",
    essential: true,
  },
  {
    name: "Gmail",
    icon: "gmail",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/api/og/generate",
  label: "Inicio",
  title: "Portafolio-Santiivlog",
  description: `Portafolio de ${person.name}, ${person.role}`,
  headline: <>Creando mods, bots y experiencias web</>,
  featured: {
    display: false,
    title: <>Proyecto destacado</>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      Soy Santiago, desarrollador de mods de Minecraft, bots de Discord y páginas web.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "Sobre mí",
  title: `Sobre mí - ${person.name}`,
  description: `Conoce a ${person.name}, ${person.role}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Información",
    description: (
      <>
        Soy un chico de 17 años que le encanta los códigos, es mi mayor pasión. Durante el tiempo
        que llevo programando aprendí muchas cosas con varios devs y les agradezco mucho por
        ayudarme a mejorar. Cada día mejoro un poco.
      </>
    ),
  },
  work: {
    display: false,
    title: "Experiencia",
    experiences: [
      {
        company: "Comunidades y comisiones",
        timeframe: "2025 - Presente",
        role: "Desarrollador de Forge, Fabric, webs y DiscordBots",
        achievements: [
          "Trabajo en mods para Forge y Fabric, webs, bots de Discord y herramientas privadas para eventos.",
          "Tengo 8+ meses de experiencia, 17 años y colaboraciones con 4+ studios o comunidades.",
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false,
    title: "Lenguajes",
    institutions: [],
  },
  technical: {
    display: true,
    title: "Habilidades",
    skills: [
      {
        title: "Desarrollo Minecraft",
        description: <>Plataformas y APIs de modding para Minecraft.</>,
        tags: [
          { name: "Fabric", icon: "" },
          { name: "Forge", icon: "" },
        ],
        images: [],
      },
      {
        title: "Lenguajes",
        description: <>Lenguajes de programación que manejo.</>,
        tags: [
          { name: "Java", icon: "" },
          { name: "Python", icon: "" },
          { name: "Lua", icon: "" },
          { name: "GodotScript", icon: "" },
        ],
        images: [],
      },
      {
        title: "Desarrollo Web",
        description: <>Frameworks y herramientas para web.</>,
        tags: [
          { name: "Next.js", icon: "" },
          { name: "Node.js", icon: "" },
          { name: "CSS", icon: "" },
          { name: "Tailwind", icon: "" },
          { name: "HTML", icon: "" },
        ],
        images: [],
      },
      {
        title: "Herramientas",
        description: <>Herramientas que uso para desarrollar y organizar código.</>,
        tags: [
          { name: "GitHub", icon: "" },
          { name: "IntelliJ IDEA", icon: "" },
          { name: "Visual Studio Code", icon: "" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Escribiendo sobre desarrollo...",
  description: `Lee las novedades de ${person.name}`,
};

const work: Work = {
  path: "/work",
  label: "Proyectos",
  title: `Proyectos - ${person.name}`,
  description: "Muestra de mi trabajo: algunos proyectos que hice personalmente y comisiones y trabajos para studios o clientes.",
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galería",
  title: `Galería - ${person.name}`,
  description: `Una colección de imágenes de ${person.name}`,
  images: [
    { src: "/images/gallery/horizontal-1.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-4.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/horizontal-3.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-1.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/vertical-2.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/horizontal-2.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/horizontal-4.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-3.jpg", alt: "image", orientation: "vertical" },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
