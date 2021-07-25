import "./App.css";
import CounterFunction from "./components/CounterFunction";
import CounterClass from "./components/CounterClass";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";


function App() {
  return (
    <div className="App">
      <div>
        <CounterFunction />
      </div>
      <div>
        <CounterClass />
      </div>
      <div>
        <Greeting name="Nastya"  /> {/* Попрообовать передать другое имя и посмотреть,
        на зкладке браузера */}
      </div>
      <div>
        <Counter />
      </div>
    </div>
  );
}

export default App;
