"use client";

import { usePathname } from "next/navigation";
import styles from "./PageTransition.module.scss";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className={styles.transition}>
      {children}
    </div>
  );
}
