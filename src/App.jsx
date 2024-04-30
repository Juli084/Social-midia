import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/juli084.png',
      name: 'Júlio Rodrigues',
      role: Full Stack Developer,
    },
    content: [
      {type: 'paragraph', content: 'Fala Dev, beleza?'},
      {type: 'paragraph', content: 'Acabei de finalizar mais um projeto'},
      {type: 'link', content: 'https://github.com/juli084.png'},
    ],
  },
];

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

