import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

import "./Styles/main.css"
import "./Styles/MainLayout.css"
import "./Styles/Layouts/MainAside.css"
import "./Styles/Layouts/MainHeader.css"
import "./Styles/Layouts/MobileNav.css"
import "./Styles/Layouts/MainMain.css"
// import "./Styles/Sessions/EachSession.css"
// import "./Styles/Sessions/SessionBody.css"
import "./Styles/AuthStyles/Auth.css"
import "./Styles/AuthStyles/Auth.css"
// import "./Styles/Class/ClassDetails.css"



import { AuthContextProvider } from "./Components/Auth/Contexts/AuthContext"
// import { ClassContextProvider } from './Components/Contexts/ClassContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      {/* <ClassContextProvider> */}
      <App />
      {/* </ClassContextProvider> */}
    </AuthContextProvider>
  </React.StrictMode>,
)
