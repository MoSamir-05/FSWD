import { useState, createContext, useContext } from 'react';
import { createRoot } from 'react-dom/client';

function University() {
    const uni_name = "CVMU";
    return (
        <>
            <h1>University name is : {uni_name}</h1>
            <Institute />
        </>
    )
}

function Institute() {
    const ins_name = "ISRAT";
    return (
        <>
            <h1>University name is : {ins_name}</h1>
            <Department />
        </>
    )
}

function Department() {
    const dep_name = "MCA";
    return (
        <>
            <h1>University name is : {dep_name}</h1>
            <Student />
        </>
    )
}

function Student() {
    const std_name = "Mo Samir";
    return (
        <>
            <h1>University name is : {std_name}</h1>
        </>
    )
}
export default University