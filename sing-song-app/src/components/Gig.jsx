

const Gig = ({ gig }) => {
  return (
    <div>
      <h4>{gig.fields.artist} in {gig.fields.city}</h4>
      <h5>{gig.fields.date}</h5>
      <h5>{gig.fields.time}</h5>
      <h5>{gig.fields.address}</h5>
      <h5><a href={gig.fields.link} >Listen</a></h5>
    </div>
  )
}

export default Gig;