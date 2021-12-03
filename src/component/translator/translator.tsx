import React from 'react'

interface Iprops {
    text:string, 
    language:string
}

const Translator = ({text, language} : Iprops) => {
    const [translated, setTranslated] = React.useState("")

    const doTranslation = async (signal:any) => {
        try {
            let options =  {
                method:"post",
                body: JSON.stringify({q:text, target:language}),
                signal:signal
            }

            let res = await fetch("https://translation.googleapis.com/language/translate/v2?key=AIzaSyCf0Xy0OnhxlduyEt3K8zP-sOuu-l_u6uA", options)
            res = await res.json();
            // setTranslated(res.data.translations[0].translatedText)
        } catch(error) {
            // throw new Error(error)
        }
       
    }

    React.useEffect(() => {
        if(!text) return
        let controller = new AbortController()
        doTranslation(controller.signal)

        return () => {
          try{
            controller.abort();
          } catch(err) {}
        }

    }, [text, language])

    return (
        <div>
            <label>Output:</label>
            <h1>{translated}</h1>
        </div>
    )
}

export default Translator
