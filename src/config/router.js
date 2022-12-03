import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Admin from '../screens/Admin/admin'
import Login from '../screens/login/login'
import Signup from '../screens/signup/signup'
import NotFound from '../screens/notFound'
import Template from '../screens/template'
import User from '../screens/User/user'
import Transporter from '../screens/Transporter/Transporter'
import TransporterSignup from '../screens/signup/transporterSignup'
import Main from '../screens/Main/main'

function AppRouter() {
  return (
    <>
    <Router>
        <Routes>
            <Route path='' element={<Main/>}/>
            <Route path='template' element={<Template/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='signup' element={<Signup/>}/>
            <Route path='transporterSignup' element={<TransporterSignup/>}/>
            <Route path='admin/*' element={<Admin/>}/>
            <Route path='user/*' element={<User/>}/>
            <Route path='transporter/*' element={<Transporter/>}/>
            <Route path='/*' element={<NotFound/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default AppRouter