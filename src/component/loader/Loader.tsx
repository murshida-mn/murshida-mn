import React from 'react'
import './style.css';

type Iprops = {
    message?:string
}

const Loader = ({message}:Iprops) => {
    return (
        <div className="loader-container">
            <div className='loader'></div>
            {message || 'Loading...'}
        </div>
        
    )
}

export default Loader
