import {
     SIGN_IN, 
     SIGN_OUT, 
     AUTH_CHANGE,
     CREATE_STREAM,
     FETCH_STREAMS,
     FETCH_STREAM,
     DELETE_STREAM,
     EDIT_STREAM,
        } from './type';

import axios from '../api/axios';
import History from '../../../History';

export const AUthChange = () => {
    return {
        type: AUTH_CHANGE,
        payload: null
    }
}

export const SignIn = (id:string) => {
    return {
        type: SIGN_IN,
        payload: id
    }
}

export const SignOut = () => {
    return {
        type: SIGN_OUT,
        payload: null
    }
}

export const StreamCreateAction = (formValues:any) => async (dispatch: any, getState:any) => {
    const { userId } = getState().authState;

    const result = await axios.post('/streams', {...formValues, userId})

    dispatch({type: CREATE_STREAM , payload: result.data})
    History.push('/')
}

export const FetchStreamsAction = () => async (dispatch: any) => {

    const result = await axios.get('/streams')

    dispatch({type: FETCH_STREAMS , payload: result.data})

}

export const fetchStreamAction = (id:Number) => async (dispatch:any) => {
    const result = await axios.get(`/streams/${id}`)
    dispatch({type: FETCH_STREAM, payload: result.data})
}

export const editStreamAction = (id:Number, formVal:any) => async (dispatch:any) => {
    const result = await axios.patch(`/streams/${id}`, formVal )
    dispatch({type: EDIT_STREAM, payload: result.data})
    History.push('/')
}

export const deleteStreamAction = (id:Number) => async (dispatch:any) =>  {
     await axios.delete(`/streams/${id}`)
    dispatch({ type: DELETE_STREAM, payload: id})
    History.back()
}