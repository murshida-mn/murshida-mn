import React, { Component } from 'react'

type Iprops = {
    seed:number
}

type Istate = {
    counter:number,
    seed:number,
    error?:any,
    data?:{title:string, userId:number, id:number, completed:boolean},
    ThrownError?:boolean
}

const ErrorComponent = (props:any) => <div>{props.ignore}</div>;

export class Counter extends Component<Iprops, Istate> {
    constructor(props:Iprops) {
        super(props)
    
        this.state = {
            counter:0,
            seed:0,
            ThrownError:false,
            data:{title:'', id:0, userId:0, completed:false}
        }
    }

    increment = () => {
        this.setState({counter:this.state.counter +1 })
    }

    decrement = () => {
        this.setState({counter:this.state.counter -1 })
    }

    async componentDidMount() {
        const data = await this.makegetRequest();
        console.log(data);
        this.setState({data:data})
            

        console.log('Component Did Mount');
        console.log('--------------');
    }

    async makegetRequest() {
       return await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => json );
    }

    // componentWillMount() {
    //     console.log('Component will Mount');
    //     console.log('--------------');
    // }
    
    shouldComponentUpdate(nextProps:any, nextState:any) {
        console.log('Should component update')
        return true
    }

    static getDerivedStateFromProps(props:Iprops, state:Istate) {
        if(props.seed && props.seed !== state.seed)
        {
            return {
                counter: props.seed,
                seed: props.seed
            }
        }

        return null;
    }

    render() {

        console.log(this.state);
        
        if(this.state.ThrownError )
        {
            return (
                <div>Encountered an error</div>
            )
        } 
            
        return (
                <div >
                    {/* <ErrorComponent /> */}
                    <button onClick={this.increment} >Incerement</button> &emsp;
                    <button onClick={this.decrement} >Decrement</button> <br/>
                    Counter:{this.state.counter}
                    
                </div>
            )
    }

    componentDidUpdate(prevProps:any, prevState:any) {
        console.log('Component Did update');
        console.log('--------------');
    }

    componentWillUnmount()
    {
        console.log('Component will unmount');
        console.log('--------------');
    }

    componentDidCatch(error:any, info:any) {
        console.log('Compoent did catch')
        this.setState({ThrownError:true, error:error})
    }
}

export default Counter
