import { useEffect, useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

function ChangePost() {
  let text = useRef();
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/posts/${id}`)
      .then(response => response.json())
      .then(json => setPost(json));
  }, [id])

  useEffect(() => {
    text.current.value = post.content
  }, [post])

  const onCloseHandler = () => {
    navigate(`/posts/${id}`);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    
    fetch('http://localhost:8000/posts', {
      method: 'POST',
      body: JSON.stringify({
        id,
        content: text.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(_ => navigate('/'))
  }

  return (
    <form className="new-post" onSubmit={ onSubmitHandler }>
      <h3 className='new-post--title'>Изменить пост</h3>
      <textarea ref={ text }></textarea>
      <input type='submit' value='Изменить'></input>
      <div className='close' onClick={ onCloseHandler }>x</div>
    </form>
  )
}

export default ChangePost;
