import React, { Component } from 'react'
import './style.css'

type Iprops = {
    handleSUbmit:(term:string)=>void
}

type Istate = {
    term:string
}
export class SearchBar extends Component<Iprops, Istate> {

    constructor(props:Iprops) {
        super(props)
    
        this.state = {
             term:''
        }

        this.formSubmit = this.formSubmit.bind(this) //other way is arrow function
    }
    
    
    formSubmit (e:any) {
        e.preventDefault();
        this.props.handleSUbmit(this.state.term)
    }

    render() {
        return (
            <div className="row">
                <form onSubmit={this.formSubmit}>
                    <label htmlFor="searchbar">Search</label>
                    <input type="text" value={this.state.term} onChange={(e) => this.setState({term:e.target.value})} />

                </form>
            </div>
        )
    }
}

export default SearchBar
