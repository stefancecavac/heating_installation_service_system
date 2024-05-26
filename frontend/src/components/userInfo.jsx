import { UseUserContext } from "../hooks/UseUserContext"


const UserInfo = () => {
    const {user , dispatch} = UseUserContext()

    const handleLogout = async() => {
        const response = await fetch(`http://localhost:4000/api/user/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: "include"
        })

        const json = await response.json()

        if(response.ok){
            localStorage.removeItem('user')
            dispatch({type:'LOGOUT' , payload: json})
        }   
    }
    setTimeout(() => {
        handleLogout()
      }, "86400000");
 
    return(
        <div className="flex gap-2 items-center">
            <p className="text-textcollor dark:text-white">{user.user_email}</p>
            <button className="Button-primary p-2" onClick={() => handleLogout()}>Logout</button>
        </div>
    )
}

export default UserInfo