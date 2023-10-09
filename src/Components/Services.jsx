import { useState } from "react";
import Service from "./Service";

const Services = () => {
    const [data, setData] = useState([])

    fetch('data.json')
    .then(res => res.json())
    .then(data => setData(data))

    return (
        <>
        <h2 className="text-center mb-12 font-bold text-3xl">Our <span className="text-cyan-500">Services</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-fit mx-auto gap-5 mb-16">
            {
                data.map(service => <Service key={service.id} service={service}></Service>)
            } 
        </div>
        </>
    );
};

export default Services;