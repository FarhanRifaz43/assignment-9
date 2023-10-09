import { Link, useLoaderData, useParams } from "react-router-dom";

const ServiceDetail = () => {
    const service = useLoaderData();
    const { id } = useParams();
    const detail = service.find(e => e.id === id);
    return (
        <div className="md:flex w-screen h-[95vh] items-center justify-center">
            <div className="md:h-full w-full px-5 flex items-center bg-cyan-500">
            <img src={detail.image} className="w-full rounded-xl shadow-xl" />
            </div>
            <div className="flex flex-col gap-5 items-center justify-center h-full w-full">
                <div className="w-3/4">
                    <h1 className="text-4xl font-bold text-center">{detail.event_name}</h1>
                    <p className="py-6 text-center mx-10 text-gray-400">{detail.event_description}</p>
                </div>
                <div className="flex flex-row justify-between gap-10">
                    <Link to={'/payment'}><button className="btn btn-outline btn-info">Book Event for ${detail.price}</button></Link>
                    <Link to={'/'}><button className="btn btn-outline btn-error">Go back</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;