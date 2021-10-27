import { useRef, useEffect, useState } from "react";


const Map = () => {
  const [map, setMap] = useState();
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current));
    }
  }, [ref, map])

  return (
    <div className="map" ref={ref} ></div>
  )
}

export default Map;