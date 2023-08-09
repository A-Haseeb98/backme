import "./style.css"
import img from "../../assets/images/footer_image.svg"
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
const fade_ = keyframes`
from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;
export default function Footer() {
    return (
        <div className="footer_bg">
            <Reveal triggerOnce={true} keyframes={fade_}>

                <div className="footer_container">
                    <div className="footer_wrapper">
                        <div className="footer_left">
                            <h1>BackMe is member of:</h1>
                            <span><img src={img} alt="" /></span>
                        </div>
                        <div className="footer_middle">
                            <h1>Contacts</h1>
                            <ul>
                                <li>Contact us</li>
                                <li>Cancel subscription</li>
                                <li>Report abuse</li>
                            </ul>
                        </div>
                        <div className="footer_right">
                            <h1>Company</h1>
                            <ul>
                                <li>About</li>
                                <li>How does it work?</li>
                                <li>Your privacy matters</li>
                                <li>Terms and conditions</li>
                            </ul>
                        </div>
                    </div>
                    <p>© 2023 All rights reserved - Nine Nine B.V. The Hague, The Netherlands - Powered by Oxjno</p>
                </div>
            </Reveal>
        </div>
    )
}