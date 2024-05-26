import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"


const LanguageSwitch = () => {
    const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'en')
    const { i18n } = useTranslation()

    useEffect(() => {
        i18n.changeLanguage(language);
        localStorage.setItem('language', language)
    }, [language, i18n])

    const handleLanguageChange = () => {
        setLanguage(prevLanguage => prevLanguage === 'en' ? 'sr' : 'en')
    }

    return (

        <div>
            <button className="rounded-full p-2 bg-gray-200 hover:bg-gray-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 transition-all ease-in-out" onClick={handleLanguageChange}>
                {language === 'en' ?
                    <div className="flex gap-2">
                        <p>Change to Sr</p>
                    </div>


                    :
                    <div className="flex gap-2">
                        
                        <p>Change to En</p>
                    </div>
                }
            </button>
        </div>
    )
}

export default LanguageSwitch