import { useDispatch, useSelector } from "react-redux";
import { addLaptop, laptopSliceSelector } from "../store/reducers/laptopSlice";
import { useRef } from "react";

const laptopComponent = () => {
  const laptop = useSelector(laptopSliceSelector);
  const dispatch = useDispatch();

  const price = useRef();
  const cpu = useRef();
  const gen = useRef();
  const ram = useRef();
  const hdd = useRef();

  const addLaptopHandler = () => {
    dispatch(
      addLaptop(
        price.current.value,
        cpu.current.value,
        gen.current.value,
        ram.current.value,
        hdd.current.value
      )
    );
  };

  return (
    <div>
      <div>
        <h3>Add Laptops</h3>
        <input ref={price} type="text" placeholder="Enter CPU" />
        <input ref={cpu} type="text" placeholder="Enter Price" />
        <input ref={gen} type="text" placeholder="Enter Generation" />
        <input ref={ram} type="text" placeholder="Enter RAM" />
        <input ref={hdd} type="text" placeholder="Enter HDD" />
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
