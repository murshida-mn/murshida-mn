import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useMatch } from 'react-router-dom'
import { fetchStreamAction } from './action'

const StreamShow = (props: any) => {
    const match = useMatch('/streams/:id')


    useEffect(() => {
        props.fetchStreamAction(match?.params.id)
    }, [])

    if (!props.stream) {
        return <div>Loading...</div>
    }

    const stream: any = Object.values(props.stream).find((item: any) => item.id == match?.params.id)
    const { title, description } = stream;

    return (
        <>
            <h1 className='text-4xl my-5 font-bold'>{title}</h1>
            <h5 className='font-bold text-lg'>{description}</h5>
        </>
    )
}

const mapStateToProps = (state: any) => {
    return {
        stream: state.streams
    }
}

export default connect(mapStateToProps, { fetchStreamAction })(StreamShow)
