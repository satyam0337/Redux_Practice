import { useDispatch, useSelector } from "react-redux";
import { increament, decreament } from "../redux/action";

const Counter = () => {
  const dispatch = useDispatch();
  const sel = useSelector((state) => state.a);

  return (
    <>
      <div>
        <h2> {sel} </h2>

        <button
          style={{ marginRight: "20px" }}
          onClick={() => dispatch(increament())}
        >
          +
        </button>
        <button onClick={() => dispatch(decreament())} disabled={sel === 0}>
          -
        </button>
      </div>
    </>
  );
};

export default Counter;
