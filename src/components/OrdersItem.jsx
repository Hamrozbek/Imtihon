
const OrdersItem = ({icon, element, title, exteraClass, img}) => {
    return (
        <div className={`flex gap-[19px] ${exteraClass}`}> 
            <div className={`text-[#0075FF] pt-[5px] ${exteraClass}`}>
                {icon}
                <img src={img}/>
            </div>
            <div>
                <h2 className="text-[#FFFFFF] text-[14px] !font-normal">{title}</h2>
                <p className="text-[#A0AEC0] text-[12px]">{element}</p>
            </div>
        </div>
    )
}

export default OrdersItem
