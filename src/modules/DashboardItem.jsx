import { ProfileIconn, RingIcon, SearchiIcon, SettingisIcon } from "../assets/icons"
import { Input, Text } from "../components"

const DashboardItem = ({ name, text, type, placeholder, item }) => {
    return (
        <div className="pt-[22px] px-[10px] flex justify-between items-center">
            <div>
                <p className="text-[12px] font-normal text-[#A0AEC0]">Pages  <span className="text-[12px] font-normal text-[#FFFFFF]">{text}</span></p>
                <h3 className="text-[14px] text-[#FFFFFF] font-normal pt-[6px]">{item}</h3>
            </div>
            <div className="flex items-center gap-[18px]">
                <div className="flex items-center bg-[#0F1535] py-[9px] w-[200px] rounded-[15px]">
                    <SearchiIcon />
                    <Input name={name} type={type} extraClass={"!p-0 !pl-[3px] !border-none"} placeholder={placeholder} />
                </div>
                <div className="flex items-center gap-[20px]">
                    <div className="flex items-center gap-[4px]">
                        <ProfileIconn />
                        <Text extraClass={"!text-[12px] !text-[#718096]"} title={"Sign In"} />
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
