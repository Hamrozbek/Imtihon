import { Text } from './Text'

const TodayItem = ({title, number, icon, span, extraClass}) => {
    return (
        <div className="flex items-center rounded-[20px] w-[240px] justify-between p-[12px] bgbb">
            <div>
                <Text extraClass={"!text-[#A0AEC0]"} title={title} />
                <p className="font-bold text-[18px] text-[#FFFFFF]"> {number} <span className={`font-bold text-[14px] text-[#01B574] ${extraClass}`}>{span}</span> </p>
            </div>
            <div className="text-white rounded-[12px] w-[45px] h-[45px] justify-center items-center flex bg-[#0075FF]">
                {icon}
            </div>
        </div>
    )
}

export default TodayItem
