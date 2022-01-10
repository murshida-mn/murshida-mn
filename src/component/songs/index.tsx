import React from 'react'
import { Provider } from 'react-redux';
import configStore from '../../store/store';

import Songs from './songs';
import SongDetail from './SongDetail';

import './style.css'

const store = configStore();

const Index = () => {
    return (
        <Provider store={store} >
            <div className="item">
                <Songs  />
                <SongDetail selectedSong={'selectedSOng'} />
            </div>
           
        </Provider>
    )
}

export default Index
