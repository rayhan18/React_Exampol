
import React from 'react';
import {GoogleMap,withScriptjs,withGoogleMap} from 'react-google-maps'


function Map(){
    return(
  <GoogleMap defaultZoom={10} defaultCenter={{let:23.885942, lng:45.079163}}/>
    )
}

const withGoogleMapRep = withScriptjs(withGoogleMap(Map))
export default function GoogleMaps(){
    return(
   <div style={{width:'100vw',height:'100hw'}}>   
      <withGoogleMapRep googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"/>
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}  
    </div>
    )
    
}

//https://www.youtube.com/watch?v=Pf7g32CwX_s

























// import * as React from 'react';
// import ReactMapGL from 'react-map-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
// //import { useState } from 'react';

// function GoogleMap() {
//   const [viewport, setViewport] = React.useState({
//     latitude: 37.7577,
//     longitude: -122.4376,
//     zoom: 8
//   });
//   const transformRequest = (url, resourceType) => {
//     if (resourceType === 'Tile' && url.match('yourTileSource.com')) {
//         return {
//             url: url,
//             headers: { 'Authorization': 'Bearer ' + yourAuthToken }
//         }
//     }
// }
//   return (
//     <ReactMapGL
//       {...viewport}
//       width="100%"
//       height="100%"
//       onViewportChange={(viewport) => setViewport(viewport)}
//     />
//   );
// }
// export default GoogleMap;