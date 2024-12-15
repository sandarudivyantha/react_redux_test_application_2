import { useSelector } from "react-redux";

function App() {
  const number = useSelector((store) => store.number);

  return (
    <>
      <div>{number}</div>
    </>
  );
}

export default App;
