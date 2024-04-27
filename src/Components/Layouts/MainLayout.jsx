import MainHeader from "./Main/MainHeader";
import MainAside from "./Main/MainAside";
import MainMain from "./Main/MainMain";
import SubAside from "./Main/SubAside";
import MobileMenu from "./MobileMenu/MobileMenu";
// import ClassDetails from "../Sections/Class/ClassDetails";
// import ClassCreateModal from "../Sections/Class/ClassCreateModal";

function MainLayout() {
    return (
        <div className="MainLayout">
            <MainHeader />
            <MainAside />
            <MainMain />
            <SubAside />
            <MobileMenu />
            {/* <ClassDetails />
            <ClassCreateModal /> */}
        </div>
    )
}

export default MainLayout;


