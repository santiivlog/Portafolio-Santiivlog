"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@once-ui-system/core";
import styles from "./HomeExperience.module.scss";

type ProjectLink = {
  name: string;
  icon: string;
  href: string;
};

type FeaturedProject = {
  title: string;
  category: string;
  text: string;
  tools: string[];
  videos: Array<{
    label: string;
    src: string;
  }>;
  links: ProjectLink[];
};

const featuredProjects: FeaturedProject[] = [
  {
    title: "SV Video",
    category: "Destacado",
    text: "Es un mod que reproduce videos en calidad 4K en Minecraft. Tiene un bloque donde puedes poner videos, tambien permite reproducir gifs en pantalla con distintas posiciones y musica en formatos como mp3, ogg y mas.",
    tools: ["Forge 1.20.1", "Fabric 1.21.1", "4K", "Video"],
    videos: [
      {
        label: "1.21.1 Fabric",
        src: "https://cdn.discordapp.com/attachments/1483699411732402239/1499621663803834458/20260501-0357-21.1212392.mp4?ex=69fb65c2&is=69fa1442&hm=cbffcba1c71497b8fb4bb15e21b23ed48239ae19d61460177fb6f9f5311ac10b&",
      },
      {
        label: "1.20.1 Forge",
        src: "https://cdn.discordapp.com/attachments/1483699411732402239/1500292188502888498/20260503-0022-58.4080406.mp4?ex=69fb333b&is=69f9e1bb&hm=8f0911f86bc308d3139c6be5c7caf183c0d88ba958b8e7937142d1b18cb32f6e&",
      },
    ],
    links: [
      {
        name: "CurseForge",
        icon: "curseforge",
        href: "https://share.google/Ycphm1mODsOIbWH1E",
      },
    ],
  },
  {
    title: "Conditions Mod",
    category: "Destacado",
    text: "Este mod recrea el famoso plugin Conditional Events. Por archivos JSON puedes crear eventos personalizados en Minecraft. Ejemplo: creas un player_join y configuras que cuando el jugador se una se ejecute un comando, como un title de bienvenida. El mod guarda esa condicion y cuando un jugador entra a la partida o al servidor le muestra el title.",
    tools: ["JSON", "Eventos", "Minecraft", "Comandos"],
    videos: [
      {
        label: "Conditions Mod",
        src: "https://cdn.discordapp.com/attachments/1483699411732402239/1495392612780343468/Video_Project_8.mp4?ex=69fb2c65&is=69f9dae5&hm=b33e573ff7debaffb4e1e99c53fb1315c6e0af085b96c5be4b2a428ba954ed12&",
      },
    ],
    links: [
      {
        name: "CurseForge",
        icon: "curseforge",
        href: "https://www.curseforge.com/minecraft/mc-mods/conditions",
      },
      {
        name: "Modrinth",
        icon: "modrinth",
        href: "https://modrinth.com/mod/conditionmod",
      },
      {
        name: "Wiki",
        icon: "document",
        href: "https://coditionmodwiki.netlify.app/",
      },
    ],
  },
];

const communities = [
  {
    title: "Owleaf Studio",
    text: "Owleaf se dedica a la creacion de eventos en MC & mods.",
    image: "/images/communities/owleaf-studio.png",
    links: [
      {
        name: "Twitter",
        icon: "twitter",
        href: "https://x.com/OwleafStudio",
      },
      {
        name: "Discord",
        icon: "discord",
        href: "https://discord.gg/WXUGxJhWJx",
      },
    ],
  },
];

function FeaturedCard({
  project,
  onOpen,
}: {
  project: FeaturedProject;
  onOpen: (project: FeaturedProject) => void;
}) {
  return (
    <button className={styles.card} type="button" onClick={() => onOpen(project)}>
      <div className={styles.cardTop}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <span className={styles.tag}>{project.category}</span>
      </div>
      <p className={styles.cardText}>{project.text}</p>
      <div className={styles.cardFooter}>
        {project.tools.map((tool) => (
          <span className={styles.miniTag} key={tool}>
            {tool}
          </span>
        ))}
      </div>
    </button>
  );
}

