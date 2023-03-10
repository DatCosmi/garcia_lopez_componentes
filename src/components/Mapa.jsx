import React, { Component } from "react";
import GoogleMaps from "simple-react-google-maps";
export default class Mapa extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <h1>Mapa:</h1>
        <br />
        <GoogleMaps
          apiKey={"AIzaSyBPDULIRm_tfXQDHNhR2RZvgWwwSvGFzTE"}
          style={{ height: "350px", width: "570px" }}
          zoom={12}
          center={{
            lat: 23.9901183,
            lng: -104.6175808,
          }}
          markers={[{ lat: 23.9901183, lng: -104.6175808 }]}
        />
        <br />
      </div>
    );
  }
}
