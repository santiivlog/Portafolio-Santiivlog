import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Santiago",
  lastName: "",
  name: "Santiago",
  role: "Desarrollador",
  avatar: "/images/profile/profile.jpg",
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
  image: "/images/og/home.jpg",
  label: "Inicio",
  title: "Portafolio-Santiivlog",
  description: `Portafolio de ${person.name}, ${person.role}`,
  headline: <>Creando mods, bots y experiencias web</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Santiago</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Proyecto destacado
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      Soy Santiago, desarrollador de{" "}
      <Text as="span" size="xl" weight="strong">
        mods de Minecraft
      </Text>
      , bots de Discord y páginas web.
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
        Soy desarrollador de mods en Minecraft y bots de Discord. Tengo 6 meses de experiencia
        como desarrollador de mods, bots de Discord y páginas web.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experiencia",
    experiences: [
      {
        company: "Comunidades y comisiones",
        timeframe: "2025 - Presente",
        role: "Desarrollador de mods, bots y páginas web",
        achievements: [
          <>He trabajado en varias comunidades y también en comisiones.</>,
          <>Hice varios bots de Discord y mods para muchas personas.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Lenguajes",
    institutions: [
      {
        name: "Java",
        description: <>Intermedio avanzado</>,
      },
      {
        name: "HTML",
        description: <>Intermedio</>,
      },
      {
        name: "CSS",
        description: <>Intermedio</>,
      },
      {
        name: "Python",
        description: <>Intermedio</>,
      },
      {
        name: "Node.js",
        description: <>Intermedio avanzado</>,
      },
      {
        name: "Lua",
        description: <>Aprendiz</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Herramientas",
    skills: [
      {
        title: "Entorno de trabajo",
        description: <>Herramientas que uso para desarrollar, organizar código y trabajar proyectos.</>,
        tags: [
          {
            name: "GitHub",
            icon: "github",
          },
          {
            name: "IntelliJ",
            icon: "intellij",
          },
          {
            name: "Visual Studio Code",
            icon: "vscode",
          },
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
  label: "Mods - comisiones",
  title: `Mods y comisiones - ${person.name}`,
  description: `Mods de Minecraft y comisiones de desarrollo de ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galería",
  title: `Galería - ${person.name}`,
  description: `Una colección de imágenes de ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
