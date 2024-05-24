import { Link } from "react-router-dom"


const NotFoundPage = () => {


    return(
        <div>
            <p>OOPS!!!</p>
            <p>Looks like there is no page here </p>

            <p>Go to <Link to='/'>Home</Link></p>
        </div>
    )
}

export default NotFoundPage