import React from "react";
import { createRoot } from "react-dom/client";

class Department extends React.Component{
    constructor(){
        super();
        this.state={
            iname:"ISTAR",
            dname:""
        };
    }
    setMCA=()=>{
        this.setState({
            iname:"ISTAR",
            dname:"MCA"
        });
    };
    setIT=()=>{
        this.setState({
            iname:"ISTAR",
            dname: "IT"
        });
    };
    render(){
        return(
            <>
                <h1>Department Details</h1>
                <p>Institute Name:{this.state.iname}</p>
                <p>Department Name:{this.state.dname}</p>

                <button onClick={this.setMCA}>MCA</button>
                <button onClick={this.setIT}>IT</button>
            </>
        );
    }
}
export default Department