import { useSelector } from "react-redux";
import { laptopSliceSelector } from "../store/reducers/laptopSlice";

const laptopComponent = () => {
  const laptop = useSelector(laptopSliceSelector);

  const addLaptopHandler = () => {};

  return (
    <div>
      <div>
        <h3>Add Laptops</h3>
        <input type="text" placeholder="Enter Price" />
        <input type="text" placeholder="Enter CPU" />
        <input type="text" placeholder="Enter Generation" />
        <input type="text" placeholder="Enter RAM" />
        <input type="text" placeholder="Enter HDD" />
        <button onClick={addLaptopHandler}>Add Laptop</button>
      </div>

      {laptop.map((ele) => (
        <p key={ele.id}>
          {ele.price}|{ele.spec.cpu}|{ele.spec.gen}|{ele.spec.ram}|
          {ele.spec.hdd}
        </p>
      ))}
    </div>
  );
};

export default laptopComponent;
