import { useTranslation } from "react-i18next"


const ServiceInfo = () => {
const[t] = useTranslation()

    return (
        <div className=" rounded-lg p-10 flex flex-col items-center bg-Background shadow-lg dark:bg-neutral-800 ">
            <p className="text-3xl text-textcollor dark:text-white  mb-10">{t('discover_services')}</p>
            <div className="flex gap-5">
                <div className="flex flex-col rounded-xl  text-white p-5 items-center ">
                    <p className="text-2xl text-Primary">{t('maintenance')}</p>
                    <p className="p-2 mt-5 text-center text-md text-textcollor dark:text-white "> {t('maintenance_description')}</p>
                </div>

                <div className="flex flex-col rounded-xl  text-white p-5 items-center ">
                    <p className="text-2xl  text-Primary">{t('installation')}</p>
                    <p className="p-2 mt-5 text-center text-md text-textcollor dark:text-white ">{t('installation_description')}</p>
                </div>

                <div className="flex flex-col rounded-xl  text-white p-5 items-center  ">
                    <p className="text-2xl  text-Primary">{t('repairs')}</p>
                    <p className="p-2 mt-5 text-center text-md text-textcollor dark:text-white ">{t('repairs_description')}</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceInfo