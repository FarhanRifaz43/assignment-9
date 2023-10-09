import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const navLinks = <>
        <NavLink to={'/'}><li className='font-bold hover:text-cyan-500 text-white hover:underline'>Home</li></NavLink>
        <li className='font-bold hover:text-cyan-500 text-white hover:underline'>Booked Services</li>
        <li className='font-bold hover:text-cyan-500 text-white hover:underline'>Profile</li>
        <li className='font-bold hover:text-cyan-500 text-white hover:underline'>Register</li>
        <li className='font-bold hover:text-cyan-500 text-white hover:underline'>Login</li>
    </>
    return (
        <div className="navbar bg-slate-900 sticky top-0 z-20">
            <a className="navbar-start ml-3 flex flex-row items-center gap-2 font-bold normal-case text-2xl text-cyan-500">Events</a>
            <div className="navbar-end">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 right-5 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="flex gap-4 text-md mr-3 cursor-pointer">
                    {navLinks}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;