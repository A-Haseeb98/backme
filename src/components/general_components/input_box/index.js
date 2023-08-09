export default function InputBox({id,type,label}) {
    return (
        <div className="input_container">
            <label htmlFor={id}>{label}</label>
            <input type={type} name={label} id={id} placeholder={label} />
        </div>
    )
}