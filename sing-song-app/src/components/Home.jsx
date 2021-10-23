import { useEffect, useState } from "react";
import axios from "axios";

import Search from "./Search.jsx";

const API_KEY = "keyLH1D8HDodG0Om3";
const API_URL = `https://api.airtable.com/v0/app6U7NfwIM8GmQ47/Table%201?api_key=${API_KEY}`

const Home = ({ toggleFetch }) => {
  const [gigs, setGigs] = useState([]);
  

  useEffect(() => {
    const getGigData = async () => {
      const resp = await axios.get(API_URL)
      setGigs(resp.data.records)
    }

    getGigData();
  }, [toggleFetch])

  return (
    <div>
      <Search />
    </div>
  )
}

export default Home;