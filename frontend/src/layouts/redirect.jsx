
import { useNavigate } from "react-router-dom"
import { UseUserContext } from "../hooks/UseUserContext"
import { useEffect } from "react"



const Redirect = ({children}) => {
    const {user} = UseUserContext()
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
          navigate('/');
        }
      }, [user, navigate]);
    
      return  children
    
}

export default Redirect