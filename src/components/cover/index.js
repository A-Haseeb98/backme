import "./index.css"
import img from "../../assets/images/cover_image.svg"
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const pulse = keyframes`
from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
`;
const fade_right = keyframes`
from {
    opacity: 0;
    -webkit-transform: translate3d(-50px, 0, 0);
    transform: translate3d(-50px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
`;

export default function Cover() {
    return (
        <div className="cover_container_main">
            <div className="cover_wrapper">
                <h1>Creator’s registration</h1>
                <div className="cover_container">
                    <Reveal triggerOnce={true} keyframes={fade_right}>
                        <div className="cover_content">
                            <p>This is your first step towards an independent income as an online content Creator.</p>
                            <p>As soon as you have filled in the form below and submitted it, we will start the process for you. We do a number of checks, including checking your bank account number and registering your unique BackMe url.</p>
                            <p>Once these things have been arranged you can access your own BackMe environment and you can get started!</p>
                        </div>
                    </Reveal>
                    <div className="cover_image">
                        <Reveal triggerOnce={true} keyframes={pulse}>
                            <img src={img} alt="" />
                        </Reveal>
                    </div>
                </div>
            </div>
        </div>

    )
}