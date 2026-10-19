"use client";

import { Icon } from "@once-ui-system/core";
import { useState } from "react";
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
  const [activeCommunity, setActiveCommunity] = useState(0);
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
                src="/images/profile/avatar.png"
                alt="SantiagoDev"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="pricing-title">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle} id="pricing-title">Servicios y precios</h2>
          <span className={styles.sectionMeta}>Proyectos a tu medida</span>
        </div>
        <div className={styles.pricingTableWrap}>
          <table className={styles.pricingTable} aria-labelledby="pricing-title" aria-describedby="pricing-note">
            <thead>
              <tr><th scope="col">Servicio</th><th scope="col">Precio inicial</th><th scope="col">Detalles</th></tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Bots de Discord</th>
                <td>Desde $10</td>
                <td>Configura y administra tu bot desde <a href="https://panelvyx.vercel.app/#comunidad" target="_blank" rel="noreferrer">MultiPanel ↗</a></td>
              </tr>
              <tr><th scope="row">Páginas web</th><td>Desde $20</td><td>Precio ajustable según tu proyecto.</td></tr>
              <tr><th scope="row">Mods de Minecraft</th><td>Desde $15</td><td>Precio ajustable según las funciones que necesites.</td></tr>
            </tbody>
          </table>
        </div>
        <p className={styles.pricingNote} id="pricing-note">Estos precios pueden subir o bajar dependiendo de lo que requieras. Siempre intentaré ajustarme al presupuesto de mis clientes.</p>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Comunidades donde trabajo</h2>
          <span className={styles.sectionMeta}>Colaboraciones y comunidades</span>
        </div>
        <div className={styles.communityGrid}>
          {communities.map((community, index) => (
            <article className={`${styles.communityCard} ${activeCommunity === index ? styles.communityActive : ""}`} key={community.title}>
              <button
                className={styles.communityToggle}
                type="button"
                aria-expanded={activeCommunity === index}
                aria-controls={`community-details-${index}`}
                aria-label={`Ver información de ${community.title}`}
                onClick={() => setActiveCommunity(index)}
              >
                <img className={styles.communityImage} src={community.image} alt={community.title} />
                <span className={styles.communityHint}>{activeCommunity === index ? "Seleccionado" : "Ver comunidad"} <span aria-hidden="true">↗</span></span>
              </button>
              <div className={styles.communityContent} id={`community-details-${index}`} hidden={activeCommunity !== index}>
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
