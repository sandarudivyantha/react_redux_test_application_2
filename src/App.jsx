import { useDispatch, useSelector } from "react-redux";
import { getPost, selectAllPost } from "./Store/Reducers/postSlice";
import { numberSelector } from "./Store/Reducers/numberSlice";

function App() {
  const postObj = useSelector(selectAllPost);
  const number = useSelector(numberSelector);

  const dispatch = useDispatch();
  console.log(postObj);

  // let Total = 0;
  // if (Array.isArray(cart)) {
  //   cart.forEach((ele) => {
  //     Total = Total + ele.count * ele.price;
  //   });
  // }

  // let cartCount = 0;
  // cart.forEach((ele) => {
  //   cartCount = cartCount + ele.count;
  // });

  return (
    <>
      <div>
        {!postObj.loading === "completed" && <h1>Loading......</h1>}
        <button onClick={() => dispatch(getPost("Sandaru"))}>Get Data</button>

        {/* {laptop.map(({ id, price, cpu, ram }) => (
          <p key={id}>
            {price}|{cpu}|{ram} &nbsp;
          </p>
        ))}
        <br />
        <h1>Cart</h1>
        <hr />
        <h3>{cartCount}</h3>
        <h3>Total : Rs. {Total}</h3> */}
      </div>
    </>
  );
}

export default App;
