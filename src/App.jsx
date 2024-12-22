import { useDispatch, useSelector } from "react-redux";
import { selectLaptop } from "./Store/Reducers/laptopSlice";
import { addItemsToCart, selectCart } from "./Store/Reducers/cartSlice";

function App() {
  const laptop = useSelector(selectLaptop);
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
  console.log(cart);

  return (
    <>
      <div>
        {laptop.map(({ id, price, cpu, ram }) => (
          <p key={id}>
            {price}|{cpu}|{ram} &nbsp;
            <button
              onClick={() => dispatch(addItemsToCart(id, price, cpu, ram))}
            >
              Add to Cart
            </button>
          </p>
        ))}
        <br />
        <h1>Cart</h1>
        <hr />
        <h3>{cart.length}</h3>
        <h3>Total : Rs. 0</h3>
      </div>
    </>
  );
}

export default App;
