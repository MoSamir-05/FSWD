import React, { Component, useEffect, useState } from "react";
function Counter() {
    const [count, setCount] = useState(0);
    const [cal, setCal] = useState(0);
    useEffect(() => {
        setCal(() => count * 2);
    }, [count]);
    return (
        <>
        <p>Count :{count}</p>
        <button onClick={()=>setCount((c)=>c+1)}>+</button>
        <p>cal : {cal}</p>
        </>
    );
}
export default Counter