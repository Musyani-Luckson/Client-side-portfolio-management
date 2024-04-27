function InputForm(props) {
    const { data: { type, id, placeHolder, name, label, icon }, effects, handleChange } = props
    return (
        <div className="form-floating rounded mb-0">
            <input type={type} className="form-control  form-control-sm" id={id} placeholder={placeHolder} name={name} onChange={handleChange} value={effects[id]} />
            <label className='labelText'>
                <i className={icon} />{` ${label}`}
            </label>
        </div>
    )
}
export default InputForm
