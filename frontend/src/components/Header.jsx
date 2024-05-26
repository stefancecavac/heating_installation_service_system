import { Link } from "react-router-dom"
import { UseUserContext } from "../hooks/UseUserContext"
import UserInfo from "./userInfo"
import ThemeSwitch from "./ThemeSwitch"


const Header = () => {
    const {user } = UseUserContext()

    return (
        <div className="flex justify-between items-center shadow-lg  p-2 px-10 dark:bg-neutral-800 text-textcollor dark:text-white ">
            <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={0.5} stroke="white" className="size-20 fill-Primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                </svg>

                <Link to='/' className="text-3xl ">HeatHub</Link>

            </div>

            <div className="flex gap-10 items-center">
                <Link to='/' className="link-primary">Home</Link>
                <Link to='/services' className="link-primary">Services</Link>
                <Link className="link-primary">About</Link>
            </div>
            <ThemeSwitch></ThemeSwitch>
            <div>
                {user? (
                    <UserInfo></UserInfo>
                ) : (
                <Link to='/user/register' className="Button-primary ">Signup</Link>
                )}
            </div>

        </div>
    )
}

export default Header