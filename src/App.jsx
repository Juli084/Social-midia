import { Post } from "./Post"
import { Header } from "./components/Header";

import './global.css';

function App() {
  return (
   <div>

      <Header/>
      <Post
        author="Júlio Rodrigues"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic minima nihil quo vitae, eligendi ullam nulla voluptatibus deserunt dignissimos blanditiis consequatur praesentium minus doloremque quisquam enim sed. Quaerat, dolores nihil!"
      />
      <Post
      author="Francesco Terezo"
      content="Que legal!"
      />    
   </div>
  )
}

export default App

