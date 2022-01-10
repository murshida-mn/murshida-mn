import _ from 'lodash';
import {
    SIGN_IN,
    SIGN_OUT,
    AUTH_CHANGE,
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM
} from './type'

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
}

export const AuthState = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case AUTH_CHANGE:
            return { ...state, isSignedIn: action.payload };
        case SIGN_IN:
            return { ...state, isSignedIn: true, userId: action.payload };
        case SIGN_OUT:
            return { ...state, isSignedIn: false, userId: action.payload };
        default:
            return state
    }
}

export const StreamReducer = (state = {}, action: any) => {
    switch (action.type) {
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case FETCH_STREAMS:
            return { ...state, ..._.mapKeys(action.payload, 'id')}
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_STREAM:
             return _.omit(state, action.payload )


        default:
            return state
    }
}