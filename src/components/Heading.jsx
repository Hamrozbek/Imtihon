
const Heading = ({ tag, title, extraClass }) => {
    if (tag == "h1") {
        return <h1 className={`${extraClass} text-[36px] font-bold text-t`} >{title}</h1>
    } else if (tag == "h2") {
        return <h2 className={`${extraClass} text-[30px] text-[#FFFFFF] font-bold`} >{title}</h2>
    } else if (tag == "h3") {
        return <h3 className={`${extraClass} text-[14px] text-[#FFFFFF] font-normal text-t`} >{title}</h3>
    }
}

export default Heading
