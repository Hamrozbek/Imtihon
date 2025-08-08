import { BillingIcon, HomeIcon, Profil, RtlIcon, SignIn, SignUp, SoroqIcon, TablesIcon } from "../assets/icons"
import {Heading, Text } from "../components"
import SideBarItem from "../components/SideBarItem"

const NavBar = () => {
  return (
    <div className='w-[20%] min-h-screen p-[10px]'>
      <div className="mx-auto p-[17px] rounded-[20px] borderp">
        <Heading tag={"h3"} extraClass={"!text-t !text-center"} title={"VISION UI FREE"} />
        <p className="border-b-[1px] pt-[30px] border-white"></p>
        <div className="pt-[20px] space-y-[12px]">
          <SideBarItem to={"/"} end icon={<HomeIcon/>} title={"Dashboard"}/>
          <SideBarItem to={"/tables"} icon={<TablesIcon/>} title={"Tables"}/>
          <SideBarItem to={"/billing"} icon={<BillingIcon/>} title={"Billing"}/>
          <SideBarItem to={"/rtl"} icon={<RtlIcon/>} title={"RTL"}/>
          <SideBarItem to={"/profile"} icon={<Profil/>} title={"Profile"}/>
          <SideBarItem to={"/sign_in"} icon={<SignIn/>} title={"Sign In"}/>
          <SideBarItem to={"/sign_up"} icon={<SignUp/>} title={"Sign Up"}/>
        </div>
        <div className="bg-need p-[16px]">
          <div className="w-[35px] h-[35px] rounded-[12px] justify-center items-center flex bg-white">
            <SoroqIcon />
          </div>
          <h2 className="text-[14px] pt-[20px] font-bold text-[#FFFFFF]">Need help?</h2>
          <Text extraClass={"!text-[12px]"} title={"Please check our docs"} />
          <button className="bgg text-white font-bold text-[10px] w-full mt-[10px] py-[12px] rounded-[12px]">DOCUMENTATION</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar
