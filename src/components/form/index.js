import "./index.css"
import img from "../../assets/images/next_arr.svg"

export default function Contact() {
    return (
        <div className="form_container">
            <div className="form_wrapper">
                <h1>Account info</h1>
                <h3>Personal information</h3>
                <p>Your personal data will not be published.</p>
                <div className="input_container">
                    <label htmlFor="">Full name</label>
                    <input type="text" name="Full name" id="" placeholder="Full name" />
                </div>
                <div className="input_container">
                    <label htmlFor="">Email</label>
                    <input type="email" name="Email" id="" placeholder="Email" />
                </div>
                <div className="input_container">
                    <label htmlFor="">Phone number</label>
                    <input type="text" name="Phone number" id="" placeholder="Phone number" />
                </div>
                <div className="input_container">
                    <label htmlFor="">Country</label>
                    <input type="text" name="Country" id="" placeholder="Country" />
                </div>
                <div className="contact_button">
                    <button>Next<span><img src={img} alt="" /></span></button>
                </div>
            </div>
        </div>
    )
}