import styles from '../../styles/Nav.module.css';


function Nav() {
  return (
    <div className={styles.navContainer}>
        <nav className={styles.nav}>
            <div className={styles.navLogo}></div>
        </nav>
    </div>
  )
}

export default Nav