import { NavLink } from "react-router-dom"

function BreadCrump(props) {
    const { data } = props
    return (
        <div className="">
            {
                data.map(crump => (
                    <NavLink className="m-1 p-1" key={crump.to} to={crump.to}>
                        {crump.name}
                    </NavLink>
                ))
            }
        </div>
    )
}

export default BreadCrump
