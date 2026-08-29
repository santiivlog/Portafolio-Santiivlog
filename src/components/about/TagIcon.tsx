"use client";

import { Row, Text } from "@once-ui-system/core";
import {
  SiOpenjdk,
  SiHtml5,
  SiCss3,
  SiPython,
  SiNodedotjs,
  SiLua,
  SiIntellijidea,
  SiVscodium,
  SiJavascript,
  SiNextdotjs,
  SiFigma,
  SiSupabase,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  java: SiOpenjdk,
  html: SiHtml5,
  css: SiCss3,
  python: SiPython,
  nodejs: SiNodedotjs,
  lua: SiLua,
  intellij: SiIntellijidea,
  vscode: SiVscodium,
  github: FaGithub,
  javascript: SiJavascript,
  nextjs: SiNextdotjs,
  figma: SiFigma,
  supabase: SiSupabase,
};

export function TagIcon({ name, icon, id }: { name: string; icon?: string; id?: string }) {
  const IconComponent = icon ? iconMap[icon] : undefined;

  return (
    <Row
      fitWidth
      id={id}
      background="neutral-weak"
      border="neutral-alpha-medium"
      paddingX="12"
      paddingY="4"
      vertical="center"
      radius="s"
      gap="8"
      style={{ color: "var(--neutral-on-background-strong)" }}
    >
      {IconComponent && <IconComponent size={18} />}
      <Text variant="label-default-s">{name}</Text>
    </Row>
  );
}
