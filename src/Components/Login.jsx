import { useContext, useState } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import { NavLink } from "react-router-dom";

const Login = () => {

    const { signInUser, setUser, handleGoogleSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInUser(email, password)
            .then(result => {
                setSuccess("Logged in successfully!")
            })
            .catch(error => {
                setError("The credentials don't match. Check if they are valid and try again")
            })
    }

    return (
        <div>
            <div className="min-h-screen">
                <div className="w-fit mx-auto items-center flex flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold text-center mt-16"><span className="text-cyan-500">Log In</span> To Your Account</h1>
                        <p className="py-6 text-center text-gray-500">Log in to proceed and access your personalized data, contents, features and much more!</p>
                    </div>
                    <div className="flex-grow w-full border border-cyan-500 rounded-lg bg-base-100 mt-10">
                        <div className="card-body rounded-lg">
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your e-mail</span>
                                    </label>
                                    <input type="email" placeholder="email here..." name="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="input password..." name="password" className="input input-bordered" />
                                    <label className="mt-2 mb-4 pl-2">
                                        <a href="#" className="text-xs underline mt-2">Forgot password?</a>
                                    </label>
                                    <div>
                                        <p className="mt-2 pl-2 text-xs text-cyan-500">{error ? error : success}</p>
                                    </div>
                                </div>
                                <div className="form-control mt-2">
                                    <button className="btn hover:text-cyan-400 text-black hover:bg-black">Login</button>
                                    <div>
                                        <h2 className="mt-3 text-sm text-gray-500">Don't have an account? <span className="text-cyan-500 underline">
                                            <NavLink to={'/register'}>Register</NavLink>
                                        </span></h2>
                                    </div>
                                </div>
                            </form>
                            <div>
                                <button onClick={handleGoogleSignIn}>Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;