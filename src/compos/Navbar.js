import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
        <div className="nav">
            <button id="logo" >Project LOGO</button>
                <div className="menu">
                <ul>
                    <li>Home</li>
                    <li><Link to={'#'}></Link>
                        <div className="dropdown">
                                <button className="dropbtn">
                                    Company</button>
                            <div className="dropdown-content">
                <Link to={'#'}>About Us</Link>
                <Link to={'#'}>Team</Link>
                            </div>
                        </div>
                    </li>

                    <li><Link to={'#'}></Link>
                        <div className="dropdown">
                                <button className="dropbtn">
                                    Account</button>
                            <div className="dropdown-content">
                <Link to={'#'}>Test 1</Link>
                <Link to={'#'}>Test 2</Link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Navbar;