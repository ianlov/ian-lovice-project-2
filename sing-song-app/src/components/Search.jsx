import { useState } from "react";

const Search = ({ gigs, setSearchGigs, setToggleFetch, toggleFetch, setToggleShowMap }) => {
  const [search, setSearch] = useState("");
  const [toggleFocus, setToggleFocus] = useState(false)

  const handleSubmit = (ev) => {
    ev.preventDefault();
    
    setToggleFetch(!toggleFetch)

    setToggleShowMap(true)

    const searchLowerCase = search.toLowerCase()

    const searchedGigs = gigs.filter(gig => {
      if (
        gig.fields.artist.toLowerCase().includes(searchLowerCase) || 
        gig.fields.city.toLowerCase().includes(searchLowerCase) || 
        gig.fields.date.toLowerCase().includes(searchLowerCase)
        ) { return gig }
    })
  
    setSearchGigs(searchedGigs)
  }

  return (
    <div className="search-form" >
      <form onSubmit={handleSubmit} >
        <input 
          id="search" 
          type="search" 
          placeholder="artist, date, city..." 
          onChange={(ev) => setSearch(ev.target.value)} 
          onFocus={() => setToggleFocus(true)}
          onBlur={() => setToggleFocus(false)}
        />
        <button><span class="material-icons">search</span></button>
      </form>
      {toggleFocus ? 
        <p>Date "yyyy-mm-dd"</p> :
        <p></p>
      }
    </div>
  )
}

export default Search;