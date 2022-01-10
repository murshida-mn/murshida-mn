import React, { useEffect } from 'react'
import Modal from '../modal/Modal'
import History from '../../History';
import { connect } from 'react-redux';
import { deleteStreamAction, fetchStreamAction } from './action'
import { useMatch } from 'react-router-dom';

const StreamDelete = (props:any) => {
    const match = useMatch(`/streams/delete/:id`)

    
    useEffect(() => {
        props.fetchStreamAction(match?.params.id)
    }, [])

    const closeModal = () => History.back()

    const handleDelete = () => {
        props.deleteStreamAction(match?.params.id)
    }

    const stream:any = Object.values(props.stream).find((item:any) => item.id == match?.params.id )
    console.log(stream);

    const title = ' Delete Stream ';
    const content = `Are you sure you want delete stream with title: " ${stream.title} " ?`;
    const actions = (
        <React.Fragment>
            <button  onClick={handleDelete} className='bg-blue-500 py-2 px-12 mr-2 border-2 rounded-full'>Delete</button>
            <button onClick={closeModal} className='bg-blue-100 py-2 px-12 ml-2 border-2 rounded-full'>Cancel</button>
        </React.Fragment>
    );


    return (
            <Modal
                title={title}
                content={content}
                actions={actions}
                closeModal={closeModal}
            />

    )
}

const mapStateToProps = (state:any) => {
    return {
        stream: state.streams
    }
}

export default connect(mapStateToProps, {deleteStreamAction, fetchStreamAction })(StreamDelete)
