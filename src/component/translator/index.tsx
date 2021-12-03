import React, { useState } from 'react';
import Field from './field';
import Language from './language';
import './style.css';
import Translator from './translator';

const Index = () => {
    const [text, setText] = useState("");
    const [language, setLanguage] = useState("ar");

    return (
        <div>
            <Field value={text} onChange={(val)=>setText(val)} label={"Enter English"}  />
            <Language language={language} onLanguageChange={setLanguage} />
            <Translator text={text} language={language}  />
        </div>
    )
}

export default Index
