/**Author : Mariam Ashraf Fekry*/
import React from "react"
import{withGoogleMap , GoogleMap , Marker} from "react-google-maps"
export const InitMap = withGoogleMap(props=>{
    return(
      /*This for call Google Map with zoom =13 , set Default center = latitude , longitude from props*/
      <GoogleMap ref={props.onMapLoad} defaultZoom={13} defaultCenter={props.marker}> 
            {/*this marker for put marker in map with location*/}
            <Marker position={props.marker}/>
        </GoogleMap>
    );
});