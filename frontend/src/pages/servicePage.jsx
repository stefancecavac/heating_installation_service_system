


const ServicePage = () => {


    return (
        <div className="bg-Secundary rounded-lg p-10 flex flex-col items-center ">
            <p className="text-textcollor text-3xl mb-10">Here at HeatHub we offer many services.</p>

            <div className="flex gap-5 w-8/12">
                <div className="flex flex-col rounded-xl  text-white p-5 items-center border-2 border-Primary">
                    <p className="text-4xl text-Primary">Maintenance</p>
                    <p className="p-2 mt-5 text-center text-md text-textcollor">At HeatHub, we pride ourselves on not just installing heating systems, but also ensuring they run smoothly year-round. Our maintenance services are meticulously designed to keep your systems in top condition, providing you with peace of mind and uninterrupted comfort.</p>
                </div>

                <div className="flex flex-col rounded-xl  text-white p-5 items-center border-2 border-Primary">
                    <p className="text-4xl  text-Primary">Installation</p>
                    <p className="p-2 mt-5 text-center text-md text-textcollor">When it comes to installing heating systems, trust HeatHub to deliver excellence. Our expert team specializes in precise installations, coupled with thorough maintenance services, ensuring your systems perform optimally and reliably for years to come.</p>
                </div>

                <div className="flex flex-col rounded-xl  text-white p-5 items-center border-2 border-Primary">
                    <p className="text-4xl  text-Primary">Repairs</p>
                    <p className="p-2 mt-5 text-center text-md text-textcollor">Facing heating system issues? Let HeatHub handle it. With our prompt repair solutions and expert technicians, we swiftly resolve any problems, ensuring your home or business stays warm and comfortable. Trust HeatHub for efficient repairs and uninterrupted peace of mind.</p>
                </div>
            </div>
        </div>
    )
}

export default ServicePage