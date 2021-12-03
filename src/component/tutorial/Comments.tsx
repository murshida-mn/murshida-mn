import React, { Component } from 'react'

interface Iprops {
    id: number,
    body: string,
    email: string,
    name: string
}

export class Comments extends Component<Iprops, {}> {

    render() {
        return (
            <div key={this.props.id} style={{background:'rgba(122,168,178)', margin:'20px', padding:'1vw', width:'24vw', display:'flex', flexDirection:'column'}}>
                <h3 className="comment-block">{this.props.name}</h3>
                <p  className="comment-block" style={{flex:'1', margin:'5px 0'}}>{this.props.body}</p>
                <span className="comment-block" style={{textAlign:'center', color:'rgba(0,12,25)', fontWeight:'500'}}>{this.props.email}</span>
            </div>
        )
    }
}

export default Comments
