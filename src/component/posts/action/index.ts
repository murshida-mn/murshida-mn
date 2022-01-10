import { jsonPlaceholderPi } from "../../../helper/Axios"
import _ from '../../../helper/lodash'

export const fetchPostAndUsers = () => async (dispatch: any, getState: any) => {
    await dispatch(fetchPost());
    const post = getState().posts;
    const UserIds = _.uniq(_.map(post, 'userId'));
    UserIds.forEach((id: Number) => dispatch(fetchAuthor(id)));
}

export const fetchPost = () => async (dispatch: any) => {
    const response = await jsonPlaceholderPi.get('/posts');

    dispatch({
        type: "FETCH_POSTS",
        payload: response.data
    })
}


export const fetchAuthor = (userId: any) => async (dispatch: any) => {
    const response = await jsonPlaceholderPi.get(`/users/${userId}`);

    dispatch({
        type: "FETCH_USER",
        payload: response.data
    })
}

// LODASH MEMOIZE

// export const fetchAuthor = (userId:any) => (dispatch:any) => {
//     _fetchUser(userId, dispatch )
// }

// const _fetchUser = _.memoize(async (userId, dispatch) => {
//     const response = await jsonPlaceholderPi.get(`/users/${userId}`);

//     dispatch({
//         type: "FETCH_USER",
//         payload: response.data
//     })
// })
