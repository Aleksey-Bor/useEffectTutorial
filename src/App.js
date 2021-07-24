import "./App.css";
import CounterFunction from "./components/CounterFunction";
import CounterClass from "./components/CounterClass";

function App() {
  return (
    <div className="App">
      <div>
        <CounterFunction />
      </div>
    <div>
      <CounterClass />
    </div>
    </div>
  );
}

export default App;
