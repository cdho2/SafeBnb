import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import { Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Button } from 'reactstrap';
//import GoogleApiWrapper from './MapContainer'

class MapPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        display: false,
        markers: [
          {
            "HostID": 546854,
            "ID": 295594,
            "avg_review": 4.5,
            "city": "Brookline",
            "latitude": "42.33642404",
            "longitude": "-71.12499854",
            "neighborhood": "Coolidge Corner",
            "num_beds": 3,
            "num_reviews": 159,
            "price": 88,
            "rank": 2.0,
            "score": 5.3,
            "summary": "Spacious, Modern 1 bdrm + sofabed"
          },
          {
            "HostID": 42730513,
            "ID": 19717056,
            "avg_review": 4.5,
            "city": "Salem",
            "latitude": "42.52989354",
            "longitude": "-70.88727785",
            "neighborhood": "",
            "num_beds": 3,
            "num_reviews": 122,
            "price": 40,
            "rank": 26.0,
            "score": 5.3,
            "summary": "Salem, MA! Habibi\u00e2\u20ac\u2122s Place #2 Near downtown! Cozy"
          },
          {
            "HostID": 45016784,
            "ID": 16896100,
            "avg_review": 5.0,
            "city": "Cambridge",
            "latitude": "42.37265625",
            "longitude": "-71.08961051",
            "neighborhood": "",
            "num_beds": 3,
            "num_reviews": 157,
            "price": 75,
            "rank": 19.0,
            "score": 6.0,
            "summary": "*Modern Cambridge 2BR*--Harvard/MIT/Kendall/Boston"
          },
          {
            "HostID": 16709847,
            "ID": 19554062,
            "avg_review": 5.0,
            "city": "Cambridge",
            "latitude": "42.370129",
            "longitude": "-71.097816",
            "neighborhood": "Cambridge",
            "num_beds": 3,
            "num_reviews": 161,
            "price": 92,
            "rank": 25.0,
            "score": 6.0,
            "summary": "2 BR Apartment w/parking by MIT Kendall Harvard BU"
          },
          {
            "HostID": 4111092,
            "ID": 13149727,
            "avg_review": 5.0,
            "city": "Waltham",
            "latitude": "42.37552934",
            "longitude": "-71.22880659",
            "neighborhood": "",
            "num_beds": 3,
            "num_reviews": 151,
            "price": 84,
            "rank": 13.0,
            "score": 6.0,
            "summary": "Airy 1 Bed Apt w/ Parking & Quick Access to Boston"
          },
          {
            "HostID": 154960844,
            "ID": 21392073,
            "avg_review": 5.0,
            "city": "Brookline",
            "latitude": "42.34508271",
            "longitude": "-71.12190367",
            "neighborhood": "Coolidge Corner",
            "num_beds": 3,
            "num_reviews": 104,
            "price": 75,
            "rank": 29.0,
            "score": 6.0,
            "summary": "\u00e2\u02dc\u2026Coolidge Corner 2BR\u00e2\u02dc\u20261 FREE Parking\u00e2\u02dc\u2026Walk to T"
          },
          {
            "HostID": 1458862,
            "ID": 4813475,
            "avg_review": 4.5,
            "city": "Cambridge",
            "latitude": "42.3726047",
            "longitude": "-71.09085722",
            "neighborhood": "Cambridge",
            "num_beds": 3,
            "num_reviews": 277,
            "price": 80,
            "rank": 5.0,
            "score": 6.3,
            "summary": "Great Two Bedroom on a Nice, Quiet Street"
          },
          {
            "HostID": 48583357,
            "ID": 10649456,
            "avg_review": 4.5,
            "city": "East Cambridge",
            "latitude": "42.3723973",
            "longitude": "-71.08051231",
            "neighborhood": "Cambridge",
            "num_beds": 3,
            "num_reviews": 247,
            "price": 95,
            "rank": 9.0,
            "score": 6.3,
            "summary": "Comfortable 2 bedroom apt"
          },
          {
            "HostID": 48583357,
            "ID": 12628963,
            "avg_review": 4.5,
            "city": "Cambridge",
            "latitude": "42.370518",
            "longitude": "-71.07986054",
            "neighborhood": "Cambridge",
            "num_beds": 3,
            "num_reviews": 198,
            "price": 80,
            "rank": 12.0,
            "score": 6.3,
            "summary": "Amazing 2 bedroom Apt in East Camb"
          },
          {
            "HostID": 29538655,
            "ID": 13997739,
            "avg_review": 5.0,
            "city": "Dedham",
            "latitude": "42.23343171",
            "longitude": "-71.15513469",
            "neighborhood": "",
            "num_beds": 4,
            "num_reviews": 236,
            "price": 69,
            "rank": 15.0,
            "score": 7.0,
            "summary": "Hidden Gem Near Boston w/ 2 bedrooms Apt"
          },
          {
            "HostID": 17783651,
            "ID": 4090224,
            "avg_review": 5.0,
            "city": "Boston",
            "latitude": "42.33501761",
            "longitude": "-71.05488151",
            "neighborhood": "South Boston",
            "num_beds": 3,
            "num_reviews": 398,
            "price": 89,
            "rank": 4.0,
            "score": 9.47685,
            "summary": "Modern 3BD private home-near BCEC"
          },
          {
            "HostID": 10850877,
            "ID": 17138041,
            "avg_review": 5.0,
            "city": "Boston",
            "latitude": "42.3477139",
            "longitude": "-71.07194297",
            "neighborhood": "South End",
            "num_beds": 3,
            "num_reviews": 109,
            "price": 87,
            "rank": 20.0,
            "score": 10.0105,
            "summary": "Staylooms Downtown Destination | near Back Bay"
          },
          {
            "HostID": 47584294,
            "ID": 18792346,
            "avg_review": 5.0,
            "city": "Boston",
            "latitude": "42.348999",
            "longitude": "-71.140572",
            "neighborhood": "Allston-Brighton",
            "num_beds": 3,
            "num_reviews": 125,
            "price": 69,
            "rank": 21.0,
            "score": 10.0861,
            "summary": "\u00e2\u02dc\u2026In front of subway \u00e2\u02dc\u2026 Free parking spot \u00e2\u02dc\u2026Location"
          },
          {
            "HostID": 14016102,
            "ID": 13613229,
            "avg_review": 5.0,
            "city": "Boston",
            "latitude": "42.26039322",
            "longitude": "-71.11619831",
            "neighborhood": "Hyde Park",
            "num_beds": 3,
            "num_reviews": 103,
            "price": 75,
            "rank": 14.0,
            "score": 10.1101,
            "summary": "~*30min to Downtown*~ THE COSMOPOLITAN"
          },
          {
            "HostID": 47584294,
            "ID": 20329720,
            "avg_review": 5.0,
            "city": "Boston",
            "latitude": "42.342442",
            "longitude": "-71.097633",
            "neighborhood": "Fenway/Kenmore",
            "num_beds": 4,
            "num_reviews": 119,
            "price": 65,
            "rank": 27.0,
            "score": 10.1264,
            "summary": "Walk! \u00e2\u02dc\u2026 Fenway Park \u00e2\u02dc\u2026 Free Parking spot\u00e2\u02dc\u2026 No stairs"
          },
          {
            "HostID": 47584294,
            "ID": 19316661,
            "avg_review": 5.0,
            "city": "Boston",
            "latitude": "42.34264",
            "longitude": "-71.097733",
            "neighborhood": "Fenway/Kenmore",
            "num_beds": 5,
            "num_reviews": 132,
            "price": 99,
            "rank": 23.0,
            "score": 10.2411,
            "summary": "Fenway Park \u00e2\u02dc\u2026 Close to Downtown \u00e2\u02dc\u2026Free parking spot"
          },
          {
            "HostID": 47584294,
            "ID": 19323221,
            "avg_review": 5.0,
            "city": "Boston",
            "latitude": "42.34264",
            "longitude": "-71.097733",
            "neighborhood": "Fenway/Kenmore",
            "num_beds": 4,
            "num_reviews": 120,
            "price": 75,
            "rank": 24.0,
            "score": 10.2411,
            "summary": "Near Downtown! \u00e2\u02dc\u2026 1 Free parking spot \u00e2\u02dc\u2026 Fenway Park"
          },
          {
            "HostID": 2618808,
            "ID": 536865,
            "avg_review": 4.5,
            "city": "Boston",
            "latitude": "42.31086388",
            "longitude": "-71.06815044",
            "neighborhood": "Dorchester",
            "num_beds": 3,
            "num_reviews": 276,
            "price": 73,
            "rank": 3.0,
            "score": 10.34,
            "summary": "COZY 2 BEDROOM IN GREATER BOSTON"
          },
          {
            "HostID": 8229,
            "ID": 163941,
            "avg_review": 4.5,
            "city": "Boston",
            "latitude": "42.32964654",
            "longitude": "-71.09502742",
            "neighborhood": "Roxbury",
            "num_beds": 3,
            "num_reviews": 204,
            "price": 99,
            "rank": 1.0,
            "score": 10.4515,
            "summary": "$99* SPECIAL* 2 bed ApT! Location!"
          },
          {
            "HostID": 27842033,
            "ID": 12040113,
            "avg_review": 5.0,
            "city": "Boston",
            "latitude": "42.27081409",
            "longitude": "-71.07940139",
            "neighborhood": "Mattapan",
            "num_beds": 4,
            "num_reviews": 98,
            "price": 38,
            "rank": 11.0,
            "score": 10.5052,
            "summary": "Cozy, Clean, Convenient. Private 4 rm, 2 bdrm APT"
          },
          {
            "HostID": 12243051,
            "ID": 15672225,
            "avg_review": 5.0,
            "city": "Boston",
            "latitude": "42.36292395",
            "longitude": "-71.12955073",
            "neighborhood": "Allston-Brighton",
            "num_beds": 3,
            "num_reviews": 48,
            "price": 64,
            "rank": 17.0,
            "score": 10.52,
            "summary": "Panoramic 3BR in Lower Allston by Sonder"
          },
          {
            "HostID": 2752806,
            "ID": 15917321,
            "avg_review": 5.0,
            "city": "Boston",
            "latitude": "42.2966079",
            "longitude": "-71.11368725",
            "neighborhood": "Jamaica Plain",
            "num_beds": 3,
            "num_reviews": 106,
            "price": 98,
            "rank": 18.0,
            "score": 10.551,
            "summary": "Beautiful master suite near transit"
          },
          {
            "HostID": 117861820,
            "ID": 20868619,
            "avg_review": 5.0,
            "city": "Boston",
            "latitude": "42.35837749",
            "longitude": "-71.14205253",
            "neighborhood": "Allston-Brighton",
            "num_beds": 3,
            "num_reviews": 91,
            "price": 68,
            "rank": 28.0,
            "score": 10.64,
            "summary": "Newly renovated 3 bedroom w/cable, wifi & parking"
          },
          {
            "HostID": 25279966,
            "ID": 4909590,
            "avg_review": 5.0,
            "city": "Boston",
            "latitude": "42.35049293",
            "longitude": "-71.13328057",
            "neighborhood": "Allston-Brighton",
            "num_beds": 4,
            "num_reviews": 246,
            "price": 29,
            "rank": 6.0,
            "score": 10.9002,
            "summary": "ALLSTON: Loaded studio steps to green line T & bus"
          },
          {
            "HostID": 27842033,
            "ID": 5371051,
            "avg_review": 5.0,
            "city": "Boston",
            "latitude": "42.31338581",
            "longitude": "-71.06525544",
            "neighborhood": "Dorchester",
            "num_beds": 4,
            "num_reviews": 183,
            "price": 55,
            "rank": 7.0,
            "score": 10.9134,
            "summary": "Beautiful 3 bedroom Dorchester MA"
          },
          {
            "HostID": 19509044,
            "ID": 9896713,
            "avg_review": 4.5,
            "city": "Boston",
            "latitude": "42.3474161",
            "longitude": "-71.16731949",
            "neighborhood": "Allston-Brighton",
            "num_beds": 3,
            "num_reviews": 284,
            "price": 51,
            "rank": 8.0,
            "score": 10.9606,
            "summary": "Camp Chandler Pond"
          },
          {
            "HostID": 100180968,
            "ID": 15559436,
            "avg_review": 5.0,
            "city": "Boston",
            "latitude": "42.35500954",
            "longitude": "-71.12928941",
            "neighborhood": "Allston-Brighton",
            "num_beds": 3,
            "num_reviews": 195,
            "price": 99,
            "rank": 16.0,
            "score": 11.1515,
            "summary": "Beautifully renovated 1 Bed Apt. - Allston, Boston"
          },
          {
            "HostID": 16284736,
            "ID": 18858706,
            "avg_review": 5.0,
            "city": "Boston",
            "latitude": "42.37397997",
            "longitude": "-71.03305588",
            "neighborhood": "East Boston",
            "num_beds": 3,
            "num_reviews": 181,
            "price": 67,
            "rank": 22.0,
            "score": 11.28,
            "summary": "Shabby-Ch\u00c3\u00adc Condo Steps to Airport & Subway"
          },
          {
            "HostID": 61861112,
            "ID": 11662212,
            "avg_review": 5.0,
            "city": "Boston",
            "latitude": "42.29419543",
            "longitude": "-71.13817106",
            "neighborhood": "West Roxbury",
            "num_beds": 3,
            "num_reviews": 254,
            "price": 50,
            "rank": 10.0,
            "score": 11.64,
            "summary": "A Suburban Room in Boston"
          }
  ]
  }
}

  onMarkerClick = (props, marker) =>
  this.setState({
    activeMarker: marker,
    selectedPlace: props,
    showingInfoWindow: true
  });

  onInfoWindowClose = () =>
  this.setState({
    activeMarker: null,
    showingInfoWindow: false
  });

