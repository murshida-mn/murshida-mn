import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form'
import { PostsReducers, UsersReducers } from '../../component/posts/action/reducer'
import { AuthState, StreamReducer } from '../../component/stream/action/reducers';

export default combineReducers({
    posts:PostsReducers,
    users: UsersReducers,
    authState: AuthState,
    form: FormReducer,
    streams: StreamReducer
}) 
    