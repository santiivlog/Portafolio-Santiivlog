"use client";

import { useEffect, useState } from "react";
import { Icon } from "@once-ui-system/core";
import styles from "./WorkCategories.module.scss";

type WorkItem = {
  title: string;
  category: string;
  text: string;
  tools: string[];
  status: "Mod privado" | "Mod publico" | "Por agregar";
  links?: Array<{
    name: string;
    icon: string;
    href: string;
  }>;
};

const categories: Array<{
  title: string;
  meta: string;
  items: WorkItem[];
}> = [
  {
    title: "Mods Públicos",
    meta: "Disponibles en Modrinth y CurseForge",
    items: [
      {
        title: "SV Video",
        category: "Público",
        text: "Mod que reproduce videos en calidad 4K en Minecraft. Tiene un bloque donde puedes poner videos, permite reproducir gifs en pantalla con distintas posiciones y música en formatos como mp3, ogg y más. Disponible para Forge 1.20.1 y Fabric 1.21.1.",
        tools: ["Forge 1.20.1", "Fabric 1.21.1", "4K", "Video"],
        status: "Mod publico",
        links: [
          {
            name: "CurseForge",
            icon: "curseforge",
            href: "https://share.google/Ycphm1mODsOIbWH1E",
          },
          {
            name: "Modrinth",
            icon: "modrinth",
            href: "https://modrinth.com/mod/svvideo",
          },
        ],
      },
      {
        title: "Conditions Mod",
        category: "Público",
        text: "Recrea el famoso plugin Conditional Events. Por archivos JSON podés crear eventos personalizados en Minecraft. Ejemplo: creás un player_join y configurás que cuando el jugador se una se ejecute un comando, como un title de bienvenida. Disponible para Forge 1.20.1 y Fabric 1.21.1.",
        tools: ["Forge 1.20.1", "Fabric 1.21.1", "JSON", "Eventos"],
        status: "Mod publico",
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
      {
        title: "Minecraft Extremo 3 Mod",
        category: "Público",
        text: "Mod no oficial inspirado en la serie Minecraft Extremo 3 de AuronPlay y Eufonia Studio. Agrega vidas limitadas, niveles de peligro, eventos PvP, mecánicas de venganza, HUD personalizado, nametags personalizados, kill top, pantallas de eliminación, items bloqueados, Minecoins, máquinas de intercambio, economía de pozo, misiones, cambios de dificultad, zonas seguras de spawn y protección de Nexus. Todo el crédito va a AuronPlay y Eufonia Studio por el concepto y la serie original.",
        tools: ["Minecraft", "Eventos", "PvP", "Servidor"],
        status: "Mod publico",
        links: [
          {
            name: "CurseForge",
            icon: "curseforge",
            href: "https://www.curseforge.com/minecraft/mc-mods/minecraft-extremo-3-mod",
          },
          {
            name: "Modrinth",
            icon: "modrinth",
            href: "https://modrinth.com/mod/mc-extremo-3-mod",
          },
        ],
      },
    ],
  },
  {
    title: "Mods Fabric 1.21.1",
    meta: "Mods ligeros para versiones nuevas",
    items: [
      {
        title: "Blindaje 1.21",
        category: "Fabric",
        text: "Mod privado que recrea la mecanica de Warzone Call of Duty. Agrega blindaje que da vida extra al jugador.",
        tools: ["Java", "Fabric API", "1.21.1", "Privado"],
        status: "Mod privado",
      },
      {
        title: "Subtitle 1.21.1",
        category: "Fabric",
        text: "Porteo a 1.21.1 Fabric. Lleva la inmersion de tu servidor, mapa de aventuras o serie de Roleplay al siguiente nivel. Luxfiro Subtitles es un mod de interfaz que permite mostrar subtitulos, dialogos y anuncios en pantalla con personalizacion masiva: textos cinematograficos, estilos tipo Undertale, anuncios gigantes de Roleplay, animaciones, colores, tamanos personalizados y soporte Text-To-Speech integrado.",
        tools: ["Fabric", "1.21.1", "GUI", "Publico"],
        status: "Mod publico",
        links: [
          {
            name: "Modrinth",
            icon: "modrinth",
            href: "https://modrinth.com/mod/subtitle",
          },
        ],
      },
      {
        title: "Revive 1.21.1",
        category: "Fabric",
        text: "Mod privado que recrea el famoso Revive Player. Usa Animorph como dependencia para las animaciones.",
        tools: ["Java", "Fabric", "1.21.1", "Animorph", "Mod privado"],
        status: "Mod privado",
      },
      {
        title: "Key disable",
        category: "Fabric",
        text: "Mod para bloquear las teclas del jugador. Funciona en client y server: necesitas el mod en cliente y el plugin en el servidor.",
        tools: ["Keys", "Cliente", "Server", "Mod publico"],
        status: "Mod publico",
        links: [
          {
            name: "Mod cliente",
            icon: "modrinth",
            href: "https://modrinth.com/mod/locked-keys",
          },
          {
            name: "Plugin server",
            icon: "modrinth",
            href: "https://modrinth.com/plugin/locked-keys-plugin",
          },
        ],
      },
      {
        title: "Rainbowfloor",
        category: "Fabric",
        text: "Mod privado para eventos que agrega shaders y luces personalizadas. Incluye un controlador tipo Blender donde puedes mover, rotar y cambiar la escala de las luces.",
        tools: ["Fabric", "1.21.1", "Mod privado", "Herramienta para eventos", "Luces"],
        status: "Mod privado",
      },
      {
        title: "Periquito",
        category: "Fabric",
        text: "Mod privado que recrea el famoso Periquito de Squid Craft 4. Todavia no esta terminado por problemas que tuve de mudanza, pero lo terminare pronto.",
        tools: ["Fabric", "1.21.1", "Mod privado", "Squid Craft 4", "En desarrollo"],
        status: "Mod privado",
      },
      {
        title: "CreatorItem",
        category: "Fabric",
        text: "Herramienta para Hardcore, survival y mini series. Agrega un menu donde puedes ver items de Minecraft, items de mods y bloques. Tambien permite bloquear crafteos, obtencion de items, spawns naturales o drops de bloques, por ejemplo evitar que un bloque de diamante suelte su item aunque lo piques con un pico de diamante.",
        tools: ["Fabric", "1.21.1", "Herramienta", "Hardcore", "Survival"],
        status: "Mod privado",
      },
    ],
  },
  {
    title: "Mods Forge 1.20.1",
    meta: "Comisiones y mods compatibles con Forge",
    items: [
      {
        title: "Detector 1.20.1",
        category: "Forge",
        text: "Mod que te avisa si un jugador esta en otra pantalla. Util para muchas cosas.",
        tools: ["Forge", "1.20.1", "Comision", "Privado"],
        status: "Mod privado",
      },
      {
        title: "Minigames",
        category: "Forge",
        text: "Este mod es uno de mis favoritos y algun dia lo continuare si tengo tiempo. Recrea el famoso juego de la Serpiente en Minecraft.",
        tools: ["Forge", "1.20.1", "Minigame", "Privado"],
        status: "Mod privado",
      },
    ],
  },
];

function WorkCard({ item, onOpen }: { item: WorkItem; onOpen: (item: WorkItem) => void }) {
  return (
    <button
      className={`${styles.card} ${item.status === "Por agregar" ? styles.cardPending : ""}`}
      type="button"
      onClick={() => onOpen(item)}
    >
      <div className={styles.cardTop}>
        <h3 className={styles.cardTitle}>{item.title}</h3>
        <span className={`${styles.tag} ${item.status === "Por agregar" ? styles.tagPending : ""}`}>
          {item.status}
        </span>
      </div>
      <p className={styles.cardText}>{item.text}</p>
      <div className={styles.cardFooter}>
        {item.tools.map((tool) => (
          <span className={styles.miniTag} key={tool}>
            {tool}
          </span>
        ))}
      </div>
    </button>
  );
}

export function WorkCategories() {
  const [selectedItem, setSelectedItem] = useState<WorkItem | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedItem ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedItem]);

  return (
    <main className={styles.workPage}>
      <header className={styles.hero}>
        <h1 className={styles.title}>Mods y comisiones</h1>
        <p className={styles.subtitle}>
          Tengo varios mods y no pondre todos, pero puedes ver algunos ejemplos organizados por
          Fabric y Forge.
        </p>
      </header>

      {categories.map((category) => (
        <section className={styles.section} key={category.title}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{category.title}</h2>
            <span className={styles.sectionMeta}>{category.meta}</span>
          </div>
          <div className={styles.carousel}>
            {category.items.map((item) => (
              <WorkCard key={item.title} item={item} onOpen={setSelectedItem} />
            ))}
          </div>
        </section>
      ))}

      <p className={styles.updateNote}>
        Este apartado se estara actualizando. Tengo muchos proyectos y debo tomar el tiempo para ir
        grabando cada mod y subirlo a este apartado.
      </p>

      {selectedItem && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setSelectedItem(null)}
          onKeyDown={(e) => e.key === "Escape" && setSelectedItem(null)}
          role="presentation"
        >
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
            role="presentation"
          >
            <div className={styles.modalHeader}>
              <div>
                <span
                  className={`${styles.tag} ${
                    selectedItem.status === "Por agregar" ? styles.tagPending : ""
                  }`}
                >
                  {selectedItem.category}
                </span>
                <h2 className={styles.modalTitle}>{selectedItem.title}</h2>
              </div>
              <button className={styles.closeButton} type="button" onClick={() => setSelectedItem(null)}>
                Cerrar
              </button>
            </div>
            <p className={styles.cardText}>{selectedItem.text}</p>
            {selectedItem.links && (
              <div className={styles.modalLinks}>
                {selectedItem.links.map((link) => (
                  <a
                    className={styles.socialLink}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.name}
                    key={link.href}
                  >
                    <span className={styles.socialIcon}>
                      <Icon name={link.icon} size="s" />
                    </span>
                    <span className={styles.socialText}>{link.name}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
