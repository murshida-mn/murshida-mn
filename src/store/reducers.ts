import { combineReducers } from 'redux';
import { SongReducers, selectedSongs } from '../component/songs/action/reducers';

export default combineReducers({
    songs:  SongReducers,
    selectedSongs: selectedSongs,
}) 
    

