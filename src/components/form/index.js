import "./index.css"
import img from "../../assets/images/next_arr.svg"
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import InputBox from "../general_components/input_box";

const fade_ = keyframes`
from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export default function Contact() {
    return (
        <div className="form_container">
            <Reveal triggerOnce={true} keyframes={fade_}>
                <div className="form_wrapper">
                    <h1>Account info</h1>
                    <h3>Personal information</h3>
                    <p>Your personal data will not be published.</p>
                    <InputBox  id="fullname" label="Full name" type="text" />
                    <InputBox id="email" label="Email" type="email" />
                    <InputBox id="phone" label="Phone number" type="text" />
                    <InputBox id="country" label="Country" type="text" />
                    <div className="contact_button">
                        <button>Next<span><img src={img} alt="" /></span></button>
                    </div>
                </div>
            </Reveal>
        </div>
    )
}