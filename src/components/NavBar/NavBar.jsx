import React from 'react';
import logo from '../../assets/logo.png'
import coinPhoto from '../../assets/coin.png'

const NavBar = ({coin}) => {
    return (

        <div className="navbar bg-base-100 max-w-335 mx-auto">
            {/* mobile menu */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                        <li> <a href="">Home</a> </li>
                        <li> <a href="">Fixture</a> </li>
                        <li> <a href="">Teams</a> </li>
                        <li> <a href="">Schedules</a> </li>

                    </ul>
                </div>
                {/* logo */}
                <div>
                    <img className='w-18.25 h-18' src={logo} alt="" />
                </div>
            </div>

            <div className="navbar-end">

                {/* hidden menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-12 mr-12">

                        <li> <a href="">Home</a> </li>
                        <li> <a href="">Fixture</a> </li>
                        <li> <a href="">Teams</a> </li>
                        <li> <a href="">Schedules</a> </li>

                    </ul>
                </div>
                {/* coin counter */}
                <a className="flex space-x-1.5 border px-4 py-3 rounded-lg text-4"> <span>{coin}</span> <span>Coin</span> <img className='w-5 h-5' src={coinPhoto} alt="It is a coin image"/></a>
            </div>
        </div>
    );
};

export default NavBar;