onMapClicked = () => {
  if (this.state.showingInfoWindow)
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });
};

createMarkers = markers =>
  markers.map(m => (
          <Marker
           name={"#" + m.rank + ": " + m.summary}
           position={{ lat: m.latitude, lng: m.longitude}}
           onClick={this.onMarkerClick}>
           </Marker>
  ))

  onInfoWindowOpen(props, e) {
    const button = (
      <Button
        onClick={e => {
          window.location.href = "airbnb.com";
        }}
      >
      Book!
      </Button>
    );
    ReactDOM.render(
      React.Children.only(button),
      document.getElementById("iwc")
    );
  }


  render() {
    return (
            <Map
              className="map"
              google={this.props.google}
              style={{ height: '100%', position: 'relative', width: '100%' }}
              zoom={12}
              initialCenter={{ lat: 42.3601, lng: -71.0589 }}>

              {this.createMarkers(this.state.markers)}

              <InfoWindow
                  marker={this.state.activeMarker}
                  onClose={this.onInfoWindowClose}
                  visible={this.state.showingInfoWindow}
                  onOpen={e => {
                          this.onInfoWindowOpen(this.props, e);
                  }}>
                  {this.state.selectedPlace.name}
              <div id="iwc" />
                </InfoWindow>
            </Map>

    )
}
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAQDXd9PaHTytT46Gxa1rdyGN_g4pQW8bA'
})(MapPage);
