import React from "react";

class Bank extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "State Bank of India",
      branch: "Anand Branch",
      ifsc: "SBIN0001234"
    };
  }

  render() {
    return (
      <>
        <h1>Bank Details</h1>
        <p>Bank Name: {this.state.name}</p>
        <p>Branch: {this.state.branch}</p>
        <p>IFSC Code: {this.state.ifsc}</p>
      </>
    );
  }
}

function Q16() {
  return <Bank />;
}

export default Q16;