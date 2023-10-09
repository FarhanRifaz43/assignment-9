import { Link } from "react-router-dom";

const Service = ({ service }) => {
    const { id, event_name, image, price } = service;
    return (
        <div className="flex flex-col flex-grow border">
            <div className="w-72 min-h-80 bg-base-100 shadow-xl rounded-xl">
            <figure><img className=" w-72 h-48 rounded-t-xl" src={image} alt="image" /></figure>
            <div>
                <div className="flex items-center justify-between gap-8 my-4 px-4">
                <h2 className="font-bold text-xl">{event_name}</h2>
                <h2 className="text-gray-600 text-xs">${price}</h2>
                </div>
                <div className="card-actions">
                    <Link to={`/services/${id}`} className="w-full mx-5 mb-4 mt-6 text-center"><button className="btn btn-wide btn-outline btn-info">Book Event</button></Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Service;