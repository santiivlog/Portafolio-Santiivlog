import { Icon, Row, Text } from "@once-ui-system/core";
import { person, social } from "@/resources";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <Row as="footer" fillWidth padding="8" horizontal="center" s={{ direction: "column" }}>
      <Row
        className={styles.footer}
        maxWidth="m"
        paddingY="12"
        paddingX="16"
        gap="16"
        horizontal="between"
        vertical="center"
        s={{
          direction: "column",
          horizontal: "center",
          align: "center",
        }}
      >
        <Text variant="body-default-s" onBackground="neutral-strong">
          {person.name} 2026
        </Text>
        <Row className={styles.socials} gap="8">
          {social.map(
            (item) =>
              item.link && (
                <a
                  className={styles.socialLink}
                  key={item.name}
                  href={item.link}
                  target={item.link.startsWith("mailto:") ? undefined : "_blank"}
                  rel={item.link.startsWith("mailto:") ? undefined : "noreferrer"}
                  aria-label={item.name}
                >
                  <span className={styles.socialIcon}>
                    <Icon name={item.icon} size="s" />
                  </span>
                  <span className={styles.socialText}>{item.name}</span>
                </a>
              ),
          )}
        </Row>
      </Row>
      <Row height="80" hide s={{ hide: false }} />
    </Row>
  );
};
