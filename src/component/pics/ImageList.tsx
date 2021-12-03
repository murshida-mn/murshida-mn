import React from 'react'
import ImageCard from './ImageCard'

type Iprops = {
    images:Array<{}>
}

const ImageList = ({images} : Iprops) => {
    return (
        <div className="images">
            {images.map((item:any, index) => 
                 (
                     <ImageCard url={item.urls} key={index} />
                    // <img  key={index} src={item.urls.thumb} />
                )
             )}
        </div>
    )
}

export default ImageList
