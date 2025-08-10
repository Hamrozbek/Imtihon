import { Link, useNavigate } from "react-router-dom"
import { AppleIcon, FaceBookIcon, GoogleIcon } from "../../assets/icons"
import { ButtonI, HeaderItem, Heading, Input, Text, ToggleSwitch } from "../../components"

const Registr = () => {
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value

    localStorage.setItem("user", JSON.stringify({ name, email, password }))
    navigate("/login")
  }
  return (
    <>
      <HeaderItem />
      <div className="flex">
        <div className="w-[50%] min-h-screen part-leftt justify-center items-center flex flex-col">
          <span className="text-[20px] font-normal text-[#FFFFFF] tracking-[18%]">INSPIRED BY THE FUTURE:</span>
          <Heading tag={"h1"} title={"THE VISION UI DASHBOARD"} />
        </div>
        <div className="w-[50%] relative pl-[55px] pt-[70px] min-h-screen part-right">
          <div className="w-[452px]">
            <div className="text-center mx-auto w-[333px] pb-[15px]">
              <Heading tag={"h2"} title={"Welcome!"} />
              <Text title={"Use these awesome forms to login or create new account in your project for free."} />
            </div>
            <div className="text-center pt-[20px] borderb rounded-[31px] border-[2px] border-white">
              <Heading extraClass={"!font-bold !text-[18px] !pb-[15px]"} tag={"h3"} title={"Register with"} />
              <div className="flex gap-[10px] justify-center">
                <div className="text-white w-[60px] h-[60px] borderb border-[2px] flex flex-col justify-center items-center rounded-[20px] ">
                  <FaceBookIcon />
                </div>
                <div className="text-white w-[60px] h-[60px] borderb border-[2px] flex flex-col justify-center items-center rounded-[20px]">
                  <AppleIcon />
                </div>
                <div className="text-white w-[60px] h-[60px] borderb border-[2px] flex flex-col justify-center items-center rounded-[20px]">
                  <GoogleIcon />
                </div>
              </div>
              <div className="pl-[44px]">
                <form autoComplete="off" onSubmit={handleRegister} className="pt-[10px] text-start">
                  <label>
                    <Text title={"Name"} />
                    <Input name={"name"} extraClass={"!w-[350px] !borderb"} placeholder={"Your full name"} />
                  </label>
                  <label>
                    <Text extraClass={"!pt-[10px]"} title={"Email"} />
                    <Input name={"email"} extraClass={"!w-[350px] !borderb"} placeholder={"Your email address"} />
                  </label>
                  <label>
                    <Text extraClass={"!pt-[10px]"} title={"Password"} />
                    <Input name={"password"} type={"password"} extraClass={"!w-[350px] !borderb"} placeholder={"Your password"} />
                  </label>

                  <div className="flex items-center gap-[10px] pt-[10px] cursor-pointer">
                    <ToggleSwitch />
                    <Text extraClass={"!text-[12px]"} title={" Remember me "} />
                  </div>
                  <div className="w-[350px] pt-[10px]">
                    <ButtonI type={"submit"}>SIGN UP</ButtonI>
                  </div>
                </form>
              </div>
              <Link to="/login">
                <div className="flex items-center py-[13px]  justify-center">
                  <Text extraClass={"!text-[#A0AEC0]"} title={"Already have an account?"} />
                  <span className="font-bold text-[14px] text-[#FFFFFF]">Sign in</span>
                </div>
              </Link>
            </div>
            <div className="absolute bottom-[10px]">
              <Text extraClass={"!text-[#A0AEC0]"} title={"@ 2021, Made with ❤️ by Simmmple & Creative Tim for a better web"} />
              <div className="flex pt-[5px] pl-[100px] gap-[30px]">
                <Text extraClass={"!text-[#A0AEC0]"} title={"Marketplace"} />
                <Text extraClass={"!text-[#A0AEC0]"} title={"Blog"} />
                <Text extraClass={"!text-[#A0AEC0]"} title={"License"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Registr
