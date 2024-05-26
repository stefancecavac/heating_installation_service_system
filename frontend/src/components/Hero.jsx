import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

const Hero = () => {
const [t] = useTranslation()    


    return (
        <div className="bg-Secundary rounded-lg p-10 flex flex-col items-center w-3/5 m-auto dark:bg-neutral-800 shadow-lg ">
            <p className="text-textcollor dark:text-white text-3xl uppercase text-center">{t('welcome')} <span className="text-Primary">{t('heat_hub')}</span>.</p>
            <p className="text-textcollor  dark:text-white mt-10 mx-20 text-center">{t('description')}</p>
            <div className="flex gap-10 mt-10">
                <Link className="Button-primary">{t('get_started')}!</Link>
                <Link className="Button-primary">{t('see_how')}</Link>
            </div>
        </div>
    )
}

export default Hero