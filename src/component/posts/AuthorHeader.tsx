import { Component } from 'react'
import { connect } from 'react-redux'
import { AuthorHeaderState, AuthorProps } from '../../_TYPES/type'

class AuthorHeader extends Component<AuthorProps, AuthorHeaderState> {    
    render() {
        const user = this.props.author.find(item=> item.id === this.props.userId)
       
        return (
            <div style={{fontSize:'25px'}}>
                {user?.name}
            </div>
        )
    }
}

const mapstateToProps = (state:any) => {

    return {
        author:  state.users 
    }
}

export default connect(mapstateToProps)(AuthorHeader)
