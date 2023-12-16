import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const countUp = () => {
        setCount((prev) => prev + 1);
    }

    const countDown = () => {
        setCount((prev) => prev - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <>
            <h2>Counter</h2>
            <p>Count: {count}</p>
            <button onClick={countUp}>+</button>
            <button onClick={countDown}>-</button>
            <button onClick={reset}>Reset</button>
        </>
    )
};

export default Counter;