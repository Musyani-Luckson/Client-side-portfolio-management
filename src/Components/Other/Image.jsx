
function Image(props) {
    const { data: { nameClass, alt, src, style } } = props;
    return (
        <img className={`${nameClass} img-fluid rounded`} alt={alt} src={src} style={style} />
    )
}
export default Image;