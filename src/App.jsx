import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./store/reducers/numberSlice";

function App() {
  const number = useSelector((store) => store.numberSlice);
  const dispatch = useDispatch();
  console.log(number);

  return (
    <>
      <div>
        {number.number}
        <div>
          <button onClick={() => dispatch(increment(2))}>
            Number Increse +
          </button>
          <button onClick={() => dispatch(decrement(2))}>
            Number Decrese -
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
