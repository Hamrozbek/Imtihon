function ButtonI({extraClass, children, type}) {
    return (
        <button type={type} className={`py-[14px] cursor-pointer w-full bg-[#0075FF] text-[#FFFFFF] font-bold text-[10px] rounded-[12px] hover:opacity-[30%] duration-300 ${extraClass} `}>{children}</button>
    )
}
export {ButtonI}