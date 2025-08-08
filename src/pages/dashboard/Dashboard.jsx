import { ChekIcon, DotsIcon, GlobusIcon,KashelokIcon, NewAddIcon, NewOrderIcon, QogozIcon, RingIcon, RtlIcon, ServerpaymentIcon, ShopIcon, SignUp, SmailcIcon } from "../../assets/icons"
import { HtmlIcon } from "../../assets/images"
import { Heading, Text } from "../../components"
import OrdersItem from "../../components/OrdersItem"
import TodayItem from "../../components/TodayItem"
import DashboardItem from "../../modules/DashboardItem"


const Dashboard = () => {
  return (
    <div className="containers">
      <DashboardItem type={"text"} name={"search-input"} placeholder={"Type here..."} text={"Dashboard"} item={"Dashboard"} />
      <div className="px-[10px] pt-[15px]">
        <div className="flex justify-between">
          <TodayItem title={"Today’s Money"} number={"$53,000 "} span={"+55%"} icon={<KashelokIcon />} />
          <TodayItem title={"Today’s Users"} number={"2,300"} span={"+5%"} icon={<GlobusIcon />} />
          <TodayItem title={"New Clients"} number={"+3,052"} span={"-14%"} extraClass={"!text-[#E31A1A]"} icon={<QogozIcon />} />
          <TodayItem title={"Total Sales"} number={"$173,000"} span={"+8%"} icon={<ShopIcon />} />
        </div>
        <div className="flex justify-between pt-[15px]">
          <div className="marking p-[25px]">
            <Text extraClass={"!text-[#A0AEC0]"} title={"Welcome back,"} />
            <Heading tag={"h2"} title={"Mark Johnson"} />
            <Text extraClass={"!pt-[15px] !text-[#A0AEC0] !text-[16px]"} title={"Glad to see you again!"} />
            <Text extraClass={"!text-[#A0AEC0] !text-[16px] !pb-[45px]"} title={"Ask me anything."} />
            <a className="text-[12px] font-normal text-[#FFFFFF]" href="">Tap to record</a>
          </div>
          <div className="rating p-[20px]">
            <Heading extraClass={"!text-[#FFFFFF] !text-[18px] !font-bold"} tag={"h3"} title={"Satisfaction Rate"} />
            <Text extraClass={"!text-[#A0AEC0]"} title={"From all projects"} />
            <div className="flex justify-center items-center mt-[40px] mx-auto w-[48px] h-[48px] rounded-full bg-[#0075FF]" >
              <SmailcIcon />
            </div>
            <div className="flex justify-between text-center bgg rounded-[20px] p-[10px] mt-[5px]">
              <Text extraClass={"!text-[#A0AEC0] !text-[10px]"} title={"0%"} />
              <div>
                <Heading extraClass={"!text-[#FFFFFF] !text-[24px]"} tag={"h2"} title={"95%"} />
                <Text extraClass={"!text-[#A0AEC0] !text-[10px]"} title={"Based on likes"} />
              </div>
              <Text extraClass={"!text-[#A0AEC0] !text-[10px]"} title={"100%"} />
            </div>
          </div>
          <div className="traking p-[20px]">
            <div className="flex items-center justify-between">
              <Heading extraClass={"!text-[18px]"} tag={"h2"} title={"Referral Tracking"} />
              <div className="py-[15px] px-[10px] bg-[#1A1F37] rounded-[12px]">
                <DotsIcon />
              </div>
            </div>
            <div className="pl-[5px] flex items-center justify-between">
              <div>
                <div className="bgg w-[150px] rounded-[20px] p-[15px] mt-[10px]">
                  <Text extraClass={"!text-[#A0AEC0]"} title={"Invited"} />
                  <Heading extraClass={"!text-[18px] !text-[#FFFFFF]"} tag={"h2"} title={"145 people"} />
                </div>
                <div className="bgg w-[150px] rounded-[20px] p-[15px] mt-[10px]">
                  <Text extraClass={"!text-[#A0AEC0]"} title={"Bonus"} />
                  <Heading extraClass={"!text-[18px] !text-[#FFFFFF]"} tag={"h2"} title={"1,465"} />
                </div>
              </div>
              <div className="text-center">
                <Text extraClass={"!text-[#A0AEC0]"} title={"Safety"} />
                <Heading tag={"h1"} title={"9.3"} />
                <Text extraClass={"!text-[#A0AEC0]"} title={"Total Score"} />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[15px] flex justify-between">
          <div className="sales p-[15px]">
            <Heading extraClass={"!text-[18px] !text-[#FFFFFF] !font-bold"} tag={"h3"} title={"Sales overview"} />
            <p className="font-bold text-[14px] text-[#01B574]">(+5) more <span className="text-[14px] font-normal text-[#A0AEC0]">in 2021</span></p>
          </div>
          <div className="active-img p-[15px]">
            <div className="pt-[150px]">
              <Heading extraClass={"!text-[18px]"} tag={"h2"} title={"Active Users"} />
              <p className="font-bold text-[14px] text-[#01B574]">(+23) <span className="text-[14px] font-normal text-[#A0AEC0]">than last week</span></p>
            </div>
            <div className="pt-[20px] flex justify-between">
              <div>
                <div className="flex items-center gap-[10px] pb-1">
                  <div className="w-[26px] p-1 h-[26px] flex justify-center items-center rounded-[6px] bg-[#0075FF] text-white">
                    <KashelokIcon />
                  </div>
                  <Text extraClass={"!text-[#A0AEC0]"} title={"Users"} />
                </div>
                <Heading extraClass={"!text-[17px]"} tag={"h2"} title={"32,984"} />
              </div>
              <div>
                <div className="flex items-center gap-[10px] pb-1">
                  <div className="w-[26px] h-[26px] flex justify-center items-center rounded-[6px] bg-[#0075FF] text-white">
                    <SignUp />
                  </div>
                  <Text extraClass={"!text-[#A0AEC0]"} title={"Clicks"} />
                </div>
                <Heading extraClass={"!text-[17px]"} tag={"h2"} title={"2,42m"} />
              </div>
              <div>
                <div className="flex items-center gap-[10px] pb-1">
                  <div className="w-[26px] h-[26px] p-1 flex justify-center items-center rounded-[6px] bg-[#0075FF] text-white">
                    <ShopIcon />
                  </div>
                  <Text extraClass={"!text-[#A0AEC0]"} title={"Sales"} />
                </div>
                <Heading extraClass={"!text-[17px]"} tag={"h2"} title={"2,400$"} />
              </div>
              <div>
                <div className="flex items-center gap-[10px] pb-1">
                  <div className="w-[26px] p-1 h-[26px] flex justify-center items-center rounded-[6px] bg-[#0075FF] text-white">
                    <RtlIcon />
                  </div>
                  <Text extraClass={"!text-[#A0AEC0]"} title={"Items"} />
                </div>
                <Heading extraClass={"!text-[17px]"} tag={"h2"} title={"320"} />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[10px] flex justify-between">
          <div className="project rounded-[20px] p-[15px]">
          </div>
          <div className="w-[370px] rounded-[20px] bgg p-[15px]">
            <Heading extraClass={"!text-[18px]"} tag={"h2"} title={"Orders overview"} />
            <div className="flex items-center gap-[4px]">
              <ChekIcon />
              <p className="font-bold text-[14px] text-[#A0AEC0]">+30%<span className="text-[14px] font-normal text-[#A0AEC0]"> this month</span></p>
            </div>
            <div className="pt-[15px] space-y-2">
              <OrdersItem icon={<RingIcon/>} title={"$2400, Design changes"} element={"22 DEC 7:20 PM"}/>
              <OrdersItem img={HtmlIcon} title={"New order #4219423"} element={"21 DEC 11:21 PM"}/>
              <OrdersItem icon={<ServerpaymentIcon/>} title={"Server Payments for April"} element={"21 DEC 9:28 PM"}/>
              <OrdersItem icon={<NewAddIcon/>} title={"New card added for order #3210145"} element={"20 DEC 3:52 PM"}/>
              <OrdersItem exteraClass={"!pl-2"} title={"Unlock packages for Development"} element={"9 DEC 11:35 PM"}/>
              <OrdersItem icon={<NewOrderIcon/>} title={"New order #9851258"} element={"18 DEC 4:41 PM"}/>
            </div>
          </div>
        </div>
        <div className="py-[40px] flex items-center justify-between">
          <Text title={"@ 2021, Made with ❤️ by Simmmple & Creative Tim for a better web"} />
          <div className="flex items-center gap-[30px]">
            <Text title={"Marketplace"} />
            <Text title={"Blog"} />
            <Text title={"License"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
