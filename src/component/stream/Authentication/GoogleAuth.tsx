import { Component } from 'react'
import { FaGoogle } from 'react-icons/fa';
import Loader from '../../loader/Loader';
import { connect } from 'react-redux'
import { SignIn, SignOut } from '../action/index'
import { authProps, authState } from '../../../_TYPES/type';

class GoogleAuth extends Component<authProps, authState> {
    auth: any

    componentDidMount() {
        (window as any).gapi.load('client:auth2', () => {
            (window as any).gapi.client.init({
                clientId: '679285521695-bfspssnu538625kcje8otbg8gedv0scv.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = (window as any).gapi.auth2.getAuthInstance()
                this.authChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.authChange);
            })
        })
    }

    authChange = (isSIgnedIn: any) => {
        if (isSIgnedIn)
            this.props.SignIn(this.auth.currentUser.get().getId())
        else
            this.props.SignOut();
    }

    onSignInBtnClick = () => {
        this.auth.signIn();
    }

    onSIgnoutBtnClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return <Loader />
        } else if (this.props.isSignedIn) {
            return <button onClick={() => this.onSIgnoutBtnClick()} className='btn-danger'> Sign Out</button>
        } else {
            return <button onClick={() => this.onSignInBtnClick()} className='btn-primary'> Sign In with Google </button>
        }
    }

    render() {

        return (
            <div >
                {this.renderAuthButton()}
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {    
    return {
        isSignedIn: state.authState.isSignedIn
    }
}

export default connect(mapStateToProps, { SignIn, SignOut })(GoogleAuth)
