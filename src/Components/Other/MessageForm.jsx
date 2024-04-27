function MessageForm(props) {
    const { data: { id, className, message, target }, msg } = props
    let showMsg = '';
    if (msg !== undefined) {
        showMsg = msg[target];
    }
    return (
        <div className={`${className} text-danger`} id={id}>
            {showMsg}
        </div>
    )
}
export default MessageForm
