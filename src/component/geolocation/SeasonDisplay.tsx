import React from 'react'
import { BsFillSunFill, BsFillCloudFog2Fill }  from 'react-icons/bs'
import { FaRegSnowflake }  from 'react-icons/fa'
import Loader from '../loader/Loader'


type Iprops = {
    lat: number
}

const getSeason = (lat: number, month: number) => {

    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'
    } else {
        return lat < 0 ? 'summer' : 'winter'
    }

}

const SeasonDisplay = ({ lat }: Iprops) => {

    let season = getSeason(lat, new Date().getMonth());

    const seasonConfig = {
        summer: {
            text: `Let's hit the beach!`,
            Icon1: <BsFillSunFill className='icon1' />,
            Icon2: <BsFillSunFill className='icon2' />

        },

        winter: {
            text: `Burr!! it's chilly!`,
            Icon1: <FaRegSnowflake className='icon1' />,
            Icon2: <FaRegSnowflake className='icon2' />

        }
    }

    //  const text =  (season === 'summer') ? seasonConfig.summer.text : seasonConfig.winter.text;
    //  const Icon1 = () =>  (season === 'summer') ? seasonConfig.summer.icon1 : seasonConfig.winter.icon1;
    //  const Icon2 = () =>  (season === 'summer') ? seasonConfig.summer.icon2 : seasonConfig.winter.icon2;

     const { text, Icon1, Icon2 } = (season === 'summer') ? seasonConfig.summer : seasonConfig.winter;


        return (
            <div className={season}>
                {Icon1}
                <h1>{text}</h1>
                {Icon2}

            </div>
        )
    

}

export default SeasonDisplay
