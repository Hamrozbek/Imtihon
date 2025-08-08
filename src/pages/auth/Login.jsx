import { Link, useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie"
import { ButtonI, HeaderItem, Heading, Input, Text, ToggleSwitch } from "../../components"

const Login = () => {
  const [_cookies, setCookies] = useCookies(["token"])
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    const savedUser = JSON.parse(localStorage.getItem("user"))

    if (
      savedUser &&
      savedUser.email === email &&
      savedUser.password === password
    ) {

      setCookies("token", savedUser, { path: "/" })
      navigate("/dashboard")
    } else {
      alert("Email yoki parol noto‘g‘ri!")
    }
  }

  return (
    <>
      <HeaderItem />
      <div className="flex justify-between">
        <div className='w-[50%] part-left h-[100vh] text-center justify-center flex flex-col'>
          <span className="text-[20px] font-normal text-[#FFFFFF] tracking-[18%]">INSPIRED BY THE FUTURE:</span>
          <Heading tag={"h1"} title={"THE VISION UI DASHBOARD"} />
        </div>
        <div className='w-[50%] pl-[103px] relative pt-[100px] part-right h-[100vh] '>
          <div className="w-[350px]">
            <Heading tag={"h2"} title={"Nice to see you!"} />
            <Text extraClass={"!pt-[6px] !text-[#A0AEC0]"} title={"Enter your email and password to sign in"} />
            <form autoComplete="off" onSubmit={handleLogin} className="pt-[30px]">
              <label className="flex flex-col gap-[4px]">
                <Text title={"Email"} />
                <Input name={"email"} type={"email"} extraClass={"!borderb"} placeholder={"Your email address"} />
              </label>
              <label className="flex flex-col gap-[4px] pt-[24px]">
                <Text title={"Password"} />
                <Input name={"password"} type={"password"} extraClass={"!borderb"} placeholder={"Your password"} />
              </label>
              <div className="flex items-center gap-[10px] pt-[20px] cursor-pointer">
                <ToggleSwitch />
                <Text extraClass={"!text-[12px]"} title={" Remember me "} />
              </div>
              <div className="pt-[30px]">
                <ButtonI type={"submit"}>SIGN IN</ButtonI>
              </div>
            </form>
            <Link to="/registr">
              <div className="flex items-center pt-[18px] justify-center">
                <Text extraClass={"!text-[#A0AEC0]"} title={"Don't have an account?"} />
                <span className="font-bold text-[14px] text-[#FFFFFF]">Sign up</span>
              </div>
            </Link>
          </div>
          <div className="absolute bottom-[30px] pl-0">
            <Text extraClass={"!text-[#A0AEC0]"} title={"@ 2021, Made with ❤️ by Simmmple & Creative Tim for a better web"} />
            <div className="flex pt-[9px] pl-[100px] gap-[36px]">
              <Text extraClass={"!text-[#A0AEC0]"} title={"Marketplace"} />
              <Text extraClass={"!text-[#A0AEC0]"} title={"Blog"} />
              <Text extraClass={"!text-[#A0AEC0]"} title={"License"} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
