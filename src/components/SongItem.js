import React from "react"

function SongItem ({id, title, artist, genre, rating, deleteSong}) {

    return(
        <tr
            key = {id}
        >
            <td> {title || ""} </td>
            <td> {artist || ""} </td>
            <td> {genre || ""}  </td>
            <td> {rating || ""}  </td>
            
            <td> <button className="delete-button" onClick={ () => {deleteSong(id)} }> Delete </button> </td>
        </tr>
    )
}

export default SongItem