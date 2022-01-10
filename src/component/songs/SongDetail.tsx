import { connect } from 'react-redux'

const SongDetail = ({song}:any) => {
    console.log(song);
    
    if(!song)
    return <div className='content'> Select SOng </div>;

    return (
        <div className='content'>
            <h3>Details for</h3>
            <p>Title: {song.title}</p>
            <p>Duration: {song.duration}</p>
            
        </div>
    )
}

const mapStateToProps = (state: any) => {
    
    return {
        song: state.selectedSongs
    }
}

export default connect(mapStateToProps)(SongDetail)