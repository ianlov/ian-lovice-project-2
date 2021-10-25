import { useState } from "react";

const Search = ({ gigs, setSearchGigs }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    
    const searchLowerCase = search.toLowerCase()

    const searchedGigs = gigs.filter(gig => {
      if (
        gig.fields.artist.toLowerCase().includes(searchLowerCase) ||
        gig.fields.city.toLowerCase().includes(searchLowerCase) ||
        gig.fields.date.toLowerCase().includes(searchLowerCase)
      ) {
        return gig
      }
    })
  
    setSearchGigs(searchedGigs)
    console.log(searchedGigs)
  }

  return (
    <div className="search-form" >
      <form onSubmit={handleSubmit} >
        <input id="search" type="search" placeholder="artist, date, city..." onChange={(ev) => setSearch(ev.target.value)} />
        <button><span class="material-icons">search</span></button>
      </form>
    </div>
  )
}

export default Search;