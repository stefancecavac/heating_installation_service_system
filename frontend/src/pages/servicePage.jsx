import {Link} from 'react-router-dom'


const ServicePage = () => {


    return (
        <div className="bg-Secundary dark:bg-neutral-900  p-10 flex flex-col items-center flex-1 ">
            <p className="text-textcollor text-3xl mb-10 dark:text-white">Here at HeatHub we offer many services.</p>

            <div className="flex gap-10 justify-center w-8/12">

                <Link className="flex w-full flex-col rounded-xl text-center bg-white dark:bg-neutral-800  text-white p-5 items-center border-2 border-Primary hover:translate-y-2 hover:scale-125 transition-all ease-in-out ">
                    <div className="flex gap-5 mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-Primary">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                        </svg>
                        <p className="text-2xl text-Primary">Maintenance</p>
                    </div>
                    <p className="text-textcollor dark:text-white">Ensure the longevity and efficiency of your heating system with our expert maintenance service, tailored to keep your home or business comfortable year-round.</p>
                </Link>

                <Link to='/services/installation' className="flex w-full  flex-col rounded-xl dark:bg-neutral-800  text-center bg-white  text-white p-5 items-center border-2 border-Primary hover:translate-y-2 hover:scale-125 transition-all ease-in-out ">
                    <div className="flex gap-5 mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-Primary">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                        </svg>
                        <p className="text-2xl text-Primary">Installation</p>
                    </div>
                    <p className="text-textcollor dark:text-white">Experience seamless heating system installations tailored to your needs with our expert team.</p>
                </Link>

                <Link className="flex flex-col rounded-xl w-full  text-center bg-white dark:bg-neutral-800   text-white p-5 items-center border-2 border-Primary hover:translate-y-2 hover:scale-125 transition-all ease-in-out ">
                    <div className="flex gap-5 mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-Primary">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                        </svg>
                        <p className="text-2xl text-Primary">Repairs</p>
                    </div>
                    <p className="text-textcollor dark:text-white">From minor fixes to major overhauls, trust our skilled technicians to swiftly diagnose and repair any heating system issues, restoring warmth and comfort to your space.</p>
                </Link>
            </div>
        </div>
    )
}

export default ServicePage