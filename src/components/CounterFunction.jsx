import React, { useState, useRef, useEffect } from "react";

function CounterFunction() {
  const [count, setCount] = useState(0);
  const latestCount = useRef(count);

  useEffect(() => {
    latestCount.current = count;
    setTimeout(() => {
      console.log('useEffect: ',`You clicked ${latestCount.current} times`);
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
