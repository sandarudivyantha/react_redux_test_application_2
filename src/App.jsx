import { useDispatch, useSelector } from "react-redux";
import {
  getPost,
  selectAll,
  selectPostLoading,
} from "./Store/Reducers/postSlice";
import { increment, numberSelector } from "./Store/Reducers/numberSlice";
import Post from "./Components/Post";

function App() {
  const postTitleRef = useRef();
  const postIdRef = useRef();

  const number = useSelector(numberSelector);
  const postLoading = useSelector(selectPostLoading);
  const selectPost = useSelector(selectAll);
  const dispatch = useDispatch();

  console.log(selectPost);
  return (
    <>
      <div>
        {postLoading !== "completed" ? <h1>Loading...</h1> : null}
        <button onClick={() => dispatch(getPost())}>Get Data</button>

        <h1>{number}</h1>
        <button onClick={() => dispatch(increment("Sudda", 10, "Kalutara"))}>
          Increment
        </button>
        <hr />
        <h2>Change Post</h2>
        <input placeholder="Post title" ref={postTitleRef} /><br/>
        <input placeholder="Post id" ref={postIdRef} /><br/>
        <button>Submit</button>
        {selectPost.map((ele) => (
          <Post ele={ele} key={ele.id} />
        ))}
      </div>
    </>
  );
}

export default App;
