import React from "react"
import { Routes, BrowserRouter, Route } from "react-router-dom"

import Login from "./pages/login"
import Register from "./pages/register"
import ForgotPassword from "./pages/forgotPassword"

function Router() {
   return(
       <BrowserRouter>
           <Routes>
               <Route element = { <Login/> }  path="/" exact />
               <Route element = { <Register/> }  path="register" exact />
               <Route element = { <ForgotPassword/> }  path="forgotPassword" exact />
           </Routes>
       </BrowserRouter>
   )
}

export default Router