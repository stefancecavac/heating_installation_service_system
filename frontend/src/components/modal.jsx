import {useNavigate} from 'react-router-dom'

const Modal = ({open}) => {
    const navigate = useNavigate()
    return(
        <div onClick={() =>navigate('/') } className={`absolute top-0 bottom-0 left-0 right-0 bg-gray-500/50
         ${open ? 'flex justify-center items-center animate-modal-background'
         : 'hidden'}`}>
           <div  className={`bg-white rounded-lg w-2/5 h-2/5 p-5 justify-between items-center flex flex-col ${open ? 'animate-modal':''} `}>
                <p className="text-Primary text-lg">Your form has been succesfuly submited !</p>
                <p className="text-textcollor text-lg">Wait for response</p>

                <button className='Button-primary'> yaaay</button>
           </div>
        </div>
    )
}

export default Modal