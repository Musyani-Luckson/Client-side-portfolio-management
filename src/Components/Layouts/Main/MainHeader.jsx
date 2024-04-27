import { useAuthContext } from "../../Auth/Hooks/useAuthContext"
import IconComp from "../../Other/IconComp"
import UserIdentity from "../../Other/UserIdentity"
import MyIconButton from "../../Other/MyIconButton"
import Image from '../../Other/Image';

function MainHeader() {
  const { user } = useAuthContext()
  const userData = {
    username: user.sid
  };
  const imageOne = {
    nameClass: `shadow me-2`,
    src: `../images/profile.jpeg`,
    alt: `image for user`,
    style: {
      width: `2.4rem`,
      height: `2.4rem`,
    }
  }
  return (
    <header className="headerEntryx mainHeader layouts border-bottomx">
      {user && (
        <>
          <div className='headerEntryLeft p-1'>
            <UserIdentity data={userData} />
          </div>
          <div className='headerEntryRight p-1'>
            <div className="headerEntryRightLeft">
              <div className="headerEntryForSmall">
                <Image data={imageOne} />
                <UserIdentity data={userData} />
              </div>
              <div className="headerEntryForLarge">
                <IconComp icon={`bi-bell-fill`} />
              </div>
            </div>
            <div className="headerEntryRight p-1">
              <div className="headerEntryForSmall me-3">
                <IconComp icon={`bi-bell-fill`} />
              </div>
              <div className="headerEntryForSmall me-3">
                <button className="btn btn-outline-dark border" type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#staticBackdrop"
                  controls="staticBackdrop">
                  <IconComp icon={`bi-list`} />
                </button>
              </div>
              <div className="headerEntryForLarge">
                <Image data={imageOne} />
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}

export default MainHeader
