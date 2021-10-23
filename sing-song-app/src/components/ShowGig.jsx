import Gig from "./Gig"

const ShowGig = ({ gigs }) => {
  return (
    <div>
      {gigs.map((gig) => (
        <Gig
          gig={gig}
        />
      ))}
    </div>
  )
}

export default ShowGig;