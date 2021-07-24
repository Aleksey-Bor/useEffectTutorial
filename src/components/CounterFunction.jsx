import React, { useState, useEffect } from "react";

function CounterFunction() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      console.log('useEffect: ',`You clicked ${count} times`);
    }, 3000);
  });

  return (
    <div>
      <p>Function component: You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default CounterFunction;