function AnimatedLink({
  name,
  icon,
  href,
}: {
  name: string;
  icon: string;
  href: string;
}) {
  return (
    <a className={styles.socialLink} href={href} target="_blank" rel="noreferrer" aria-label={name}>
      <span className={styles.socialIcon}>
        <Icon name={icon} size="s" />
      </span>
      <span className={styles.socialText}>{name}</span>
    </a>
  );
}

export function HomeExperience() {
  const [progress, setProgress] = useState(0);
  const [selectedProject, setSelectedProject] = useState<FeaturedProject | null>(null);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      setProgress(Math.min(window.scrollY / 360, 1));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const openProject = (project: FeaturedProject) => {
    setSelectedVideoIndex(0);
    setSelectedProject(project);
  };

  const welcomeScale = 1.08 - progress * 0.2;
  const welcomeOpacity = 1 - progress * 0.42;
  const contentOpacity = Math.min(progress * 1.35, 1);
  const contentTranslate = 34 - progress * 34;

  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span
            className={styles.welcome}
            style={{
              transform: `translateZ(${90 - progress * 90}px) scale(${welcomeScale})`,
              opacity: welcomeOpacity,
            }}
          >
            Bienvenido
          </span>

          <div
            className={styles.heroContent}
            style={{
              opacity: contentOpacity,
              transform: `translateY(${contentTranslate}px)`,
            }}
          >
            <span className={styles.eyebrow}>Santiago | Sobre mi</span>
            <h1 className={styles.headline}>Hagamos lo que necesites a tu medida</h1>
            <p className={styles.subline}>
              Soy desarrollador de mods de Minecraft, bots de Discord y paginas web.
            </p>
            <Link className={styles.aboutButton} href="/about">
              <img className={styles.avatar} src="/images/profile/profile.jpg" alt="Santiago" />
              Sobre mi - Santiago
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Proyectos destacados</h2>
          <span className={styles.sectionMeta}>Mis proyectos favoritos</span>
        </div>
        <div className={`${styles.carousel} ${styles.featuredCarousel}`}>
          {featuredProjects.map((project) => (
            <FeaturedCard key={project.title} project={project} onOpen={openProject} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Comunidades donde trabajo</h2>
          <span className={styles.sectionMeta}>Colaboraciones y comunidades</span>
        </div>
        <div className={styles.communityGrid}>
          {communities.map((community) => (
            <article className={styles.communityCard} key={community.title}>
              <img className={styles.communityImage} src={community.image} alt={community.title} />
              <div className={styles.communityContent}>
                <h3 className={styles.cardTitle}>{community.title}</h3>
                <p className={styles.cardText}>{community.text}</p>
                <div className={styles.communityLinks}>
                  {community.links.map((link) => (
                    <AnimatedLink key={link.name} {...link} />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {selectedProject && (
        <div className={styles.modalBackdrop} onClick={() => setSelectedProject(null)}>
          <div className={styles.modal} onClick={(event) => event.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div>
                <span className={styles.tag}>{selectedProject.category}</span>
                <h2 className={styles.modalTitle}>{selectedProject.title}</h2>
              </div>
              <button
                className={styles.closeButton}
                type="button"
                onClick={() => setSelectedProject(null)}
              >
                Cerrar
              </button>
            </div>

            {selectedProject.videos.length > 1 && (
              <div className={styles.versionSelector}>
                {selectedProject.videos.map((video, index) => (
                  <button
                    className={`${styles.versionButton} ${
                      selectedVideoIndex === index ? styles.versionButtonActive : ""
                    }`}
                    key={video.src}
                    type="button"
                    onClick={() => setSelectedVideoIndex(index)}
                  >
                    {video.label}
                  </button>
                ))}
              </div>
            )}

            <video
              className={styles.video}
              src={selectedProject.videos[selectedVideoIndex].src}
              controls
              playsInline
              preload="metadata"
            />
            <p className={styles.cardText}>{selectedProject.text}</p>
            <div className={styles.modalLinks}>
              {selectedProject.links.map((link) => (
                <AnimatedLink key={link.href} {...link} />
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
