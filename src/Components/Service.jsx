import { NavLink } from "react-router-dom";

const Service = ({ service }) => {
    const { id, event_name, image, price } = service;
    return (
        <div className="flex flex-col flex-grow">
            <div className="max-w-sm min-h-80 bg-base-100 shadow-xl rounded-xl">
            <figure><img className="w-96 h-60 rounded-t-xl" src={image} alt="image" /></figure>
            <div>
                <div className="flex items-center justify-between gap-8 my-4 px-4">
                <h2 className="font-bold text-xl">{event_name}</h2>
                <h2 className="text-gray-600 text-xs">${price}</h2>
                </div>
                <div className="card-actions">
                    <NavLink to={`/services/${id}`} className="w-full mx-5 mb-4 mt-6 rounded-md py-1 bg-gray-300 hover:bg-purple-600 hover:text-white text-center"><button>Book Event</button></NavLink>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Service;