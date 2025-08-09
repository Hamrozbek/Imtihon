import { useNavigate } from "react-router-dom"
import { ProfileIconn, RingIcon, SearchiIcon, SettingisIcon } from "../assets/icons"
import { useCookies } from "react-cookie";

const DashboardItem = ({ name, text, type, placeholder, item }) => {
    const navigate = useNavigate();
    const [, , removeCookie] = useCookies(["token"]);

    const handleSignOut = () => {
        if (window.confirm("Chiqishni xohlaysizmi?")) {
            removeCookie("token"); 
            navigate("/login", { replace: true });
        }
    };

    return (
        <div className="pt-[22px] px-[10px] flex justify-between items-center">
            <div>
                <p className="text-[12px] font-normal text-[#A0AEC0]">Pages  <span className="text-[12px] font-normal text-[#FFFFFF]">/ {text}</span></p>
                <h3 className="text-[14px] text-[#FFFFFF] font-normal pt-[6px]">{item}</h3>
            </div>
            <div className="flex items-center gap-[18px]">
                <div className="flex items-center bg-[#0F1535] py-[9px] w-[200px] rounded-[15px]">
                    <SearchiIcon />
                    <input type={type} name={name} placeholder={placeholder} className="text-[#718096] text-[14px] outline-none" />
                </div>
                <div className="flex items-center gap-[20px]">
                    <div className="flex items-center gap-[4px]">
                        <ProfileIconn />
                        <button onClick={handleSignOut} className="text-[14px] text-[#718096] cursor-pointer">Sign Out</button>
                    </div>
                    <div className="flex items-center gap-[15px]">
                        <SettingisIcon />
                        <div className="text-[#718096]">
                            <RingIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardItem
