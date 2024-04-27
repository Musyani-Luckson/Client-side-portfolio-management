import { NavLink } from "react-router-dom";
import IconComp from "../../Other/IconComp";
import Textcomp from "../../Other/Textcomp";

function NavItem(props) {
    const { data: { name, to, icon } } = props;
    return (
        <NavLink to={to} className="NavLink m-1 rounded">
            <div className="NavLinkIcon">
                <IconComp icon={icon} />
            </div>
            <div className="NavLinkText">
                <Textcomp text={name} />
            </div>
        </NavLink>
    )
}

export default NavItem
