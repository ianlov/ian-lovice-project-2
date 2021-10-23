import { useState, useEffect } from "react";

const Search = ({ toggleSearch, setToggleSearch }) => {
  const [artist, setArtist] = useState("");
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");
  const [searchType, setSearchType] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setToggleSearch(!toggleSearch)
  }

  const handleSearch = (ev) => {
    if (searchType === "artist") {
      setArtist(ev.target.value)
    } else if (searchType === "date") {
      setDate(ev.target.value)
    } else {
      setCity(ev.target.value)
    }
  }

  const clear = () => {
    setArtist("");
    setDate("");
    setCity("");
  }

  return (
    <form onSubmit={handleSubmit} >
      <button onClick={() => {clear(); setSearchType("artist")}} >Search Artists/Bands</button>
      <button onClick={() => {clear(); setSearchType("date")}} >Search Date</button>
      <button onClick={() => {clear(); setSearchType("city")}} >Search City</button>
      <br />
      <input id="search" type="text" placeholder="Artist, Date, City" onChange={handleSearch} />
      <br />
      <input type="submit" />
    </form>
  )
}

export default Search;