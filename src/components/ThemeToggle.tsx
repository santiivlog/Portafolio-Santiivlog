"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@once-ui-system/core";
import styles from "./ThemeToggle.module.scss";

const STARS = [
  { top: "20%", left: "12%", d: 0 },
  { top: "65%", left: "20%", d: 0.3 },
  { top: "30%", left: "35%", d: 0.6 },
  { top: "75%", left: "48%", d: 0.1 },
  { top: "15%", left: "62%", d: 0.9 },
  { top: "55%", left: "75%", d: 0.4 },
  { top: "80%", left: "85%", d: 0.7 },
  { top: "40%", left: "92%", d: 0.2 },
];

export const ThemeToggle: React.FC = () => {
  const { setTheme } = useTheme();
  const [mode, setMode] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = (localStorage.getItem("portfolio-mode") || "dark") as "dark" | "light";
    setMode(stored);
    setTheme(stored);
  }, [setTheme]);

  const toggle = () => {
    const next = mode === "dark" ? "light" : "dark";
    setMode(next);
    localStorage.setItem("portfolio-mode", next);
    setTheme(next);
  };

  if (!mounted) return null;

  const isDark = mode === "dark";

  return (
    <button
      className={`${styles.toggle} ${isDark ? styles.dark : styles.light}`}
      onClick={toggle}
      type="button"
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    >
      {/* Estrellas */}
      <span className={styles.starfield} aria-hidden="true">
        {STARS.map((s) => (
          <span
            key={`${s.top}-${s.left}`}
            className={styles.star}
            style={{
              top: s.top,
              left: s.left,
              animationDelay: `${s.d}s`,
            }}
          />
        ))}
      </span>

      {/* Ventana de íconos — overflow hidden */}
      <span className={styles.iconWindow} aria-hidden="true">
        {/* Track: [sol][luna] apilados — translateY anima cuál es visible */}
        <span className={`${styles.iconTrack} ${isDark ? styles.trackDark : styles.trackLight}`}>
          <span className={styles.sunIcon}>☀</span>
          <span className={styles.moonIcon}>☽</span>
        </span>
      </span>

      <span className={styles.label}>
        {isDark ? "Oscuro" : "Claro"}
      </span>
    </button>
  );
};
