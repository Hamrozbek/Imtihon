import { Route, Routes } from "react-router-dom"
import NavBar from "../modules/NavBar"
import Dashboard from "../pages/dashboard/Dashboard"
import { Billing, Profile, RTL, Sign_In, Sign_Up, Tables } from "../pages"
// import HomeDashboard from "../pages/dashboard/HomeDashboard"

const DashboardRoutes = () => {
    return (
        <div className="flex dashboard-bg">
            <NavBar />
            <div className="w-[80%] h-[100vh] overflow-y-auto">
                <Routes>
                    {/* <Route path="/" element={<HomeDashboard/>} /> */}
                    <Route path='/' element={<Dashboard />} />
                    <Route path="/tables" element={<Tables />} />
                    <Route path="/billing" element={<Billing />} />
                    <Route path="/rtl" element={<RTL />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/sign_in" element={<Sign_In />} />
                    <Route path="/sign_up" element={<Sign_Up />} />
                </Routes>
            </div>
        </div>
    )
}

export default DashboardRoutes
