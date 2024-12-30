import { useSelector } from "react-redux";
import { selectById } from "../Store/Reducers/postSlice";
import { selectByIdUser } from "../Store/Reducers/userSlice";

const Post = ({ postId }) => {
  const post = useSelector((store) => selectById(store, postId));
  console.log("Post Component: ", postId);
  const user = useSelector((store) =>
    post ? selectByIdUser(store, post.userId) : null
  );

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <h5>{user.name}</h5>
    </div>
  );
};

export default Post;
