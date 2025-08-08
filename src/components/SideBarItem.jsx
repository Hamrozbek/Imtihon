import { NavLink } from "react-router-dom"
import { Text } from "./Text"

const SideBarItem = ({to , end=false, icon, title}) => {
    return (
        <div>
            <NavLink to={to} end={end} className={({ isActive }) => isActive ? "active-class flex gap-[15px] items-center" : "flex gap-[15px] items-center"}>
                <div className="p-[7.5px] bg-[#1A1F37] rounded-[12px] text-[#0075FF]">
                    {icon}
                </div>
                <Text title={title} />
            </NavLink>
        </div>
    )
}

export default SideBarItem
