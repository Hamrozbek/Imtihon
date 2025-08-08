function Input({type, placeholder, extraClass,name}) {
    return (
        <input required className={`text-[14px] text-[#A0AEC0] font-normal py-[14px] pl-[20px] rounded-[20px] outline-none border-[2px] ${extraClass} `} name={name} type={type} placeholder={placeholder} />
    )
}

export { Input }