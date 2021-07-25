import React, { Component } from "react";

class CounterClass extends Component {
  state = {
    count: 0,
  };

/*   componentDidMount() {
    const count = this.state.count;
    setTimeout(() => {
      console.log("componentDidMount: ", `You clicked ${count} times`);
    }, 3000);
  }

  componentDidUpdate() {
    const count = this.state.count;
    setTimeout(() => {
      console.log(
        "componentDidUpdate from closure: ",
        `You clicked ${count} times`
      );
      console.log(
        "componentDidUpdate from state: ",
        `You clicked ${this.state.count} times`
      );
    }, 3000);
  } */

  render() {
    return (
      <div>
        <p>Class component: You clicked {this.state.count} times</p>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          Click me
        </button>
      </div>
    );
  }
}

export default CounterClass;
