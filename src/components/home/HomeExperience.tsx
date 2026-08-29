"use client";

import { useEffect, useState } from "react";
import { Icon } from "@once-ui-system/core";
import { useMusic } from "../MusicProvider";
import styles from "./HomeExperience.module.scss";

type PortfolioMode = "dark" | "light" | "world";
type Language = "es" | "en";

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
  {
    title: "Cherry Events",
    text: "Cherry se dedica a la creacion de eventos",
    image: "/images/communities/cherryFull.png",
    links: [
      {
        name: "Twitter",
        icon: "twitter",
        href: "https://x.com/CherryEventsMC",
      },
    ],
  },
  {
    title: "SV Studio",
    text: "SV Studio Director y Fundador del studio se dedica ala creacion de eventos en minecraft",
    image: "/images/communities/sv-studio.png",
    links: [
      {
        name: "Twitter",
        icon: "twitter",
        href: "https://x.com/SV_Studio_MC",
      },
      {
        name: "Discord",
        icon: "discord",
        href: "https://discord.gg/KdHGK7XrE",
      },
    ],
  },
];

const copy = {
  es: {
    worldEyebrow: "Santiago | Portfolio",
    worldHeadline: "Santiago",
    worldSubline:
      "Desarrollador de mods de Minecraft, webs y bots de Discord con energia celeste y blanca.",
    profileButton: "Ver perfil",
    projectsButton: "Proyectos",
    musicKicker: "Cancion destacada",
    musicTitle: "La Cuarta Estrella",
    musicArtist: "PALMITO",
    playMusic: "Reproducir musica",
    pauseMusic: "Pausar La Cuarta Estrella",
    muteMusic: "Silenciar musica",
    unmuteMusic: "Activar sonido",
    playing: "Reproduciendo",
    profileEyebrow: "Sobre mi",
    profileText: "Desarrollador especializado en Forge, Fabric, Webs y DiscordBots.",
    experienceValue: "8+ meses",
    experienceLabel: "Experiencia",
    ageValue: "17 años",
    ageLabel: "Edad",
    studiosValue: "4+",
    studiosLabel: "Studios",
    classicWelcome: "Bienvenido",
    classicEyebrow: "Santiago | Sobre mi",
    classicHeadline: "Hagamos lo que necesites a tu medida",
    classicSubline: "Soy desarrollador de mods de Minecraft, bots de Discord y paginas web.",
    aboutButton: "Sobre mi - Santiago",
    communitiesTitle: "Comunidades donde trabajo",
    communitiesMeta: "Colaboraciones y comunidades",
  },
  en: {
    worldEyebrow: "Santiago | Portfolio",
    worldHeadline: "Santiago",
    worldSubline: "Minecraft mods, websites and Discord bots with a blue-and-white style.",
    profileButton: "View Profile",
    projectsButton: "Projects",
    musicKicker: "Featured song",
    musicTitle: "La Cuarta Estrella",
    musicArtist: "PALMITO",
    playMusic: "Play music",
    pauseMusic: "Pause La Cuarta Estrella",
    muteMusic: "Mute music",
    unmuteMusic: "Unmute music",
    playing: "Playing",
    profileEyebrow: "About me",
    profileText: "Developer specialized in Forge, Fabric, websites and Discord bots.",
    experienceValue: "8+ months",
    experienceLabel: "Experience",
    ageValue: "17 years",
    ageLabel: "Age",
    studiosValue: "4+",
    studiosLabel: "Studios",
    classicWelcome: "Welcome",
    classicEyebrow: "Santiago | About me",
    classicHeadline: "Let's build exactly what you need",
    classicSubline: "I build Minecraft mods, Discord bots and websites.",
    aboutButton: "About me - Santiago",
    communitiesTitle: "Communities I work with",
    communitiesMeta: "Collaborations and communities",
  },
};

function getPortfolioMode(): PortfolioMode {
  if (typeof window === "undefined") {
    return "world";
  }

  return (localStorage.getItem("portfolio-mode") || "world") as PortfolioMode;
}

