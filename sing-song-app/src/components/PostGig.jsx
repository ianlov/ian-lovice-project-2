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
          }
        }
      ]
    }

    await axios.post(API_URL, newGig)
    setToggleFetch(!toggleFetch)
    alert("You gig has been posted!")
  }
  
  return (
    <form onSubmit={handlePost} >
      <label htmlFor="artist" >Artist/Band</label>
      <input id="artist" type="text" onChange={(ev) => setPostArtist(ev.target.value)} />
      <br/>
      <label htmlFor="city" >City</label>
      <input id="city" type="text" onChange={(ev) => setPostCity(ev.target.value)} />
      <br/>
      <label htmlFor="address" >Address</label>
      <input id="address" type="text" onChange={(ev) => setPostAddress(ev.target.value)} />
      <br/>
      <label htmlFor="date" >Date</label>
      <input id="date" type="date" onChange={(ev) => setPostDate(ev.target.value)} />
      <br/>
      <label htmlFor="time" >Time</label>
      <input id="time" type="text" onChange={(ev) => setPostTime(ev.target.value)} />
      <br/>
      <label htmlFor="link" >Spotify/Soundcloud Link</label>
      <input id="link" type="text" onChange={(ev) => setPostLink(ev.target.value)} />
      <br/>
      <input type="submit" />
    </form>
  )
}

export default PostGig;