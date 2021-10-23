import Gig from "./Gig"

const ShowGig = ({ gigs }) => {
  return (
    <div>
      {gigs.map((gig) => (
        <Gig
          gig={gig}
          key={gig.id}
        />
      ))}
    </div>
  )
}

export default ShowGig;