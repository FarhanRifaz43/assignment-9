import { useState } from "react";
import Service from "./Service";

const Services = () => {
    const [data, setData] = useState([])

    fetch('data.json')
    .then(res => res.json())
    .then(data => setData(data))

    return (
        <div>
            {
                data.map(service => <Service key={service.id} service={service}></Service>)
            } 
        </div>
    );
};

export default Services;