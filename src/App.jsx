import { Post } from "./Post"
import { Header } from "./components/Header";

import styles from "./App.module.css";

import './global.css';
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
   <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
        <Post
        author="Júlio Rodrigues"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic minima nihil quo vitae, eligendi ullam nulla voluptatibus deserunt dignissimos blanditiis consequatur praesentium minus doloremque quisquam enim sed. Quaerat, dolores nihil!"
      />
      <Post
      author="Francesco Terezo"
      content="Que legal!"
      />

        </main>
      </div>
   </div>
  )
}

export default App