function getLanguage(): Language {
  if (typeof window === "undefined") {
    return "es";
  }

  return (localStorage.getItem("portfolio-language") || "es") as Language;
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
  const [portfolioMode, setPortfolioMode] = useState<PortfolioMode>("world");
  const [language, setLanguage] = useState<Language>("es");
  const [scrollProgress, setScrollProgress] = useState(0);
  const {
    isPlaying: isMusicPlaying,
    isMuted,
    currentTime,
    duration,
    toggle: toggleMusic,
    toggleMute,
    seek,
  } = useMusic();

  useEffect(() => {
    setPortfolioMode(getPortfolioMode());
    setLanguage(getLanguage());

    const updateScroll = () => {
      const viewportHeight = Math.max(window.innerHeight, 1);
      const nextScrollProgress = Math.min(window.scrollY / (viewportHeight * 0.82), 1);

      setScrollProgress(nextScrollProgress);
    };

    const updateMode = (event: Event) => {
      const detail = (event as CustomEvent<PortfolioMode>).detail;
      setPortfolioMode(detail || getPortfolioMode());
    };

    const updateLanguage = (event: Event) => {
      const detail = (event as CustomEvent<Language>).detail;
      setLanguage(detail || getLanguage());
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("portfolio-mode-change", updateMode);
    window.addEventListener("portfolio-language-change", updateLanguage);

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("portfolio-mode-change", updateMode);
      window.removeEventListener("portfolio-language-change", updateLanguage);
    };
  }, []);

  const seekMusic = (value: string) => {
    seek(Number(value));
  };

  const progressValue = duration ? (currentTime / duration) * 100 : 0;
  const isWorld = portfolioMode === "world";
  const text = copy[language];
  const worldScale = 1 - scrollProgress * 0.03;
  const worldTranslate = -scrollProgress * 10;
  const worldOpacity = 1 - scrollProgress * 0.08;
  const heroFrameScale = 1 - scrollProgress * 0.14;
  const heroFrameTranslate = scrollProgress * 68;
  const heroFrameRadius = scrollProgress * 28;
  const heroVideoScale = 1.04 - scrollProgress * 0.04;
  const welcomeScale = 1.08 - scrollProgress * 0.2;
  const welcomeOpacity = 1 - scrollProgress * 0.42;
  const contentOpacity = Math.min(scrollProgress * 1.35, 1);
  const contentTranslate = 34 - scrollProgress * 34;

  return (
    <main className={`${styles.home} ${isWorld ? styles.worldHome : styles.classicHome}`}>
      {isWorld ? (
        <>
          <section className={styles.worldIntro} aria-label="Portafolio Argentina">
            <div
              className={styles.hero}
              style={{
                "--hero-radius": `${heroFrameRadius}px`,
                "--hero-scale": heroFrameScale,
                "--hero-y": `${heroFrameTranslate}px`,
              } as React.CSSProperties}
            >
              <video
                className={styles.heroVideo}
                style={{ transform: `scale(${heroVideoScale})` }}
                src="/videos/Intro/argentina.webm"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <track kind="captions" />
              </video>
              <div className={styles.heroOverlay} />

              <div
                className={styles.heroShell}
                style={{
                  opacity: worldOpacity,
                  transform: `translateY(${worldTranslate}px) scale(${worldScale})`,
                }}
              >
                <div className={styles.heroCopy}>
                  <span className={styles.eyebrow}>
                    <span className={styles.eyebrowDot} />
                    {text.worldEyebrow}
                  </span>
                  <h1 className={styles.headline}>{text.worldHeadline}</h1>
                  <p className={styles.subline}>{text.worldSubline}</p>
                  <div className={styles.heroActions}>
                    <a className={styles.primaryButton} href="#perfil">
                      {text.profileButton}
                    </a>
                    <a className={styles.secondaryButton} href="/work">
                      {text.projectsButton}
                    </a>
                  </div>
                </div>

                <div className={styles.musicPlayer} aria-label="Reproductor La Cuarta Estrella">
                  <img
                    className={styles.musicCover}
                    src="/videos/Intro/miniatura%20de%20la%20musica.jpg"
                    alt="Miniatura de La Cuarta Estrella"
                  />
                  <div className={styles.musicBody}>
                    <div className={styles.musicHeader}>
                      <span className={styles.musicKicker}>{text.musicKicker}</span>
                      <button
                        className={styles.muteButton}
                        type="button"
                        onClick={toggleMute}
                        aria-label={isMuted ? text.unmuteMusic : text.muteMusic}
                        data-muted={isMuted ? "true" : "false"}
                      >
                        <Icon name={isMuted ? "speakerOff" : "speaker"} size="s" />
                      </button>
                    </div>
                    <h2 className={styles.musicTitle}>{text.musicTitle}</h2>
                    <a
                      className={styles.musicArtist}
                      href="https://www.youtube.com/watch?v=0ZEQTlyieWs"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {text.musicArtist}
                    </a>
                    <input
                      className={styles.musicRange}
                      type="range"
                      min="0"
                      max="100"
                      value={progressValue}
                      onChange={(event) => seekMusic(event.target.value)}
                      aria-label="Progreso de La Cuarta Estrella"
                    />
                    <div className={styles.musicControls}>
                      <button
                        className={styles.playButton}
                        type="button"
                        onClick={toggleMusic}
                        aria-label={isMusicPlaying ? text.pauseMusic : text.playMusic}
                      >
                        <span
                          className={styles.playGlyph}
                          data-playing={isMusicPlaying ? "true" : "false"}
                          aria-hidden="true"
                        />
                      </button>
                      <span>{isMusicPlaying ? text.playing : text.playMusic}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.profileSection} id="perfil">
            <div className={styles.profileVisual}>
              <img src="/images/profile/profile.jpg" alt="Santiago" />
            </div>
            <div className={styles.profileContent}>
              <span className={styles.eyebrow}>
                <span className={styles.eyebrowDot} />
                {text.profileEyebrow}
              </span>
              <h2 className={styles.profileTitle}>{text.profileText}</h2>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <strong>{text.experienceValue}</strong>
                  <span>{text.experienceLabel}</span>
                </div>
                <div className={styles.stat}>
                  <strong>{text.ageValue}</strong>
                  <span>{text.ageLabel}</span>
                </div>
                <div className={styles.stat}>
                  <strong>{text.studiosValue}</strong>
                  <span>{text.studiosLabel}</span>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <section className={styles.classicHero}>
          <div className={styles.classicHeroInner}>
            <span
              className={styles.welcome}
              style={{
                transform: `translateZ(${90 - scrollProgress * 90}px) scale(${welcomeScale})`,
                opacity: welcomeOpacity,
              }}
            >
              {text.classicWelcome}
            </span>

            <div
              className={styles.classicHeroContent}
              style={{
                opacity: contentOpacity,
                transform: `translateY(${contentTranslate}px)`,
              }}
            >
              <span className={styles.classicEyebrow}>{text.classicEyebrow}</span>
              <h1 className={styles.classicHeadline}>{text.classicHeadline}</h1>
              <p className={styles.classicSubline}>{text.classicSubline}</p>
              <a className={styles.classicButton} href="/about">
                <img className={styles.avatar} src="/images/profile/profile.jpg" alt="Santiago" />
                {text.aboutButton}
              </a>
            </div>
          </div>
        </section>
      )}

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{text.communitiesTitle}</h2>
          <span className={styles.sectionMeta}>{text.communitiesMeta}</span>
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
