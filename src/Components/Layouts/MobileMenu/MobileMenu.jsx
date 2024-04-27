import { useAuthContext } from "../../Auth/Hooks/useAuthContext"
import NavList from '../MainNav/NavList';
import Image from '../../Other/Image'
import UserIdentity from '../../Other/UserIdentity';
import { useLogOut } from "../../Auth/Hooks/useLogOut"
import IconComp from '../../Other/IconComp';

function MobileMenu(props) {
    const { user } = useAuthContext()
    const imageOne = {
        nameClass: `me-2`,
        src: `../images/profile.jpeg`,
        alt: `image for user`,
        style: {
            width: `2.4rem`,
            height: `2.4rem`,
        }
    }
    const userData = {
        username: user.sid
    };
    const { logOut } = useLogOut()
    const handleLogout = async () => {
        logOut()
    };
    return (
        <div className='offcanvas offcanvas-start border-0' id='staticBackdrop' data-bs-backdrop="static" tabIndex="1" aria-labelledby="staticBackdropLabel" data-bs-dismiss="offcanvas">
            {
                user && (
                    <>
                        <div className="offcanvas-header border-0">
                            <div className="offcanvas-title" id="staticBackdropLabel">
                                <Image data={imageOne} />
                            </div>
                            <UserIdentity data={userData} />
                        </div>
                        <div className="offcanvas-body">
                            <NavList data={{}} />
                        </div>
                        <div className="offcanvas-header border-0">
                            <div id="isLogged" >
                                <button className="btn btn-outline-danger btn-sm border  m-1" onClick={handleLogout} >
                                    <IconComp icon={`bi-box-arrow-left m-1`} />
                                    Logout
                                </button>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}
export default MobileMenu