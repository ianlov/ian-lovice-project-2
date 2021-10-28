import axios from "axios";
import { useState } from "react";

const API_KEY = "keyLH1D8HDodG0Om3";
const API_URL = `https://api.airtable.com/v0/app6U7NfwIM8GmQ47/Table%201?api_key=${API_KEY}`

const PostGig = ({ toggleFetch, setToggleFetch}) => {
  const [postArtist, setPostArtist] = useState("");
  const [postCity, setPostCity] = useState("");
  const [postAddress, setPostAddress] = useState("");
  const [postDate, setPostDate] = useState("");
  const [postTime, setPostTime] = useState("");
  const [postLink, setPostLink] = useState("");

  const handlePost = async (ev) => {
    ev.preventDefault();

    const newGig = {
      "records": [
        {
          "fields": {
            "artist": postArtist,
            "address": postAddress,
            "date": postDate,
            "link": postLink,
            "time": postTime,
            "city": postCity,
            "likes": 0,
          }
        }
      ]
    }

    await axios.post(API_URL, newGig)
    setToggleFetch(!toggleFetch)
    alert("You gig has been posted!")
  }
  
  return (
    <div className="post-form" >
      <form onSubmit={handlePost} >
        <label htmlFor="artist" >Artist/Band Name</label>
        <input
          id="artist" 
          type="text" 
          onChange={(ev) => setPostArtist(ev.target.value)} 
        />

        <label htmlFor="city" >City</label>
        <input 
          id="city" 
          type="text" 
          onChange={(ev) => setPostCity(ev.target.value)} 
          placeholder="City, State..."
        />

        <label htmlFor="address" >Street Address</label>
        <input 
          id="address" 
          type="text" 
          onChange={(ev) => setPostAddress(ev.target.value)} 
        />

        <label htmlFor="date" >Date</label>
        <input 
          id="date" 
          type="date" 
          onChange={(ev) => setPostDate(ev.target.value)} 
        />

        <label htmlFor="time" >Time</label>
        <input 
          id="time" 
          type="text" 
          onChange={(ev) => setPostTime(ev.target.value)} 
          placeholder="Start Time to End Time..."
        />

        <label htmlFor="link" >Media Link</label>
        <input 
          id="link" 
          type="text" 
          onChange={(ev) => setPostLink(ev.target.value)}
          placeholder="Spotify, Soundcloud, etc..." 
        />

        <button><span class="material-icons">post_add</span></button>
      </form>
    </div>
  )
}

export default PostGig;