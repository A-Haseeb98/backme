import "./index.css"
import logo from "../../assets/images/logo.svg"
import img from "../../assets/images/arrow.svg"
import { HashLink } from 'react-router-hash-link';
import { useState } from "react";
import { IoClose } from 'react-icons/io5'
import { HiMenu } from 'react-icons/hi'

export default function Navbar() {
    const [click, setClick] = useState(true);
    const handleClick = () => setClick(!click);
    return (
        <div className="navbar_container_bg">
            <div className="navbar_container">
                <div className="logo_container">
                        <img src={logo} alt="" />
                </div>
                <div className="navbar_list_items">
                    <ul>
                        <li>Home</li>
                        <li>Blog</li>
                        <li>Dashboard</li>
                        <li>Log in</li>
                        <li className="menu_button"><button>Join BackMe</button></li>
                        <li>
                            <div>
                                <span>ENG</span>
                            </div>
                            <div>
                                <img src={img} alt="" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="m_navbar">
                <div className="navbar_logo">
                    <img src={logo} alt="" />
                </div>
                <div>
                    <span onClick={handleClick}><HiMenu /></span>
                </div>
            </div>
            <div className={click ? "mobile-menu  menu-open" : "mobile-menu"}>
                <div className="logo order-md-1">
                    <div className="fix-icon text-dark" onClick={handleClick}>
                        <IoClose />
                    </div>
                </div>
                <div className="navbar-nav">
                    <li className="nav-item">
                        <HashLink className="nav-link" smooth to={''}>Home</HashLink>
                    </li>
                    <li className="nav-item">
                        <HashLink className="nav-link" smooth to={''}>Blog</HashLink>
                    </li>
                    <li className="nav-item">
                        <HashLink className="nav-link" smooth to={''}>Dashboard</HashLink>
                    </li>
                    <li className="nav-item">
                        <HashLink className="nav-link" smooth to={''}>Log in</HashLink>
                    </li>
                    <li className="nav-item">
                        <HashLink className="nav-link" smooth to={''}>Join BackMe</HashLink>
                    </li>
                </div>
            </div>
        </div>
    )
}