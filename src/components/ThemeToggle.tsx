"use client";

import React, { useEffect, useState } from "react";
import { Icon, useTheme } from "@once-ui-system/core";
import { useMusic } from "./MusicProvider";
import styles from "./ThemeToggle.module.scss";

type PortfolioMode = "dark" | "light" | "world";
type Language = "es" | "en";

const modeLabels: Record<Language, Record<PortfolioMode, string>> = {
  es: {
    dark: "Negro",
    light: "Blanco",
    world: "Mundial",
  },
  en: {
    dark: "Dark",
    light: "Light",
    world: "World",
  },
};

const languageLabels: Record<Language, string> = {
  es: "Español",
  en: "English",
};

const musicLabels: Record<
  Language,
  { play: string; pause: string; mute: string; unmute: string }
> = {
  es: {
    play: "Reproducir musica",
    pause: "Pausar musica",
    mute: "Silenciar",
    unmute: "Activar sonido",
  },
  en: {
    play: "Play music",
    pause: "Pause music",
    mute: "Mute",
    unmute: "Unmute",
  },
};

function applyPortfolioMode(mode: PortfolioMode) {
  const root = document.documentElement;

  root.setAttribute("data-portfolio-mode", mode);
  root.setAttribute("data-portfolio-theme", mode === "world" ? "world" : "classic");
  localStorage.setItem("portfolio-mode", mode);
  window.dispatchEvent(new CustomEvent("portfolio-mode-change", { detail: mode }));
}

function applyLanguage(language: Language) {
  document.documentElement.setAttribute("data-language", language);
  localStorage.setItem("portfolio-language", language);
  window.dispatchEvent(new CustomEvent("portfolio-language-change", { detail: language }));
}

export const ThemeToggle: React.FC = () => {
  const { setTheme } = useTheme();
  const {
    isPlaying: isMusicPlaying,
    isMuted,
    toggle: toggleMusic,
    toggleMute,
  } = useMusic();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<PortfolioMode>("world");
  const [language, setLanguage] = useState<Language>("es");

  useEffect(() => {
    setMounted(true);
    const storedMode = (localStorage.getItem("portfolio-mode") || "world") as PortfolioMode;
    const storedLanguage = (localStorage.getItem("portfolio-language") || "es") as Language;

    setMode(storedMode);
    setLanguage(storedLanguage);
    applyPortfolioMode(storedMode);
    applyLanguage(storedLanguage);
  }, []);

  const selectMode = (nextMode: PortfolioMode) => {
    setMode(nextMode);
    applyPortfolioMode(nextMode);

    if (nextMode === "dark") {
      setTheme("dark");
    }

    if (nextMode === "light" || nextMode === "world") {
      setTheme("light");
    }
  };

  const selectLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    applyLanguage(nextLanguage);
  };

  const currentModeLabel = modeLabels[language][mode];

  return (
    <div className={`${styles.switcher} ${mounted && open ? styles.switcherOpen : ""}`}>
      <button
        className={styles.islandTrigger}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={language === "es" ? "Abrir selector" : "Open selector"}
        aria-expanded={mounted && open}
      >
        <span className={styles.triggerIcon}>
          <Icon name="globe" size="s" />
        </span>
        <span className={styles.triggerLabel}>{currentModeLabel}</span>
        <span className={styles.languagePill}>{language.toUpperCase()}</span>
      </button>

      <div className={styles.panel} data-open={mounted && open}>
        <div className={styles.panelInner}>
          <div className={styles.optionGroup}>
            {(["dark", "light", "world"] as PortfolioMode[]).map((item) => (
              <button
                className={`${styles.option} ${mode === item ? styles.optionActive : ""}`}
                key={item}
                type="button"
                onClick={() => selectMode(item)}
              >
                {modeLabels[language][item]}
              </button>
            ))}
          </div>
          <span className={styles.panelDivider} />
          <div className={styles.optionGroup}>
            {(["es", "en"] as Language[]).map((item) => (
              <button
                className={`${styles.option} ${language === item ? styles.optionActive : ""}`}
                key={item}
                type="button"
                onClick={() => selectLanguage(item)}
              >
                {languageLabels[item]}
              </button>
            ))}
          </div>
          <span className={styles.panelDivider} />
          <div className={styles.musicGroup}>
            <button
              className={styles.musicButton}
              type="button"
              onClick={toggleMusic}
              aria-label={isMusicPlaying ? musicLabels[language].pause : musicLabels[language].play}
            >
              <Icon name={isMusicPlaying ? "pause" : "play"} size="s" />
              <span className={styles.musicButtonLabel}>
                {isMusicPlaying ? musicLabels[language].pause : musicLabels[language].play}
              </span>
            </button>
            <button
              className={styles.musicIconButton}
              type="button"
              onClick={toggleMute}
              data-muted={isMuted ? "true" : "false"}
              aria-label={isMuted ? musicLabels[language].unmute : musicLabels[language].mute}
            >
              <Icon name={isMuted ? "speakerOff" : "speaker"} size="s" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
