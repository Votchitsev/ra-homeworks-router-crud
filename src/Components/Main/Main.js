import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
import Post from '../Post/Post';

function Main() {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/posts')
      .then(response => response.json())
      .then(json => setPosts(json.data))
  }, [])

  return (
    <div className="wrapper">
      <Link to="/posts/new">Создать пост</Link>
      <div className='post-container'>
        { posts.map((post) => <Post created={ post.created } content={ post.content } key={ post.id } id={ post.id }/>)}
      </div>
    </div>
  )
}

export default Main;
