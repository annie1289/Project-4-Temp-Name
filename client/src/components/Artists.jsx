import React, { useEffect, useState } from 'react'
import { getAllArtists } from '../services/artists'
import './Artists.css'
import { Link } from 'react-router-dom'
export default function Artists(props) {
  // const [myArtists, setMyArtists] = useState([])

  // useEffect(() => {
  //   const fetchMyArtists = async () => {
  //     const myArtistData = await getAllArtists()
  //     setMyArtists(myArtistData)
  //   }
  //   if (props.currentUser) {
  //     fetchMyArtists()
  //   }
  //   }, [props.currentUser])
  
    return (
      <div className = "artists">
        <h3>Artists</h3>
        <br/>
        {
          props.artists.map(artist => (
            <div className = "detes">
              <h5 key = {artist.id}> {artist.name}</h5>
              <img src={artist.imgURL} alt="artist img" key={artist.imgURL.id} />
              <div className = "buttons">
              <Link to={`/artists/${artist.id}/edit`}><button className = "edit">Edit</button></Link>
              <button onClick={() => props.handleDelete(artist.id)} className = "delete">Delete</button>
              </div>
        
            </div>
          ))
        }
      </div>
    )
  }