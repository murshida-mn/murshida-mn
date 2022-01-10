import  {Component} from 'react'
import { connect } from 'react-redux'

import { selectSong } from './action/action'
import { SongProp } from '../../_TYPES/type';

class Songs extends Component <SongProp, {}> {
    
    
    render() {
        const songs = this.props.songs;
        
        return (
            <div>
            
                {songs.length && songs.map((item:any, index:number) => (
                        <div className="item" key={index}>
                            
                            <div className="content"  >
                                <p>{item.title}</p>
                            </div>

                            <div className="floated-right">
                                <button className='primary-button' onClick={()=> this.props.selectSong(item)} >Select</button>
                            </div>
                            
                        </div>

                ))}
            </div>
        )
    } 
}

const mapStateToProps = (state:any) => {    
    
    return {
        songs:state.songs
    }
}

export default connect(mapStateToProps, { selectSong })(Songs)
