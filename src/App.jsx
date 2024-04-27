import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Navigate
} from "react-router-dom";
import { useAuthContext } from "./Components/Auth/Hooks/useAuthContext"
import AuthLayout from "./Components/Auth/Others/AuthLayout";
import LogInForm from "./Components/Auth/Forms/LogInForms";
import SignUpForm from "./Components/Auth/Forms/SignUpForms";
// 
import MainLayout from "./Components/Layouts/MainLayout";
import Home from "./Components/Sections/Home";
import About from "./Components/Sections/About";
import Skills from "./Components/Sections/Skills";
import Work from "./Components/Sections/Work";
import Contact from "./Components/Sections/Contact";
import Other from "./Components/Sections/Other";

// 
function App() {
  const { user } = useAuthContext();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<AuthLayout />}>
          <Route path="login" element={!user ? <LogInForm /> : <Navigate to="/" />} />
          <Route path="signup" element={!user ? <SignUpForm /> : <Navigate to="/" />} />
        </Route>
        {/*  */}
        <Route element={user ? <MainLayout /> : <Navigate to="login" />}>
          <Route index="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="work" element={<Work />} />
          <Route path="contact" element={<Contact />} />
          <Route path="other" element={<Other />} />
        </Route>
      </>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}
export default App