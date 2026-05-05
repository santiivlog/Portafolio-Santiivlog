"use client";

import { useEffect, useState } from "react";
import { Icon } from "@once-ui-system/core";
import styles from "./WorkCategories.module.scss";

type WorkItem = {
  title: string;
  category: string;
  text: string;
  tools: string[];
  video?: string;
  status: "Mod privado" | "Mod publico";
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
    title: "Mods Fabric 1.21.1",
    meta: "Mods ligeros para versiones nuevas",
    items: [
      {
        title: "Blindaje 1.21",
        category: "Fabric",
        text: "Mod privado que recrea la mecanica de Warzone Call of Duty. Agrega blindaje que da vida extra al jugador.",
        tools: ["Java", "Fabric API", "1.21.1", "Privado"],
        video: "/videos/mods/blindaje-1.21.mp4",
        status: "Mod privado",
      },
      {
        title: "Subtitle 1.21.1",
        category: "Fabric",
        text: "Porteo a 1.21.1 Fabric. Lleva la inmersion de tu servidor, mapa de aventuras o serie de Roleplay al siguiente nivel. Luxfiro Subtitles es un mod de interfaz que permite mostrar subtitulos, dialogos y anuncios en pantalla con personalizacion masiva: textos cinematograficos, estilos tipo Undertale, anuncios gigantes de Roleplay, animaciones, colores, tamanos personalizados y soporte Text-To-Speech integrado.",
        tools: ["Fabric", "1.21.1", "GUI", "Publico"],
        video: "/videos/mods/subtitle-1.21.mp4",
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
        video: "/videos/mods/revive-1.21.mp4",
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
    ],
  },
  {
    title: "Mods Forge 1.20.1",
    meta: "Comisiones y mods compatibles con Forge",
    items: [
      {
        title: "Dectetor 1.20.1",
        category: "Forge",
        text: "Mod que te avisa si un jugador esta en otra pantalla. Util para muchas cosas.",
        tools: ["Forge", "1.20.1", "Comision", "Privado"],
        video: "/videos/mods/dectetor-1.20.1.mp4",
        status: "Mod privado",
      },
      {
        title: "Minigames",
        category: "Forge",
        text: "Este mod es uno de mis favoritos y algun dia lo continuare si tengo tiempo. Recrea el famoso juego de la Serpiente en Minecraft.",
        tools: ["Forge", "1.20.1", "Minigame", "Privado"],
        video: "/videos/mods/minigames-1.20.1.mp4",
        status: "Mod privado",
      },
    ],
  },
];

function WorkCard({ item, onOpen }: { item: WorkItem; onOpen: (item: WorkItem) => void }) {
  return (
    <button className={styles.card} type="button" onClick={() => onOpen(item)}>
      <div className={styles.cardTop}>
        <h3 className={styles.cardTitle}>{item.title}</h3>
        <span className={styles.tag}>{item.status}</span>
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
        <div className={styles.modalBackdrop} onClick={() => setSelectedItem(null)}>
          <div className={styles.modal} onClick={(event) => event.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div>
                <span className={styles.tag}>{selectedItem.category}</span>
                <h2 className={styles.modalTitle}>{selectedItem.title}</h2>
              </div>
              <button className={styles.closeButton} type="button" onClick={() => setSelectedItem(null)}>
                Cerrar
              </button>
            </div>
            {selectedItem.video && (
              <video
                className={styles.video}
                src={selectedItem.video}
                controls
                playsInline
                preload="metadata"
              />
            )}
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
