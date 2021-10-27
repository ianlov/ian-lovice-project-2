import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useEffect, useRef } from "react";


const Map = () => {
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

export default Map;