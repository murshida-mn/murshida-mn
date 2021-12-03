import React, { Component } from 'react'
import Loader from '../loader/Loader'
import SeasonDisplay from './SeasonDisplay'
import './style.css'

type Iprops = {

}

type Istate = {
    lat: number,
    error:string,
    loading: boolean
}

export class Index extends Component<Iprops, Istate> {

    constructor(props:Iprops) {
        super(props)
    
        this.state = {
             lat : 1,
             error: '',
             loading:true
        }
    }

    componentDidMount() {
        window.setTimeout(()=> {
            window.navigator.geolocation.getCurrentPosition(
                position=> this.setState({lat:position.coords.latitude, loading:false}), 
                error=>this.setState({error:error.message, loading:false}));
        }, 2000)

    }

    componentDidUpdate(nextprops:any, nexstate:any) {
        // console.log(nexstate);
    }
    
    render() {
     
        const {lat, error, loading} = this.state;
       
        if(loading) 
            return <Loader message="Please accept location request!!!" /> ;
        else if(lat) 
            return <SeasonDisplay lat={lat} /> ;
        else 
            return <div>{error}</div>

      
    }
}

export default Index
