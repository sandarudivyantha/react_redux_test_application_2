import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPost,
  selectIds,
  selectPostLoading,
  updatePost,
} from "./Store/Reducers/postSlice";
import { getUsers } from "./Store/Reducers/userSlice";
import { increment, numberSelector } from "./Store/Reducers/numberSlice";
import Post from "./Components/Post";

function App() {
  const postTitleRef = useRef();
  const postIdRef = useRef();

  const number = useSelector(numberSelector);
  const postLoading = useSelector(selectPostLoading);
  const selectPost = useSelector(selectIds);
  const dispatch = useDispatch();

  console.log(selectPost);
  return (
    <>
      <div>
        {postLoading !== "completed" ? <h1>Loading...</h1> : null}
        <button onClick={() => dispatch(getPost())}>Get Post Data</button>
        <button onClick={() => dispatch(getUsers())}>Get User Data</button>

        <h1>{number}</h1>
        <button onClick={() => dispatch(increment("Sudda", 10, "Kalutara"))}>
          Increment
        </button>

        <hr />

        <h2>Change Post</h2>
        <input placeholder="Post title" ref={postTitleRef} />
        <br />
        <input placeholder="Post id" ref={postIdRef} />
        <br />

        <button
          onClick={() =>
            dispatch(
              updatePost({
                id: Number(postIdRef.current.value),
                changes: { title: postTitleRef.current.value },
              })
            )
          }
        >
          Submit
        </button>

        {selectPost.map((postId) => (
          <Post postId={postId} key={postId} />
        ))}
      </div>
    </>
  );
}

export default App;
