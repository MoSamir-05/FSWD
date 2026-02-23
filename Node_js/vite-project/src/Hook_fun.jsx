import React, { Component,useState } from "react";
function Fav_color(){
    const [color,setcolor]=useState("black");
    return(
        <div>
            <h2 style={{color:color}}>your selected color</h2>
            <button onClick={()=>setcolor("red")}>RED</button>
            <button onClick={()=>setcolor("cyan")}>CYAN</button>
            <button onClick={()=>setcolor("yellow")}>YELLOW</button>
            <button onClick={()=>setcolor("blue")}>BLUE</button>
        </div>
    );
}
export default Fav_color