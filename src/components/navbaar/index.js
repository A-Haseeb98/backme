import "./index.css"
import logo from "../../assets/images/logo.svg"
import img from "../../assets/images/arrow.svg"


export default function Navbar() {
    return (
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
                    <li>ENG<span><img src={img} alt="" /></span></li>
                </ul>
            </div>
        </div>
    )
}