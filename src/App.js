import React from "react";

class App extends React.Component{
  state = {score: 0};
  render(){
    return (
      <div className="App">
        <h1>Hey this is my Counter Application.</h1>
        <h3>The value of score is {this.state.score}</h3>
        <button onClick={() => (this.state.score < 25)? this.setState({"score": this.state.score + 1}) : ""}>Increment</button>
        <button onClick={() => (this.state.score > 0)? this.setState({"score": this.state.score - 1}) : "" }>Decrement</button>
        <button onClick={() => {this.setState({"score": 0})}}>Reset</button>
      </div>
    );
  }
}
export default App;
