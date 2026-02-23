import React,{Component}from "react";
class Color_bt extends Component{
    constructor(props){
        super(props);
        this.state={
            sele_color:"black"
        };
    }
    handle_click=(color)=>{
        this.setState({
            sele_color:color
        });
    };
    render(){
        return(
            <div>
                <h3 style={{color:this.state.sele_color}}>selected color</h3>
                <button onClick={()=>this.handle_click("red")}>RED</button>
                <button onClick={()=>this.handle_click("cyan")}>CYAN</button>
                <button onClick={()=>this.handle_click("yellow")}>YELLOW</button>
                <button onClick={()=>this.handle_click("white")}>white</button>
            </div>
        );
    }
}
export default Color_bt