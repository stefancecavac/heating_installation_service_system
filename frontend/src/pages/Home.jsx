import Hero from "../components/Hero"
import ServiceInfo from "../components/ServiceInfo"
import Statistic from "../components/Statistic"



const Home = () => {


    return(
        <div className="flex-1 flex flex-col p-10 gap-10 dark:bg-neutral-900">
            <Hero></Hero>

            <ServiceInfo></ServiceInfo>
            <Statistic></Statistic>
        </div>
    )
}

export default Home