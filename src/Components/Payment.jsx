const Payment = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-16 bg-slate-800">
            <h2 className="font-bold text-4xl text-gray-100">Please Make The Payment to <span className="text-cyan-500">Confirm</span> Your Booking</h2>
            <div className="bg-white p-8 rounded-lg shadow-xl border border-cyan-500 lg:w-1/2 md:w-3/4 w-full bg-gradient-to-b from-cyan-200 to-cyan-500">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-16 mt-6">Payment Checkout</h2>
                <form className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-bold text-gray-700">
                            Name on Card
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="block w-full border border-gray-300 py-2 px-2 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                            placeholder="Your name here..."
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="cardNumber" className="block text-sm font-bold text-gray-700">
                            Card Number
                        </label>
                        <input
                            type="text"
                            id="cardNumber"
                            className="block w-full border border-gray-300 py-2 px-2 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                            placeholder="**** **** **** ****"
                        />
                    </div>
                    <div className="flex space-x-2">
                        <div className="w-1/2 space-y-2">
                            <label htmlFor="expirationDate" className="block text-sm font-bold text-gray-700">
                                Expiry Date
                            </label>
                            <input
                                type="text"
                                id="expirationDate"
                                className="block w-full border border-gray-300 py-2 px-2 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                                placeholder="MM/YY"
                            />
                        </div>
                        <div className="w-1/2 space-y-2">
                            <label htmlFor="cvv" className="block text-sm font-bold text-gray-700">
                                CVV
                            </label>
                            <input
                                type="text"
                                id="cvv"
                                className="block w-full border border-gray-300 py-2 px-2 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                                placeholder="123"
                            />
                        </div>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-slate-900 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded-lg focus:ring focus:ring-cyan-300 focus:ring-opacity-50">
                            Pay Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Payment;