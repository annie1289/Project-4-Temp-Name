import React, { useEffect, useState } from 'react'
import { getAllSongs } from '../services/songs'
import './Artists.css'
import { Link } from 'react-router-dom'
export default function MySongs(props) {
  
  // const [mySongs, setMySongs] = useState([])

  // useEffect(() => {
  //   const fetchMySongs = async () => {
  //     const mySongData = await getAllSongs()
  //     setMySongs(mySongData)
  //   }
  //   if (props.currentUser) {
  //     fetchMySongs()
  //   }
  //   }, [props.currentUser])
  
    return (
      <div className = "songs">
        <h3>Songs</h3>
        <br/>
        {
          props.songs.map(song => (
            <div className = "songDetails">
              <h5 key = {song.id}> {song.name}</h5>
              <img src={song.imgURL} alt="song img" key={song.imgURL.id} />
              <div className = "buttons">
              <Link to={`/songs/${song.id}/edit`}><button className = "edit">Edit</button></Link>
              <button onClick={() => props.handleDelete(song.id)} className = "delete">Delete</button>
              </div>
        
            </div>
          ))
        }
      </div>
    )
  }