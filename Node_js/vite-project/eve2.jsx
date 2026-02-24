import React, { useState } from "react";
function Fav_color() {
    const [color, setcolor] = useState("black");
    const [bgColor, setbgColor] = useState("white");
    return (
        <body style={{backgroundColor: bgColor}}>
            
        <div >
            <h2 style={{ color: color  }}>your selected color</h2>
            <button onClick={() => {
                setcolor("red");
                setbgColor("pink");
            }}>
                RED
            </button>
            <button onClick={() => {setcolor("cyan");setbgColor("blue")}}>CYAN</button>
            <button onClick={() => {setcolor("yellow");setbgColor("orange")}}>YELLOW</button>
            <button onClick={() => {setcolor("blue");setbgColor("sienna")}}>BLUE</button>
        </div>
        </body>
    );
}
export default Fav_color