import styles from './Header.module.css'

import cescoLogo from '../assets/cachorro.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={cescoLogo} alt="logotipo da pagina" />
        </header>        
    );
}