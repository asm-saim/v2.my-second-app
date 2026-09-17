"use client";
import { useState } from "react";

const Counter = () => {
  console.log("Hello from counter component");
  
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <h1 className="text-5xl">Counter: {counter}</h1>
      <button onClick={handleClick} className="btn btn-primary">
        Increase
      </button>
    </div>
  );
};

export default Counter;
