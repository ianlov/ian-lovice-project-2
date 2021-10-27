import axios from "axios";
import { useEffect, useState } from "react";
// import { Wrapper, Status } from "@googlemaps/react-wrapper";

import Gig from "./Gig.jsx";
import Search from "./Search.jsx";
// import Map from "./Map.jsx";



const API_KEY = "keyLH1D8HDodG0Om3";
const API_URL = `https://api.airtable.com/v0/app6U7NfwIM8GmQ47/Table%201?api_key=${API_KEY}`





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

  // const render = (status: Status) => {
  //   return <h1>{Status}</h1>
  // }

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
        // <Wrapper apiKey={"AIzaSyAZjycaiqkqixrYvRQhKXPJDi_4UhhmrhQ"} render={render} >
        //   <Map />
        // </Wrapper>
        "showmap"
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