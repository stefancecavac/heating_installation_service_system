import { useTranslation } from "react-i18next"


const Statistic = () => {
const[t] = useTranslation()

    return (
        <div className="bg-Secundary rounded-lg p-10 flex flex-col items-center shadow-lg dark:bg-neutral-800">
            <p className="text-3xl text-textcollor dark:text-white  mb-10">{t('statistics_title')}</p>
            <div className="grid grid-cols-3 gap-10 w-3/4 ">
                <div className="flex flex-col rounded-xl bg-gradient-to-r from-Primary to-red-500 text-white p-5 items-center">
                    <p className="text-xl">{t('installations')}</p>
                    <p className="p-2 mt-5 text-center text-3xl text-white ">5000</p>
                </div>

                <div className="flex flex-col rounded-xl bg-gradient-to-r from-Primary to-red-500 text-white p-5 items-center">
                    <p className="text-xl">{t('response_time')}</p>
                    <p className="p-2 mt-5 text-center text-3xl text-white ">30 min</p>
                </div>

                <div className="flex flex-col rounded-xl bg-gradient-to-r from-Primary to-red-500 text-white p-5 items-center">
                    <p className="text-xl">{t('satisfaction_rate')}</p>
                    <p className="p-2 mt-5 text-center text-3xl text-white ">100%</p>
                </div>

                <div className="flex flex-col rounded-xl bg-gradient-to-r from-Primary to-red-500 text-white p-5 items-center">
                    <p className="text-xl">{t('average_completion_time')}</p>
                    <p className="p-2 mt-5 text-center text-3xl text-white ">{t('value_average_completion_time')}</p>
                </div>

                <div className="flex flex-col rounded-xl bg-gradient-to-r from-Primary to-red-500 text-white p-5 items-center">
                    <p className="text-xl">{t('statistics_title')}</p>
                    <p className="p-2 mt-5 text-center text-3xl text-white ">{t('statistics_title')}</p>
                </div>

                <div className="flex flex-col rounded-xl bg-gradient-to-r from-Primary to-red-500 text-white p-5 items-center">
                    <p className="text-xl">{t('statistics_title')}</p>
                    <p className="p-2 mt-5 text-center text-3xl text-white ">{t('statistics_title')}</p>
                </div>
                
            </div>
        </div>
    )
}

export default Statistic