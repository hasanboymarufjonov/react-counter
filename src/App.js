import React, { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  // Function is called everytime increment button is clicked
  const handleClick1 = () => {
    // Counter state is incremented
    setCounter(counter + 1);
  };

  // Function is called everytime decrement button is clicked
  const handleClick2 = () => {
    // Counter state is decremented
    setCounter(counter - 1);
  };
  return (
    <div className="container">
      Counter App
      <div className="counter">{counter}</div>
      <div>
        <button className="button" onClick={handleClick1}>
          Increment
        </button>
        <button className="button" onClick={handleClick2}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
