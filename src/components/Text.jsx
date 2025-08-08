function Text({title, extraClass}){
    return(
        <p className={`text-[14px] text-[#FFFFFF] font-normal ${extraClass}`}>{title}</p>
    )
}

export {Text}