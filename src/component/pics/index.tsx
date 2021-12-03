import React from 'react'
import axios from 'axios'
import './style.css'
import SearchBar from './SearchBar'
import Axios from '../../helper/Axios'
import ImageList from './ImageList'

type Iprops = {
}

type Istate = {
    term:string,
    images: Array<{}>
}

class index extends React.Component<Iprops, Istate> {

    constructor(props:any) {
        super(props)
    
        this.state = {
             term:'',
             images: []
        }

        this.setState = this.setState.bind(this)
    }
    

    onFormSubmit = async (term:string) => {
        this.setState({term:term})
        const response = await Axios.get(`/search/photos`, { params:{ query:term }});

        this.setState({images: response.data.results})
        console.log(response);
        
    }

    render() {

        const { term ,images} = this.state;

        return (
            <div className="container">
                <SearchBar  handleSUbmit={this.onFormSubmit} />
                Found {images.length} items.
                <ImageList images={images} />

            </div>
        )
    }
    
}

export default  index;
