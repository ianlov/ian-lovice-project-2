import axios from "axios"
import { useState } from "react";


const API_KEY = "keyLH1D8HDodG0Om3";
const API_URL = `https://api.airtable.com/v0/app6U7NfwIM8GmQ47/Table%201?api_key=${API_KEY}`

const Gig = ({ gig, toggleFetch, setToggleFetch }) => {
  const [likeCount, setLikeCount] = useState(Math.floor(gig.fields.likes))
  const [pageCount, setPageCount] = useState(0)
  const [clicked, setClicked] = useState(false)

  const addLike = () => {
    if (!clicked) {
      setLikeCount(likeCount + 1)
      setPageCount(1)
      const putLike = async () => {
        const addLikeObj = {
          "records": [
            {
              "id": gig.id,
              "fields": {
                "artist": gig.fields.artist,
                "address": gig.fields.address,
                "date": gig.fields.date,
                "link": gig.fields.link,
                "time": gig.fields.time,
                "city": gig.fields.city,
                "likes": likeCount,
              }
            }
          ]
        }

        await axios.put(API_URL, addLikeObj)
        setToggleFetch(!toggleFetch);

      }
      putLike();
      setClicked(true)

    } else {
      console.log("already clicked")
    }


  }

  return (
    <div className="gig" >
      <h4>{gig.fields.artist} in {gig.fields.city}</h4>
      <h5>{gig.fields.date}</h5>
      <h5>{gig.fields.time}</h5>
      <h5>{gig.fields.address}</h5>
      <h5><a href={gig.fields.link} >Listen</a></h5>
      <button onClick={addLike} >{gig.fields.likes + pageCount} will be there</button>
    </div>
  )
}

export default Gig;