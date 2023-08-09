import "./index.css"
import img from "../../assets/images/cover_image.svg"

export default function Cover() {
    return (
        <div className="cover_wrapper">
            <h1>Creator’s registration</h1>
            <div className="cover_container">
                <div className="cover_content">
                    <p>This is your first step towards an independent income as an online content Creator.</p>
                    <p>As soon as you have filled in the form below and submitted it, we will start the process for you. We do a number of checks, including checking your bank account number and registering your unique BackMe url.</p>
                    <p>Once these things have been arranged you can access your own BackMe environment and you can get started!</p>
                </div>
                <div className="cover_image">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    )
}