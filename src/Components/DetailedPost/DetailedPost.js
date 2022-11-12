import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import '../Post/Post.css';
import './DetailedPost.css';

function DetailedPost() {

  let [post, setPost] = useState({}); 

  let { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8000/posts/${id}`)
      .then(response => response.json())
      .then(json => setPost(json))
  }, [id])

  const onChangeHandler = () => {
    navigate(`/posts/change/${id}`);
  }

  const onDeleteHandler = () => {
    fetch(`http://localhost:8000/posts/${id}`, {
      method: 'DELETE',
    }).then(_ => navigate('/'));
  }

  const onCloseHandler = () => {
    navigate('/');
  }

  return (
    <div className="post__detailed">
      <div className="post__user-name">User</div>
      <div className="post__created">{ post.created }</div>
      <div className="post__content">{ post.content }</div>
      <div className="btns-container">
        <button className="change-btn" onClick={ onChangeHandler }>Изменить</button>
        <button className="delete-btn" onClick={ onDeleteHandler }>Удалить</button>
      </div>
      <div className="close" id="post-detailed-close" onClick={ onCloseHandler }>x</div>
    </div>
  )
}

export default DetailedPost;
