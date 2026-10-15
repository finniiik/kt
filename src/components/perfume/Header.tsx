import styles from './Landing.module.css';
export default function Header() {
  return <header className={styles.header}><a className={styles.logo} href="#top">beauty café<span>BY FABERLIC</span></a><nav className={styles.nav} aria-label="Навигация"><a href="#notes">Об аромате</a><a href="https://ozon.ru/t/EIPCrwi" target="_blank" rel="noopener noreferrer">На Ozon</a></nav></header>;
}