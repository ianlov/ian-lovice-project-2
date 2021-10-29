import axios from "axios"
import { useEffect, useState } from "react";


const API_KEY = "keyLH1D8HDodG0Om3";
const API_URL = `https://api.airtable.com/v0/app6U7NfwIM8GmQ47/Table%201?api_key=${API_KEY}`

const Gig = ({ gig }) => {
  const [likeCount, setLikeCount] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [likeObj, setLikeObj] = useState({
    records: [
      {
        id: gig.id,
        fields: {
          artist: gig.fields.artist,
          address: gig.fields.address,
          date: gig.fields.date,
          link: gig.fields.link,
          time: gig.fields.time,
          city: gig.fields.city,
          likes: gig.fields.likes,
        }
      }
    ]
  });

  // const addLike = () => {
  //   if (!clicked || clicked) {
  //     setLikeCount(likeCount + 1)
  //     const addLikeObj = {
  //       "records": [
  //         {
  //           "id": gig.id,
  //           "fields": {
  //             "artist": gig.fields.artist,
  //             "address": gig.fields.address,
  //             "date": gig.fields.date,
  //             "link": gig.fields.link,
  //             "time": gig.fields.time,
  //             "city": gig.fields.city,
  //             "likes": likeCount,
  //           }
  //         }
  //       ]
  //     }


  //     const putLike = async () => {
  //       if (!clicked) {
  //         await axios.put(API_URL, addLikeObj)
  //       }
  //     }
  //     putLike();
  //     setClicked(true)

  //   } else {
  //     console.log("already clicked")
  //   }


  // }

  const addLike = () => {
    if (!clicked) {
      setLikeCount(gig.fields.likes + 1);

      setLikeObj({
        records: [
          {
            id: gig.id,
            fields: {
              artist: gig.fields.artist,
              address: gig.fields.address,
              date: gig.fields.date,
              link: gig.fields.link,
              time: gig.fields.time,
              city: gig.fields.city,
              likes: likeCount
            }
          }
        ]
      })

      setClicked(true)
    } else {
      console.log("already clicked")
    }
  }

  useEffect(() => {
    const putData = async () => {
      await axios.put(API_URL, likeObj)
    }
    putData();
  }, [setLikeCount, likeObj])
  

  return (
    <div className="gig" >
      <h4>{gig.fields.artist} in {gig.fields.city}</h4>
      <h5>{gig.fields.date}</h5>
      <h5>{gig.fields.time}</h5>
      <h5>{gig.fields.address}</h5>
      <h5><a href={gig.fields.link} >Listen</a></h5>
      <button onClick={addLike} >{clicked ? `${gig.fields.likes} will be there` : `${gig.fields.likes} will be there`}</button>
    </div>
  )
}

export default Gig;