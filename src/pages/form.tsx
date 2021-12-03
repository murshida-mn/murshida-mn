import React, { Component } from 'react'

interface IState {
    firstName: string,
    lastName: string,
}

type Iprops = {
    status:boolean,
    firstName: string,
    lastName:string
}


export class Form extends Component <Iprops, IState> {

    constructor(props:Iprops) 
    {
        super(props);

        this.state = {
            firstName: this.props.firstName,
            lastName: this.props.lastName
        }


        console.log('constructor stage');

    }

    componentWillMount() {
        this.setState({ firstName:'Murshi', lastName: 'CodeCraft' });
        console.log('component will mount stage');  
    }

    componentDidMount() {
        this.setState({ firstName:'Murshi', lastName: 'CodeCraft' });
        console.log('component did mount stage');

    }

    // componentWillReceiveProps(nextprops:any){
    //     console.log('component will receive props stage', nextprops);
    // }

    shouldComponentUpdate(nextprops:any, nextstate:any){
        console.log('component will receive props stage', nextprops);


        // if(this.props.status)
        // {
        //     return false;
        // }
        return true;
    }

    componentWillUpdate(nextprops:any, nextstate:any){
        console.log('component will update  stage', nextprops, nextstate );

    }

    componentDidUpdate(prevprops:any, prevState:any) {
        console.log('component did update stage', prevprops, prevState);
    }

    componentWillUnmount() {
        console.log('component will unmount stage');
    }

    updateState(e:any) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>First Name</label>
                        <input type="text" value={this.state.firstName} onChange={()=>{}} placeholder="First Name" />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text"  value={this.state.lastName}  onChange={()=>{}} placeholder="Last Name" />
                    </div>

                    <button onClick={(e)=>this.updateState(e)}>Update Props</button>
                </form>
            </div>
        )
    }
}

export default Form;
