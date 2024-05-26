

const Statistic = () => {


    return (
        <div className="bg-Secundary rounded-lg p-10 flex flex-col items-center shadow-lg dark:bg-neutral-700">
            <p className="text-3xl text-textcollor dark:text-white  mb-10">Some of our Statistics:</p>
            <div className="grid grid-cols-3 gap-10 w-3/4 ">
                <div className="flex flex-col rounded-xl bg-gradient-to-r from-Primary to-red-500 text-white p-5 items-center">
                    <p className="text-xl">Installations</p>
                    <p className="p-2 mt-5 text-center text-3xl text-white ">5000</p>
                </div>

                <div className="flex flex-col rounded-xl bg-gradient-to-r from-Primary to-red-500 text-white p-5 items-center">
                    <p className="text-xl">Response Time</p>
                    <p className="p-2 mt-5 text-center text-3xl text-white ">30 min</p>
                </div>

                <div className="flex flex-col rounded-xl bg-gradient-to-r from-Primary to-red-500 text-white p-5 items-center">
                    <p className="text-xl">Satisfaction Rate</p>
                    <p className="p-2 mt-5 text-center text-3xl text-white ">100%</p>
                </div>

                <div className="flex flex-col rounded-xl bg-gradient-to-r from-Primary to-red-500 text-white p-5 items-center">
                    <p className="text-xl">Average Time to Complete Installations</p>
                    <p className="p-2 mt-5 text-center text-3xl text-white ">5 Working days</p>
                </div>

                <div className="flex flex-col rounded-xl bg-gradient-to-r from-Primary to-red-500 text-white p-5 items-center">
                    <p className="text-xl">Installations</p>
                    <p className="p-2 mt-5 text-center text-3xl text-white ">5000</p>
                </div>

                <div className="flex flex-col rounded-xl bg-gradient-to-r from-Primary to-red-500 text-white p-5 items-center">
                    <p className="text-xl">Installations</p>
                    <p className="p-2 mt-5 text-center text-3xl text-white ">5000</p>
                </div>
                
            </div>
        </div>
    )
}

export default Statistic