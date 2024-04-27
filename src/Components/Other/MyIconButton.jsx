import IconComp from './IconComp'

function MyIconButton(props) {
    const { data: { icon, nameClass } } = props;
    return (
        <button className={nameClass}>
            <IconComp icon={icon} />
        </button>
    )
}

export default MyIconButton
