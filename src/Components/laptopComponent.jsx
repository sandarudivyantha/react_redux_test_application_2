import { useSelector } from "react-redux";
import { laptopSliceSelector } from "../store/reducers/laptopSlice";

const laptopComponent = () => {
  const laptop = useSelector(laptopSliceSelector);

  return (
    <div>
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
