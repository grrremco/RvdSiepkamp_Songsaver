import React, {Component} from "react"
import SongForm from "./SongForm"
import SongList from "./SongList"

class Container extends Component {
    constructor() {
        super()
        this.state = {
            songs: [
                {id:1, title: "Spider", artist: "System of a Down", genre:"Alternative", rating:"5"},
                {id:2, title: "Sicko Mode", artist: "Travis Scott", genre:"Hip-Hop/Rap", rating:"4"},
                {id:3, title: "This is the new shit", artist: "Marilyn Manson", genre:"Alternative", rating:"3"},
                {id:4, title: "Release", artist: "Pearl Jam", genre:"Alternative", rating:"5"},
                {id:5, title: "Everything in its right place", artist: "Radiohead", genre:"Alternative", rating:"5"},
                {id:6, title: "My own summer (Shove it)", artist: "Deftones", genre:"Alternative", rating:"4"},
                {id:7, title: "Change (in the House of Flies)", artist: "Deftones", genre:"Alternative", rating:"4"},
                {id:8, title: "Clair de lune", artist: "Claud Debussy", genre:"Classical", rating:"4"},
                {id:9, title: "Between angels and insects", artist: "Papa Roach", genre:"Alternative", rating:"3"},
                {id:10, title: "Bite yo style", artist: "Angerfist", genre:"Hardcore", rating:"4"},
                {id:11, title: "Idontwannabeyouanymore", artist: "Bille Eilish", genre:"Pop", rating:"5"},
                {id:12, title: "Fat faded fuck face", artist: "Die Antwoord", genre:"Other", rating:"4"},
            ]
        }
        this.addSong = this.addSong.bind(this)
        this.emptyList = this.emptyList.bind(this)
        this.deleteSong = this.deleteSong.bind(this)
        this.sortByAZ = this.sortByAZ.bind(this)
        this.sortByZA = this.sortByZA.bind(this)
    }

    addSong = (song) => {
        const newSong = {
            id: this.state.songs.length +1,
            title: song.title,
            artist: song.artist,
            genre: song.genre,
            rating: song.rating
        }
        this.setState ({songs: this.state.songs.concat(newSong)})
    }

    emptyList(){
        this.setState({
            songs: []
        })
    }

    deleteSong (id) {
        const updatedList = this.state.songs.filter (song => {
            return id !== Number(song.id)
        })
        this.setState({ songs: updatedList })
    }
////////////////// sorting songs by key /////////////////////////////

    sortByAZ = (key) => {
        const sortedSongs = [...this.state.songs]
        sortedSongs.sort( (a,b) => (a[key].toLowerCase() < b[key].toLowerCase()) ? -1 : 1)
        this.setState( {songs:sortedSongs} )
    }

    sortByZA = (key) => {
        let sortedSongs = [...this.state.songs]
        sortedSongs.sort( (a,b) => (a[key].toLowerCase() < b[key].toLowerCase()) ? 1 : -1)
        this.setState( {songs:sortedSongs} )
    }
    
///////////////////////////////////////////////////////////////////////
    render() {
        return (
            <div className = "song-container">

                <SongForm 
                    addSong={this.addSong}
                />

                <SongList 
                    songs= {this.state.songs}
                    addSong={this.addSong}
                    emptyList = {this.emptyList}
                    deleteSong = {this.deleteSong}
                    sortByAZ = {this.sortByAZ}
                    sortByZA = {this.sortByZA}
                />
                
            </div>
        )
    }
}

export default Container;