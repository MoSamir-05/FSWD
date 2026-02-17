import React, { Component } from "react";

class Std extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "Samir",
      age: 22
    };
  }

  render() {
    return (
      <div>
        <h2>{"Name : "+this.state.name}</h2>
        <h3>{"Age : "+this.state.age}</h3>
      </div>
    );
  }
}

export default Std;