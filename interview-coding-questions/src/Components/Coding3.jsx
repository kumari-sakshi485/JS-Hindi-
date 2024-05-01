import  { Component } from "react";

class Coding3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementCounter}>Increment</button>
        <div>Counter: {this.state.counter}</div>
      </div>
    );
  }
}

export default Coding3;




// question 

/**
 Analyze the below code and advise what is wrong with using setState() inside the render() method:
import React, { Component } from "react";
 class App extends Component {
  state = {
	counter: 0,
  };
 
  render() {
	this.setState({ counter: this.state.counter + 1 });
	return <div>Counter: {this.state.counter}</div>;
  }
}
export default App;
 */
//solution

/** sing setState() inside the render() method can cause an infinite loop because each state update triggers a re-render. This leads to poor performance and potential errors. Instead, state updates should occur in response to user interactions or lifecycle events, outside of the render() method, to ensure proper control and efficiency. */