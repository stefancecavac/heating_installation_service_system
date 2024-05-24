

const Statistic = () => {


    return (
        <div className="bg-Secundary rounded-lg p-10 flex flex-col items-center ">
            <p className="text-5xl text-textcollor mb-10">Some of our Statistics:</p>
            <div className="grid grid-cols-3 gap-10">
                <div className="flex flex-col rounded-xl bg-gradient-to-r from-Primary to-red-500 text-white p-5 items-center">
                    <p className="text-2xl">Installations</p>
                    <p className="p-2 mt-5 text-center text-4xl text-white text-md">5000</p>
                </div>

                <div className="flex flex-col rounded-xl bg-gradient-to-r from-Primary to-red-500 text-white p-5 items-center">
                    <p className="text-2xl">Response Time</p>
                    <p className="p-2 mt-5 text-center text-4xl text-white text-md">30 min</p>
                </div>

                <div className="flex flex-col rounded-xl bg-gradient-to-r from-Primary to-red-500 text-white p-5 items-center">
                    <p className="text-2xl">Satisfaction Rate</p>
                    <p className="p-2 mt-5 text-center text-4xl text-white text-md">100%</p>
                </div>

                <div className="flex flex-col rounded-xl bg-gradient-to-r from-Primary to-red-500 text-white p-5 items-center">
                    <p className="text-xl">Average Time to Complete Installations</p>
                    <p className="p-2 mt-5 text-center text-4xl text-white text-md">5 Working days</p>
                </div>

                <div className="flex flex-col rounded-xl bg-gradient-to-r from-Primary to-red-500 text-white p-5 items-center">
                    <p className="text-2xl">Installations</p>
                    <p className="p-2 mt-5 text-center text-4xl text-white text-md">5000</p>
                </div>

                <div className="flex flex-col rounded-xl bg-gradient-to-r from-Primary to-red-500 text-white p-5 items-center">
                    <p className="text-2xl">Installations</p>
                    <p className="p-2 mt-5 text-center text-4xl text-white text-md">5000</p>
                </div>
                
            </div>
        </div>
    )
}

export default Statistic