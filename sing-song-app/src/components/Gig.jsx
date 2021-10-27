import axios from "axios"
import { useState } from "react";


const API_KEY = "keyLH1D8HDodG0Om3";
const API_URL_PATCH = `https://api.airtable.com/v0/app6U7NfwIM8GmQ47/Table%201`


const Gig = ({ gig, toggleFetch, setToggleFetch }) => {
  let [likes, setLikes] = useState(gig.fields.likes)

  const addLike = async () => {
    setLikes(likes++)
    console.log(likes)

    const addLike = {
      "records": [
        {
          "fields": {
            "likes": likes
          }
        }
      ]
    }

    console.log(addLike)
    
    
    await axios.patch(`${API_URL_PATCH}/${gig.id}?api_key=${API_KEY}`, addLike)

    setToggleFetch(!toggleFetch);
  }

  return (
    <div className="gig" >
      <h4>{gig.fields.artist} in {gig.fields.city}</h4>
      <h5>{gig.fields.date}</h5>
      <h5>{gig.fields.time}</h5>
      <h5>{gig.fields.address}</h5>
      <h5><a href={gig.fields.link} >Listen</a></h5>
      <button
        onClick={addLike}
      >{gig.fields.likes} will be there</button>
    </div>
  )
}

export default Gig;