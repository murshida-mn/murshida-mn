import { ReduxAction } from "../../../_TYPES/type"

export const SongReducers = () => {
    return [
        { title:'All my way', duration:'4.05'},
        { title:'Memories', duration:'2.05'},
        { title:'Broken Angel', duration:'4.45'},
        { title:'When i touches a sky', duration:'3.10'},
    ]
}

export const selectedSongs = (selectedSong=null, action:ReduxAction) => {
    
    if(action.type === "SONG_SELECTED")
    {
        return action.payload
    }

    return selectedSong;
}