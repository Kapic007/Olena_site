import styles from './style.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_icons}>
        <a className={styles.footer_icons_icon} href="https://www.facebook.com/helen.kapitula.5"
          ><i className="bi bi-facebook"></i></a>
        <a className={styles.footer_icons_icon} href="https://www.behance.net/Kapitula"
          ><i className="bi bi-behance"></i></a>
        <a className={styles.footer_icons_icon} href="tel:+380937622151"
          ><i className="bi bi-phone"></i></a>
        <a className={styles.footer_icons_icon} href="mailto:lenkakapitula@gmail.com"
          ><i className="bi bi-envelope"></i></a>
      </div>
    </footer>
  )
}
