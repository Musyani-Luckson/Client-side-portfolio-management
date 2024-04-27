import { NavLink, Outlet } from "react-router-dom";
import NavList from "../MainNav/NavList";
import IconComp from "../../Other/IconComp";
import { useLogOut } from "../../Auth/Hooks/useLogOut"

function MainAside() {
  const { logOut } = useLogOut()
  const handleLogout = async () => {
    logOut()
  };
  return (
    <aside className="mainAside layouts border-end">
      <div className='mainAsideTop bg-light'>
        Portfolio
      </div>
      <div className='mainAsideMid'>
        <NavList />
      </div>
      <div className='mainAsideBottom border-top bg-light'>
        <div id="isLoggedx">
          <button className="btn btn-sm" onClick={handleLogout} >
            <IconComp icon={`bi-box-arrow-left`} />
            Logout
          </button>
        </div>
      </div>
    </aside>
  )
}

export default MainAside
