

const ServiceInfo = () => {


    return (
        <div className=" rounded-lg p-10 flex flex-col items-center bg-Background shadow-lg dark:bg-neutral-700 ">
            <p className="text-3xl text-textcollor dark:text-white  mb-10">Discover Our Services:</p>
            <div className="flex gap-5">
                <div className="flex flex-col rounded-xl  text-white p-5 items-center ">
                    <p className="text-2xl text-Primary">Maintenance</p>
                    <p className="p-2 mt-5 text-center text-md text-textcollor dark:text-white ">At HeatHub, we pride ourselves on not just installing heating systems, but also ensuring they run smoothly year-round. Our maintenance services are meticulously designed to keep your systems in top condition, providing you with peace of mind and uninterrupted comfort.</p>
                </div>

                <div className="flex flex-col rounded-xl  text-white p-5 items-center ">
                    <p className="text-2xl  text-Primary">Installation</p>
                    <p className="p-2 mt-5 text-center text-md text-textcollor dark:text-white ">When it comes to installing heating systems, trust HeatHub to deliver excellence. Our expert team specializes in precise installations, coupled with thorough maintenance services, ensuring your systems perform optimally and reliably for years to come.</p>
                </div>

                <div className="flex flex-col rounded-xl  text-white p-5 items-center  ">
                    <p className="text-2xl  text-Primary">Repairs</p>
                    <p className="p-2 mt-5 text-center text-md text-textcollor dark:text-white ">Facing heating system issues? Let HeatHub handle it. With our prompt repair solutions and expert technicians, we swiftly resolve any problems, ensuring your home or business stays warm and comfortable. Trust HeatHub for efficient repairs and uninterrupted peace of mind.</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceInfo