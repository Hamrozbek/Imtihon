import { useEffect } from "react"

const HomeDashboard  = () => {
  useEffect(() => {
    location.pathname = "./dashboard"
  }, [])
}

export default HomeDashboard 

