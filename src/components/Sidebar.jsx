import { WhatsappLogo } from "phosphor-react";

import styles from "./Sidebar.module.css";

export function Sidebar () {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} 
            src="https://img.freepik.com/fotos-gratis/plano-de-fundo-de-programacao-com-pessoa-trabalhando-com-codigos-no-computador_23-2150010115.jpg?t=st=1714000720~exp=1714004320~hmac=0a9cae827c200f15b92634dc16a7a6365d7c6b207f0602974a9a046958dbcb7e&w=400" 
            />

            <div className={styles.profile}>
                <img className={styles.avatar} src="./src/assets/avatar.jpg" 
                />

                <strong>Júlio Rodrigues</strong>
                <span>Full Stack Developer</span>
            </div>

            <footer>
                <a href="http://wa.me/5515997534529" target="_blank">
                    <WhatsappLogo size={40} />
                    Vamos tomar um café?
                </a>
            </footer>
        </aside>
    );
}