
import { useNavigate } from "react-router-dom"
import { UseUserContext } from "../hooks/UseUserContext"
import { useEffect } from "react"



const AuthRedirect = ({children}) => {
    const {user} = UseUserContext()
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
          navigate('/user/login');
        }
      }, [user, navigate]);
    
      return  children
    
}

export default AuthRedirect