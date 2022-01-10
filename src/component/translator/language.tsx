import React from 'react'

const LANGUAGES = [
    { label: 'Hindi', value: 'hi' },
    { label: 'Arabic', value: 'ar' },
    { label: 'Kannada', value: 'kan' }
]

interface Iprops {
    language:string,
    onLanguageChange:(val:string)=>void
}

const Language = ({language, onLanguageChange} : Iprops) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const onSelect = (language:string) => {
        setIsOpen(false);
        onLanguageChange(language)
    }

    const languageConfig = LANGUAGES.find(item => item.value === language)

    if(!languageConfig) {
        throw new Error(`Unknown language code '${language}'`);
    }

    return (
        <div>
            <div className="dropdown-btn">
                <button onClick={() => setIsOpen(!isOpen)}>
                    <span>{languageConfig.label}</span>
                    <span className="icon is-small">
                        <i className="fas fa-angle-down" />
                    </span>                
                </button>
            </div>

            <div className={`dropdown-list ${isOpen && 'is-active' }`}>
                <div className="dropdown-item">
                    {LANGUAGES.map(({label, value}) => {
                        return (
                            <span className="list-item" onClick={()=> onSelect(value)} >{label}</span>
                        )
                    })}
                </div>
                
            </div>
        </div>
    )
}

export default Language
