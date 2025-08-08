import { DashboardIcon, ProfilIcon, SignInIcon, SignUpIcon } from "../assets/icons"
import { ButtonI } from "./Button"
import Heading from "./Heading"
import { Text } from "./Text"

const HeaderItem = () => {
  return (
    <div className="fixed left-0 right-0 mx-auto top-[8px] py-[6px] w-[987px] z-50 rounded-[20px] px-[24px] flex items-center justify-between borderb border-input">
      <Heading tag={"h3"} title={"VISION UI FREE"}/>
      <div className="flex items-center gap-[30px]">
        <div className="flex items-center gap-[4px] text-white">
            <DashboardIcon/>
            <Text extraClass={"!text-[10px] !font-bold"} title={"DASHBOARD"}/>
        </div>
        <div className="flex items-center gap-[4px] text-white">
            <ProfilIcon/>
            <Text extraClass={"!text-[10px] !font-bold"} title={"PROFILE"}/>
        </div>
        <div className="flex items-center gap-[4px] text-white">
            <SignUpIcon/>
            <Text extraClass={"!text-[10px] !font-bold"} title={"SIGN UP"}/>
        </div>
        <div className="flex items-center gap-[4px] text-white">
            <SignInIcon/>
            <Text extraClass={"!text-[10px] !font-bold"} title={"SIGN IN"}/>
        </div>
      </div>
      <ButtonI extraClass={"!w-[150px]"}>Free Download</ButtonI>
    </div>
  )
}

export default HeaderItem
