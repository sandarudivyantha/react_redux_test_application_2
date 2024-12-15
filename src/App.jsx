import { useDispatch, useSelector } from "react-redux";

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
              dispatch({ type: "increment", payload: 5 });
            }}
          >
            Increment +
          </button>
          <button
            onClick={() => {
              dispatch({ type: "decrement", payload: 5 });
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
