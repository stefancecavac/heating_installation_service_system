import {useRef, useState } from "react"
import { UseUserContext } from "../hooks/UseUserContext"
import ThemeSwitch from '../components/ThemeSwitch'
import LanguageSwitch from "./languageSwitch"

const UserInfo = () => {
    const { user, dispatch } = UseUserContext()
    const [menu, setMenu] = useState(false)
    const refMenu = useRef()

    const handleLogout = async () => {
        const response = await fetch(`http://localhost:4000/api/user/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: "include"
        })

        const json = await response.json()

        if (response.ok) {
            localStorage.removeItem('user')
            dispatch({ type: 'LOGOUT', payload: json })
        }
    }
    setTimeout(() => {
        handleLogout()
    }, "86400000");

    const closeOpenMenus = (e)=>{
        if(menu && !refMenu.current?.contains(e.target)){
            setMenu(false)
        }
    }

    document.addEventListener('mousedown' , closeOpenMenus)

    console.log(menu)
    return (
        <div className="flex gap-2 items-center relative">
            <p className="text-textcollor dark:text-white">{user.user_email}</p>
            <svg onClick={() => setMenu(prevMenu => !prevMenu)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 hover:cursor-pointer hover:scale-110">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>



            <div ref={refMenu} className={` z-50 absolute border-2 border-gray-300 dark:bg-neutral-800 dark:text-white flex flex-col right-0 top-10 w-64 p-5 items-center rounded-lg shadow-md gap-3 bg-white ${menu ? ' animateModal' : 'animateModalClose  hidden'} `} >
                <p>User Profile</p>
                <ThemeSwitch></ThemeSwitch>
                <LanguageSwitch></LanguageSwitch>
                <button className="Button-primary w-4/6 p-2">Logout</button>
            </div>

        </div>
    )
}

export default UserInfo