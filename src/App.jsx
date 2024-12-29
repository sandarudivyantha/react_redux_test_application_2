import { useDispatch, useSelector } from "react-redux";
import { getPost, selectAllPost } from "./Store/Reducers/postSlice";
import { increment, numberSelector } from "./Store/Reducers/numberSlice";

function App() {
  const postObj = useSelector(selectAllPost);
  const number = useSelector(numberSelector);

  const dispatch = useDispatch();
  console.log(postObj);

  return (
    <>
      <div>
        {!postObj.loading === "completed" && <h1>Loading......</h1>}
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
