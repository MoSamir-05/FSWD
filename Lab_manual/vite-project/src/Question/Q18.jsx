import React from "react";
import { createRoot } from "react-dom/client";
import "./Q18.css";

class StateDetail extends React.Component {

  constructor() {
    super();
    this.state = {
      sname: "",
      capital: "",
      area: "",
      language: "",
      dance: ""
    };
  }

  showGujarat = () => {
    this.setState({
      sname: "Gujarat",
      capital: "Gandhinagar",
      area: "196,024 km²",
      language: "Gujarati",
      dance: "Garba"
    });
  };

  showMaharashtra = () => {
    this.setState({
      sname: "Maharashtra",
      capital: "Mumbai",
      area: "307,713 km²",
      language: "Marathi",
      dance: "Lavani"
    });
  };

  showRajasthan = () => {
    this.setState({
      sname: "Rajasthan",
      capital: "Jaipur",
      area: "342,239 km²",
      language: "Hindi",
      dance: "Ghoomar"
    });
  };

  showPunjab = () => {
    this.setState({
      sname: "Punjab",
      capital: "Chandigarh",
      area: "50,362 km²",
      language: "Punjabi",
      dance: "Bhangra"
    });
  };

  showTamilNadu = () => {
    this.setState({
      sname: "Tamil Nadu",
      capital: "Chennai",
      area: "130,058 km²",
      language: "Tamil",
      dance: "Bharatanatyam"
    });
  };

  render() {
    return (
      <div className="container">
        <h1>State Details</h1>

        <div className="links">
          <button onClick={this.showGujarat}>Gujarat</button>
          <button onClick={this.showMaharashtra}>Maharashtra</button>
          <button onClick={this.showRajasthan}>Rajasthan</button>
          <button onClick={this.showPunjab}>Punjab</button>
          <button onClick={this.showTamilNadu}>Tamil Nadu</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>State</th>
              <th>Capital</th>
              <th>Area</th>
              <th>Language</th>
              <th>Dance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.sname}</td>
              <td>{this.state.capital}</td>
              <td>{this.state.area}</td>
              <td>{this.state.language}</td>
              <td>{this.state.dance}</td>
            </tr>
          </tbody>
        </table>

      </div>
    );
  }
}

export default StateDetail