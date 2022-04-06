import React from "react"
import SongItem from "./SongItem"

function SongList ({songs, addSong, emptyList, deleteSong, sortByAZ, sortByZA}) {

    const ListSongs = songs ? songs.map (song => (
        <SongItem 
            key = {song.id}
            id = {song.id}
            title = {song.title}
            artist = {song.artist}
            genre = {song.genre}
            rating = {song.rating} 
            deleteSong = {deleteSong}
        />
    )) : " "

    return(
        <div className="songList">

            <table className= "table">
                <thead className="table-head"> 
                    
                    <th className="table-head-row" > Title
                        <button type="submit" className="button" onClick= { () => {sortByAZ("title")} }> Sort Title A-Z </button> 
                        <button type="submit" className="button" onClick= { () => {sortByZA("title")} }> Sort Title Z-A </button></th>
                    
                    <th className="table-head-row"> Artist 
                        <button type="submit" className="button" onClick= { () => {sortByAZ("artist")} }> Sort Artist A-Z </button> 
                        <button type="submit" className="button" onClick= { () => {sortByZA("artist")} }> Sort Artist Z-A </button></th>
                    
                    <th className="table-head-row"> Genre  
                        <button type="submit" className="button" onClick= { () => {sortByAZ("genre")} }> Sort Genre A-Z </button> 
                        <button type="submit" className="button" onClick= { () => {sortByZA("genre")} }> Sort Genre Z-A </button></th>
                    
                    <th className="table-head-row"> Rating  
                        <button type="submit" className="button" onClick= { () => {sortByAZ("rating")} }> Sort Rating 1-5 </button> 
                        <button type="submit" className="button" onClick= { () => {sortByZA("rating")} }> Sort Rating 5-1 </button></th> 

                    <th></th>
                
                </thead>
                
                <tbody className="table-body">
                    {ListSongs}
                </tbody>
            </table>
            
            <button onClick={emptyList} className="button"> Empty List </button>
        </div>
    )
}

export default SongList