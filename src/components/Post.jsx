import styles from "./Post.module.css";

export function Post () {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="./src/assets/avatar.jpg" />
                    <div className={styles.authorInfo}>
                        <strong>Júlio Rodrigues</strong>
                        <span>Full Stack Developer</span>
                    </div>
                </div>

                <time title="26 de Abril de 2024 as 21:45" dateTime="2024-04-26 21:45:50">Publicado há 2 horas</time>
            </header>

            <div className={styles.content}>
                <p>Olá pessoal</p>
                <p>Acabei de finalizar mais um projeto</p>
                <p><a href="#">Aqui</a></p>
                <p>
                    <a href="">#novo projeto</a>{' '}
                    <a href="">#evolucao</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                placeholder="Deixe seu comentário"
                />

                <footer>
                    <button type="submit">
                        Publicar
                    </button>
                </footer>
            </form>

        </article>
    )
}