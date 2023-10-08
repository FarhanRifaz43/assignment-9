import { Link, useLoaderData, useParams } from "react-router-dom";

const ServiceDetail = () => {
    const service = useLoaderData();
    const { id } = useParams();
    const detail = service.find(e => e.id === id);
    return (
        <div className="flex gap-5 w-fit mx-auto h-[80vh] items-center justify-center">
            <img src={detail.image} className="max-w-lg mb-6 rounded-lg" />
            <div className="flex flex-col gap-5 w-fit mx-auto items-center justify-center">
                <div>
                    <h1 className="text-4xl font-bold text-center">{detail.event_name}</h1>
                    <p className="py-6 text-center text-gray-500">{detail.event_description}</p>
                </div>
                <div className="flex flex-row justify-between gap-10">
                    <button className="bg-purple-600 text-white px-2 py-1 rounded-sm">Book Event for ${detail.price}</button>
                    <Link to={'/'}><button className="bg-gray-200 px-2 py-1 rounded-sm">Go back</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;