import { useEffect, useState } from 'react';
import './Main.css';
import Post from './Post';

function Main() {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/posts')
      .then(response => response.json())
      .then(json => setPosts(json.data))
  }, [])

  return (
    <div className="wrapper">
      <form>
        <input type='text'></input>
        <input type='submit' value='Создать пост'></input>
      </form>
      <div className='post-container'>
        { posts.map((post) => <Post created={ post.created } content={ post.content } key={ post.id }/>)}
      </div>
    </div>
  )
}

export default Main;
