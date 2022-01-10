import { useEffect } from 'react'
import { FaCamera } from 'react-icons/fa'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import History from '../../History'
import { FetchStreamsAction } from './action'

const StreamList = (props: any) => {

    useEffect(() => {
        props.FetchStreamsAction()
    }, []);

    const renderButtons = (stream: any) => {
        if (props.currentUserId === stream.userId) {
            return (
                <div>
                    <button onClick={() => handleStreamButton(`/streams/edit/${stream.id}`)} className='btn-primary'>Edit</button> &emsp;
                    <button onClick={() => handleStreamButton(`/streams/delete/${stream.id}`)} className='btn-danger'>Delete</button>
                </div>
            )
        }
    }

    const handleStreamButton = (path: any) => {
        History.push(path)
    }

    const renderList = () => {
        return props.streams.map((stream: any) => {
            return (
                <div className='stream' key={stream.id}>
                    <FaCamera />
                    <div className='content'>
                        <Link to={`${stream.id}`} className='text-blue-400 text-lg font-semibold'>
                            {stream.title}
                        </Link>
                        <div className="description">
                            {stream.description}
                        </div>
                    </div>
                    {renderButtons(stream)}

                </div>
            )
        })
    }

    const renderCreateStream = () => {
        if (props.isSignedIn) {
            return (
                <div className="right-align">
                    <Link className='btn btn-primary' to={'/streams/new'}>Create Stream</Link>
                </div>
            )
        }
    }

    return (
        <div>
            <h1 className="underline">Streams</h1>
            {renderCreateStream()}
            <div className="item">
                {renderList()}
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.authState.userId,
        isSignedIn: state.authState.isSignedIn

    }
}

export default connect(mapStateToProps, { FetchStreamsAction })(StreamList)
