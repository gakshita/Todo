import { increment, decrement, incrementByAmount } from "./counterSlice";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(decrement())}>-</button>
            <div>{count}</div>
            <button onClick={() => dispatch(increment())}>+</button>

            <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
        </div>
    );
};

export default Counter;
