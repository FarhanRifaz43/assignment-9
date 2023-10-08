import { useState } from "react";
import Service from "./Service";

const Services = () => {
    const [data, setData] = useState([])

    fetch('data.json')
    .then(res => res.json())
    .then(data => setData(data))

    return (
        <div className="grid grid-cols-3 w-fit mx-auto gap-5 mb-5">
            {
                data.map(service => <Service key={service.id} service={service}></Service>)
            } 
        </div>
    );
};

export default Services;