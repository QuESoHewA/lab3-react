import { Container } from "@common";
import { images } from "@assets";
import styles from "./Footer.module.css";

export default function Footer({ data }) {
  return (
    <Container as="footer" className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <span className={styles.logo}>Jadoo.</span>
          <p>{data.tagline}</p>
        </div>

        {data.columns.map((column) => (
          <div key={column.title}>
            <h4 className={styles.heading}>{column.title}</h4>
            <ul className={styles.links}>
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className={styles.social}>
          <div className={styles.icons}>
            {data.socials.map((social) => (
              <a key={social.label} href="#" aria-label={social.label}>
                <img src={images[social.icon]} alt="" />
              </a>
            ))}
          </div>
          <p className={styles.discover}>Discover our app</p>
          <div className={styles.apps}>
            {data.apps.map((app) => (
              <a key={app.label} href="#">
                <img src={images[app.icon]} alt={app.label} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className={styles.copy}>{data.copyright}</p>
    </Container>
  );
}
