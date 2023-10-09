const FAQ = () => {
    return (
        <div className="w-1/2 mx-auto mt-10 mb-10">
            <h2 className="text-center font-bold text-3xl mb-8">Common <span className="text-cyan-500">Queries</span></h2>
            <div className="collapse collapse-arrow join-item shadow-md border">
                <input type="radio" name="my-accordion-4"/>
                <div className="collapse-title text-xl font-medium">
                What <span className="text-cyan-500">services</span> do you offer as a corporate event planning company?
                </div>
                <div className="collapse-content">
                    <p className=" text-gray-500">We offer a comprehensive range of services to meet your specific needs. We specialize in event design, logistics management, venue selection, catering coordination, entertainment booking, audiovisual production, and more. Whether you need assistance with a small team meeting, a product launch, or a large-scale conference, we have the expertise to make your event a success.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow join-item shadow-md border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                How much <span className="text-cyan-500">does it cost</span> to hire your corporate event planning services?
                </div>
                <div className="collapse-content">
                    <p className=" text-gray-500">The cost of our corporate event planning services varies depending on the size and complexity of your event, as well as the specific services you require. We offer customized pricing packages to fit your budget and objectives. To receive a detailed quote, please get in touch with our team, and we'll be happy to provide you with a tailored estimate based on your event's unique requirements.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow join-item shadow-md border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                Can you help with both in-person and <span className="text-cyan-500">virtual corporate</span> events?
                </div>
                <div className="collapse-content">
                    <p className=" text-gray-500">Yes, we are well-equipped to handle both in-person and virtual events. We understand that the landscape of corporate gatherings has evolved, especially in light of recent global events. We can assist you in organizing traditional in-person events at a venue of your choice or create engaging virtual experiences that connect your audience regardless of their location. Our team has the technical know-how and creative expertise to make your virtual events just as impactful as in-person ones.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;