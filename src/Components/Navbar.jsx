import { FaPowerOff } from 'react-icons/fa'
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../firebase/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user)

    const navLinks = <>
        <NavLink to={'/'}><li className='font-bold hover:text-cyan-500 text-white hover:underline'>Home</li></NavLink>
        {
            user && <>
                <NavLink to={'/profile'}><li className='font-bold hover:text-cyan-500 text-white hover:underline'>Profile</li></NavLink>
            </>
        }
        {!user && <NavLink to={'/login'}><li className='font-bold hover:text-cyan-500 text-white hover:underline'>Login</li></NavLink>}
    </>
    return (
        <div className="navbar justify-between bg-slate-900 sticky top-0 z-20">
            <a className="ml-3 flex flex-row items-center gap-2 font-bold normal-case text-2xl text-cyan-500">Events</a>
            <div>
                <div className="dropdown flex items-center">
                {user && <div className='flex items-center gap-4'>
                    <h2 className='text-cyan-500 lg:hidden'>{user.email}</h2>
                        <div className="avatar lg:hidden">
                            <div className="w-8 rounded-full ring ring-info ring-offset-base-100 ring-offset-2">
                                <img src={user.photoURL} />
                            </div>
                        </div>
                    </div>}
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-slate-900 mt-3 right-5 z-[1] p-2 shadow rounded-box w-52">
                        {navLinks}
                        {user && <>
                            <li>
                                <button className="font-bold text-white hover:text-cyan-500" onClick={() => document.getElementById('my_modal_1').showModal()}><FaPowerOff></FaPowerOff></button>
                                <dialog id="my_modal_1" className="modal">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">Are you sure?</h3>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                <div className="flex">
                                                    <button className="btn">Cancel</button>
                                                    <button onClick={logOut} className="btn bg-black text-white ml-3 mr-4">Log Out</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </li>
                        </>}
                    </ul>
                </div>
            </div>
            <div className="hidden lg:flex">
                <ul className="flex items-center gap-4 text-md mr-3 cursor-pointer">
                    {user && <div className='flex flex-row gap-2 items-center'>
                        <h2 className='text-cyan-500'>{user.email}</h2>
                        <div className="avatar">
                            <div className="w-8 rounded-full ring ring-info ring-offset-base-100 ring-offset-2">
                                <img src={user.photoURL} />
                            </div>
                        </div>
                    </div>}
                    {navLinks}
                    {user && <>
                        <a className="font-bold text-white rounded-full hover:text-cyan-500 hover:underline" onClick={() => document.getElementById('my_modal_2').showModal()}>Log Out</a>
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Caution</h3>
                                <p className="py-4">Are you sure you want to log out?</p>
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="btn">Cancel</button>
                                        <button onClick={logOut} className="btn bg-slate-900 text-cyan-500 ml-3">Log Out</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </>}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;