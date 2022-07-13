import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount(count + 1);
  };
  const decrementHandler = () => {
    setCount(count - 1);
  };
  const resetHandler = () => {
    setCount(0);
  };
  return (
    <>
      <div className="btn btn-primary" onClick={incrementHandler}>
        Increment
      </div>
      <span>Count: {count}</span>
      <div className="btn btn-secondary" onClick={decrementHandler}>
        Decrement
      </div>
      <div className="btn btn-danger" onClick={resetHandler}>
        Reset
      </div>
    </>
  );
};

export default Counter;
