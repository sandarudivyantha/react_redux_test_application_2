const Post = ({ ele }) => {
  console.log("Post Component: ", ele.id);
  return (
    <div>
      <h1>{ele.title}</h1>
      <p>{ele.body}</p>
    </div>
  );
};

export default Post;
