import { useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
import './NewPost.css'

function NewPost() {

  const text = useRef();
  const [active, setActive] = useState(true);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    fetch('http://localhost:8000/posts', {
      method: 'POST',
      body: JSON.stringify({
        created: Date.now(),
        content: text.current.value,
      }),
      headers: {
        "content-type": "application/json",
      }
    })
    .then(_ => setActive(false))
  }

  return (
    <>
    { !active ? <Navigate to="/" /> : 
    <form className="new-post" onSubmit={ onSubmitHandler }>
      <h3 className='new-post--title'>Новый пост</h3>
      <textarea ref={ text }></textarea>
      <input type='submit'></input>
    </form>
    }
    </>
  )
}

export default NewPost;
