import React, { useState, useEffect } from "react";

function Greeting({ name }) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("I worked!");
    document.title = "Hello, " + name;
  }, [name]); // Когда в useEffect мы вторым агрументом добавили [name],
  //  то установили зависимость вызова useEffect от того,  изменилась ли значение  name
  // если оно неизменно, то useEffect не будет отрабатывать

  return (
    <h1 className="Greeting">
      Hello, {name} {counter} times!
      <div>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
      </div>
    </h1>
  );
}

export default Greeting;
