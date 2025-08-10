import { useEffect, useState } from "react"
import DashboardItem from "../../modules/DashboardItem"
import { useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie"

const Profile = () => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  const [, , removeCookie] = useCookies(["token"])

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const handleSignOut = () => {
    if (window.confirm("Chiqishni xohlaysizmi?")) {
      removeCookie("token")
      navigate("/login", { replace: true })
    }
  }

  return (
    <div>
      <DashboardItem type={"text"} name={"search-input"} placeholder={"Type here..."} text={"Profile"} item={"Profile"} />

      {user ? (
        <div className="p-6 ">
          <div className="rounded-[20px] text-center mx-auto shadow-2xl p-4 max-w-[500px]">
            <h2 className="text-white font-bold text-[18px]">{user.name}</h2>
            <p className="text-white font-normal text-[16px]">Email: {user.email}</p>
            <p className="text-white font-normal text-[14px]">Password: {user.password}</p>
            <button onClick={handleSignOut} className="cursor-pointer text-white text-[14px] bg-red-500 py-[1px] px-[10px] rounded-[10px] mt-4">Log Out</button>
          </div>
        </div>
      ) : (
        <p className="text-center text-white text-[16px]">Foydalanuvchini malumoti topimladi</p>
      )}
    </div>
  )
}

export default Profile
