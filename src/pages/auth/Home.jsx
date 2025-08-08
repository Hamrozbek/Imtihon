import { useEffect } from "react"

const Home = () => {
  useEffect(() => {
    location.pathname = "./login"
  }, [])
}

export default Home
