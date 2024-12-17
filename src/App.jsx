import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./store/reducers/numberSlice";
import { decrement2, increment2 } from "./store/reducers/number2Slice";

function App() {
  const number = useSelector((store) => store.numberSlice);
  const number2 = useSelector((store) => store.number2Slice);
  const dispatch = useDispatch();
  console.log(number);
  console.log(number2);

  return (
    <>
      <div>
        <h1>{number.number}</h1>
                <div>
          <button onClick={() => dispatch(increment(2))}>
            Number Increse +
          </button>
          <button onClick={() => dispatch(decrement(2))}>
            Number Decrese -
          </button>
        </div>
        <br/>
        <h3>{number2.number2}</h3>
        <div>
          <button onClick={() => dispatch(increment2(5))}>
            Number2 Increse +
          </button>
          <button onClick={() => dispatch(decrement2(5))}>
            Number2 Decrese -
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
