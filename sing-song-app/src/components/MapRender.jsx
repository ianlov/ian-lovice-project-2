import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Map from "./Map.jsx";


const MapRender = () => {
  const render = (status) => {
    switch (status) {
      case status === Status.LOADING:
        return <h1>Loading...</h1>;
      case status === Status.SUCCESS:
        return <Map />;
      default:
        return ""
    }
  };

  return (
    <Wrapper apiKey={"AIzaSyAZjycaiqkqixrYvRQhKXPJDi_4UhhmrhQ"} render={render} >
      <Map />
    </Wrapper>
  )
}

export default MapRender;
