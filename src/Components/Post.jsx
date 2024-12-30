import { useSelector } from "react-redux";
import { selectById } from "../Store/Reducers/postSlice";

const Post = ({ postId }) => {
  console.log("Post Component: ", postId);

  const post = useSelector((store) => selectById(store, postId));

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
