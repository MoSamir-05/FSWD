import React from "react";

function ServiceList({setService}){

    const services = ["Plumber","Electrician","Cleaner","Painter"];

    return(
        <div className="service">

            <h3>Select Service</h3>

            {services.map((s,index)=>(
                <button key={index} onClick={()=>setService(s)}>
                    {s}
                </button>
            ))}

        </div>
    )
}

export default ServiceList;