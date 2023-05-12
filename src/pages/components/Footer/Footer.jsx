import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
        <h2 className={styles.header}>K . Y . S . T</h2>
        <p className={styles.bodytext}>© Copywright KYST AB 2023</p>
    </div>
  )
}
