function Post({ created, content }) {
  return (
    <div className="post">
      <div className="post__user-name">User</div>
      <div className="post__created">{ created }</div>
      <div className="post__content">{ content }</div>
    </div>
  )
}

export default Post;
