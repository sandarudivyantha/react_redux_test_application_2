import { useDispatch, useSelector } from "react-redux";
import { numberDecrement, numberIncrement } from "./store/reducers/number";

function App() {
  const number = useSelector((store) => store.number);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        {number}
        <div>
          <button
            onClick={() => {
              dispatch(numberIncrement());
            }}
          >
            Increment +
          </button>
          <button
            onClick={() => {
              dispatch(numberDecrement());
            }}
          >
            Decrement -
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
