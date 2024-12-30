import { useDispatch, useSelector } from "react-redux";
import {
  getPost,
  selectById,
  selectPostLoading,
} from "./Store/Reducers/postSlice";
import { increment, numberSelector } from "./Store/Reducers/numberSlice";

function App() {
  const number = useSelector(numberSelector);
  const postLoading = useSelector(selectPostLoading);
  const selectPost = useSelector((store) => selectById(store, 5));
  const dispatch = useDispatch();

  console.log(selectPost);
  return (
    <>
      <div>
        {postLoading !== "completed" ? <h1>Loading...</h1> : null}
        <button onClick={() => dispatch(getPost("Sandaru"))}>Get Data</button>

        <h1>{number}</h1>
        <button onClick={() => dispatch(increment("Sudda", 10, "Kalutara"))}>
          Increment
        </button>
      </div>
    </>
  );
}

export default App;
