import axios from "axios";
import { useEffect, useState } from "react";

import Gig from "./Gig.jsx";
import Search from "./Search.jsx"



const API_KEY = "keyLH1D8HDodG0Om3";
const API_URL = `https://api.airtable.com/v0/app6U7NfwIM8GmQ47/Table%201?api_key=${API_KEY}`
let map;


const ShowGig = ({ toggleFetch, setToggleFetch }) => {
  const [gigs, setGigs] = useState([]);
  const [searchGigs, setSearchGigs] = useState([]);
  const [toggleShowMap, setToggleShowMap] = useState(false)

  useEffect(() => {
    setToggleShowMap(false)
  }, [])

  useEffect(() => {
    const getGigData = async () => {
      const resp = await axios.get(API_URL)
      setGigs(resp.data.records)
    }

    getGigData();
  }, [toggleFetch])

  const initMap = () => {
    map = new google.maps.Map(document.getElementsByClassName("map"), {
      center: {
        lat: -34.3967,
        lng: 150.644
      },
      zoom: 8
    });
  }


  return (
    <div>
      <Search 
        gigs={gigs}
        setSearchGigs={setSearchGigs}
        toggleFetch={toggleFetch}
        setToggleFetch={setToggleFetch}
        setToggleShowMap={setToggleShowMap}
      />

      { toggleShowMap ? 
        <div className="map">

        </div>
      : "" }

      {searchGigs.map((gig) => (
        <Gig
          gig={gig}
          key={gig.id}
        />
      ))}
    </div>
  )
}

export default ShowGig;