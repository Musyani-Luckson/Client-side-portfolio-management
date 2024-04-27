import { Outlet } from "react-router-dom"
import { useAuthContext } from "../Hooks/useAuthContext"
import Header from "./Header";
// import ClassCreateModal from "./Others/ClassCreateModal";


function AuthLayout() {
    // const { user } = useAuthContext();
    const user = null
    return (
        <div className="MainLayout">
            <Header user={user} />
            <Outlet />
        </div>
    )
}

export default AuthLayout
