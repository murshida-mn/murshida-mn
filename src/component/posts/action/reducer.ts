
export const PostsReducers = (state=[], action:any) => {

    switch(action.type) {
        case "FETCH_POSTS":
            return action.payload
        case "ADD_POST": 
            return [...state, action.payload]
        default: 
            return state

    }

}



export const UsersReducers = (state=[], action:any) => {

    switch(action.type) {
        case "FETCH_USER":
            return [...state, action.payload]
        default: 
            return state

    }

}