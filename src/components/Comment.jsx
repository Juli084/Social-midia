import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment () {
    return (
        <div className={styles.comment}>
            <img src="./src/assets/avatar.jpg" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Francesco</strong>
                            <time title="26 de Abril de 2024 as 21:45" dateTime="2024-04-26 21:45:50">Cerca de 2 horas atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={20}/>
                        </button>
                    </header>

                    <p>Parabéns Dev!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>                    
                </footer>
            </div>
        </div>
    )
}