import { song } from "../../../_TYPES/type"

export const selectSong = (song:song) => {    
    console.log('ABC');
    
    return {
        type: "SONG_SELECTED",
        payload: song
    }
}