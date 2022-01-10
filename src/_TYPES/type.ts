export type ReduxAction = {
    type: string,
    payload: Object
}

export type SongProp = {
    songs: Array<song>,
    selectSong:(song:song) => void
}

export type SOngDetailProps = {
    selectedSong: Object
}

export type song = {
    title: string,
    duration: string
}

export type PostProps = {
    posts: Array<{userId:number, id:number,title:string, body:string}>,
    fetchPost?: ()=>void
    fetchPostAndUsers: ()=> void
}

export type AuthorProps = {
    userId:number,
    author: Array<userProps>,
    fetchAuthor?: (userId:number)=>void
}

export type AuthorHeaderState = {
    userList: Array<Number>
}

export type userProps = {
    name:string,
    id:number
}

export type authProps = {
    SignIn: (id:string)=>void,
    SignOut: ()=>void,
    isSignedIn: boolean | null
}

export type authState = {
    isSignedIn: boolean | null
}

export type createProps = {
    form:any
}

export type createState = {
    form:any
}