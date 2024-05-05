import React from 'react';
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: './src/assets/avatar.jpg',
      name: 'Júlio Rodrigues',
      role: 'Full Stack Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala Dev, beleza?'},
      { type: 'paragraph', content: 'Acabei de finalizar mais um projeto'},
      { type: 'link', content: 'https://github.com/juli084.png'},
    ],
    publishedAt: new Date('2024-04-30 07:53:07'),
  },

  {
    id: 2,
    author: {
      avatarUrl: './src/assets/avatar2.png',
      name: 'Francesco Terezo',
      role: 'CTO'
    },
    content: [
      { type: 'paragraph', content: 'Fala Dev, beleza?'},
      { type: 'paragraph', content: 'Acabei de finalizar mais um projeto'},
      { type: 'link', content: 'https://github.com/juli084.png'},
    ],
    publishedAt: new Date('2024-05-01 20:53:07'),
  },
];

function App() {
  return (
   <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
   </div>
  )
}

export default App;