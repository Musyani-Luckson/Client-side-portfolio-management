import { NavLink } from "react-router-dom"
import Icon from "../../Other/IconComp"

function Header(props) {
    const { user } = props;
    return (
        <header className="header p-1">
            <div className="p-1">
                Portfolio
            </div>
            <div className="p-1">
                {
                    !user && (
                        <>
                            <NavLink className="btn btn-outline-dark btn-sm border  m-1" to="signup">
                                <Icon icon={`bi-box-arrow-in-left`} />
                                Sign Up
                            </NavLink>
                            <NavLink className="btn btn-outline-dark btn-sm border  m-1" to="login">
                                <Icon icon={`bi-box-arrow-left`} />
                                Log In
                            </NavLink>
                        </>
                    )
                }
            </div>
        </header>
    )
}
export default Header
