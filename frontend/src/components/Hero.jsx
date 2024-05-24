import { Link } from "react-router-dom"


const Hero = () => {


    return (
        <div className="bg-Secundary rounded-lg p-10 flex flex-col items-center ">
            <p className="text-textcollor text-5xl uppercase text-center"> Welcome to <span className="text-Primary">HeatHub</span>.</p>
            <p className="text-textcollor  text-lg mt-10 mx-20 text-center">At HeatHub, we specialize in providing top-quality heating installation solutions to ensure your comfort during the coldest months. With years of experience and a team of skilled professionals, we are dedicated to delivering efficient and reliable heating systems tailored to meet your needs.</p>
            <div className="flex gap-10 mt-10">
                <Link className="Button-primary">Get started!</Link>
                <Link className="Button-primary">See how?</Link>
            </div>
        </div>
    )
}

export default Hero