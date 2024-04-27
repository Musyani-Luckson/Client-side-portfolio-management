import NavItem from "./NavItem"

function NavList() {
    return (
        <div className="navList rounded">
            <NavItem data={{
                name: `Home`,
                to: `/`,
                icon: `bi-house-fill`,
                active: `active`
            }} />
            <NavItem data={{
                name: `About`,
                to: `about`,
                icon: `bi-file-person-fill`,
            }} />
            <NavItem data={{
                name: `Skills`,
                to: `skills`,
                icon: `bi-clipboard-data`,
            }} />
            <NavItem data={{
                name: `Work`,
                to: `work`,
                icon: `bi-server`,
            }} />
            <NavItem data={{
                name: `Contact`,
                to: `contact`,
                icon: `bi-person-lines-fill`,
            }} />
            <NavItem data={{
                name: `Other`,
                to: `other`,
                icon: `bi-collection-fill`,
            }} />
        </div>
    )
}

export default NavList
