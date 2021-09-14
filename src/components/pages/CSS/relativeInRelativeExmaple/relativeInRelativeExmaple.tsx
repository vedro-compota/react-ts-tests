import { useEffect, useRef } from 'react';
import './relativeInRelativeExmapleStyles.css';
import 'mapbox-gl/dist/mapbox-gl.css';

import mapboxGl from 'mapbox-gl';

export type PropsType = any;


 export default function RelativeInRelativeExample({value} : PropsType)  {
  
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapContainerRef?.current) {
      mapboxGl.accessToken = 'pk.eyJ1IjoiZnJndGgxMjM1Z2RmIiwiYSI6ImNrczY2amRtejJtajgydm1ydWdvb3c2d2EifQ.18QJNNVL0lynCYl6LwOzOA';
    // const map =
    new mapboxGl.Map({
      container: mapContainerRef.current, // container ID
      style: 'mapbox://styles/mapbox/dark-v10', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
      attributionControl: false,
      dragRotate: false,
      touchZoomRotate: false,
      logoPosition: 'bottom-right',
      renderWorldCopies: false,
      })
      // .addControl(
      //   new mapboxGl.AttributionControl({
      //     compact: true,
      //   }),
      // )
      // .addControl(new mapboxGl.NavigationControl({ showCompass: false }), 'bottom-right')
      ;
    } 
  }, [])

  return (
    <div className='root'>
        <div>Main title</div>
        <div className='container'>
          <div className="headerBlock"> Header on the top  </div>
          <div className="bottomAbsolute"></div>
          <div className="contentBlock">  <div className="map" ref={mapContainerRef} />
        </div>
        </div>     

        
    </div>

  );
};