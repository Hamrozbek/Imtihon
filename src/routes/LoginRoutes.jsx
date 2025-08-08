import { Route, Routes } from 'react-router-dom'
import { Home, Login, Registr } from '../pages'

const LoginRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registr' element={<Registr/>} />
    </Routes>
  )
}

export default LoginRoutes
