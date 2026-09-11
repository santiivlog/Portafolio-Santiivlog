"use client";

import { Icon } from "@once-ui-system/core";
import styles from "./HomeExperience.module.scss";

const communities = [
  {
    title: "Spreen Studios",
    text: "Spreen Studios es el estudio creativo de Spreen, dedicado a la creación de contenido, eventos y proyectos en Minecraft para la comunidad hispanohablante.",
    image: "/images/communities/spreen-studio.png",
    links: [
      { name: "Twitter", icon: "twitter", href: "https://x.com/SpreenStudios" },
      { name: "Discord", icon: "discord", href: "https://discord.gg/spreen" },
    ],
  },
  {
    title: "Cherry Events",
    text: "Cherry se dedica a la creacion de eventos",
    image: "/images/communities/cherryFull.png",
    links: [{ name: "Twitter", icon: "twitter", href: "https://x.com/CherryEventsMC" }],
  },
  {
    title: "SV Studio",
    text: "SV Studio Director y Fundador del studio se dedica ala creacion de eventos en minecraft",
    image: "/images/communities/sv-studio.png",
    links: [
      { name: "Twitter", icon: "twitter", href: "https://x.com/SV_Studio_MC" },
      { name: "Discord", icon: "discord", href: "https://discord.gg/KdHGK7XrE" },
    ],
  },
];

function AnimatedLink({ name, icon, href }: { name: string; icon: string; href: string }) {
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
  return (
    <main className={`${styles.home} ${styles.classicHome}`}>
      <section className={styles.classicHero}>
        <div className={styles.heroTwoCol}>
          <div className={styles.heroLeft}>
            <span className={styles.classicEyebrow}>SantiagoDev | Portfolio</span>
            <h1 className={styles.classicHeadline}>
              Hagamos lo que necesites a tu medida
            </h1>
            <p className={styles.classicSubline}>
              Soy desarrollador Especializado en{" "}
              <strong>Fabric</strong>,{" "}
              <strong>Bots discord</strong> y{" "}
              <strong>Godot engine</strong>
            </p>
            <div className={styles.heroBtnRow}>
              <a className={styles.heroBtnPrimary} href="/about">
                Sobre mí
              </a>
              <a className={styles.heroBtnSecondary} href="/work">
                Proyectos
              </a>
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.heroAvatarRing}>
              <img
                className={styles.heroAvatarImg}
                src="/images/profile/logo.gif"
                alt="SantiagoDev"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.spotifySection}>
        <iframe
          src="https://open.spotify.com/embed/playlist/7Am9E2wbUBfMM9qdqGHVUt?utm_source=generator&theme=0"
          width="100%"
          height="352"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Playlist de SantiagoDev"
          className={styles.spotifyIframe}
        />
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
    </main>
  );
}
