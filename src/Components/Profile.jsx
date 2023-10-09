import { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";

const Profile = () => {

const {user} = useContext(AuthContext)

    return (
        <div>
            <div className="bg-gray-100 min-h-screen flex items-center justify-center">
                <div className="bg-white p-4 rounded-lg shadow-lg lg:w-1/2 md:w-3/4 w-full border border-info">
                    <div className="text-center">
                        <img
                            src={user.photoURL}
                            alt="Profile Picture"
                            className="w-24 h-24 mx-auto rounded-full"
                        />
                        <h2 className="text-xl font-semibold mt-4">{user.displayName}</h2>
                        <p className="text-gray-600">@{user.displayName + "_" + parseInt(Math.random() * 1000000)}</p>
                    </div>
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold">About Me</h3>
                        <p className="text-gray-700 mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                            eget sapien ac urna dapibus euismod vel eget nulla.
                        </p>
                    </div>
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold">Contact Information</h3>
                        <ul className="text-gray-700 mt-2">
                            <li>Email: {user.email}</li>
                            <li>Phone: N/A</li>
                            <li>Location: N/A</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;