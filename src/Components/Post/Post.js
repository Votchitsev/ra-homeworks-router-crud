import { useNavigate } from "react-router-dom";
import './Post.css';

function Post({ created, content, id }) {

  const navigate = useNavigate();

  const onClickHandler = () => navigate(`/posts/${id}`)

  return (
    <div className="post" onClick={ onClickHandler }>
      <div className="post-item post__user-name">User</div>
      <div className="post-item post__created">{ created }</div>
      <div className="post-item post__content">{ content }</div>
    </div>
  )
}

export default Post;
