import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useEffect, useRef, useState } from "react";

const render = (status: Status) => {
  return <h1>{status}</h1>
};


const Map = () => <Wrapper apiKey={"AIzaSyAZjycaiqkqixrYvRQhKXPJDi_4UhhmrhQ"} render={render} />;


{/* <Wrapper apiKey={"AIzaSyAZjycaiqkqixrYvRQhKXPJDi_4UhhmrhQ"} render={render} ></Wrapper>
  const Map = (status: Status) => {
    const ref = useRef<HTMLDivElement>(null)
    const [map, setMap] = useState<google.maps.Map>();

    useEffect(() => {
      if (ref.current && !map) {
        setMap (new window.google.maps.Map(ref.current))
      }
    }, [ref, map])

    return (
      <div className="map" ref={ref}></div>
    )
  }
</Wrapper>

export default Map; */}

export default Map;