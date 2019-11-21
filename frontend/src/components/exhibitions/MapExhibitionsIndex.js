import React from 'react'
import { Link } from 'react-router-dom'
import ReactMapGL, { Marker, GeolocateControl, Popup } from  'react-map-gl'
import axios from 'axios'
import 'mapbox-gl/dist/mapbox-gl.css'
import CityPin from './CityPin'
import MapExhibInfo from './MapExhibInfo'

class MapExhibitionsIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      viewport: {
        height: 800,
        width: 800,
        zoom: 13,
        latitude: 51.513,
        longitude: -0.105
      },
      exhibitions: [],
      exhibPins: [],
      popupInfo: []
      

    
    } 
    this.populateMap = this.populateMap.bind(this)
  }

  populateMap() {
    this.state.exhibitions.map(exhib => {
      axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${exhib.postcode.replace(' ','')}.json?access_token=${process.env.MAPBOX_ACCESS_TOKEN}`)
        .then(res => {
          console.log(res, 'the res')
          const long = res.data.features[0].geometry.coordinates[0]
          const lat = res.data.features[0].geometry.coordinates[1]
          const _id = exhib._id
          console.log(exhib.postcode)
          this.setState({ exhibPins: [...this.state.exhibPins, { _id, long, lat }] })
        })
        .catch(err => console.log(err))
    })
  }

  componentDidMount() {
    axios.get('/api/exhibitions')
      .then(res => this.setState({ exhibitions: res.data }))
      .then(() => this.populateMap())
      // .then(arr => {
      //   this.setState({ exhibitions: arr })
      //   console.log(this.state, '1')
      // })
      .catch(err => console.log(err))
    
  }

  
  render() {
    if (!this.state.popupInfo) return null
    console.log(this.state, 'state')
    return (
      <div className="map-wrapper">
        <div className="map-title">
          <h1>What's on near you?</h1>
        </div>
        <div className="coloured-wrapper">
          <ReactMapGL {...this.state.viewport}
            mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
            mapStyle={`mapbox://styles/mapbox/streets-v9?access_token=${process.env.MAPBOX_ACCESS_TOKEN}`}
            position={'relative'}
            width={'90%'}
            height={'80vh'}
            margin={'auto'}
            onViewportChange={(viewport) => this.setState({ viewport })}>
            <GeolocateControl 
              positionOptions={{ enableHighAccuracy: true }}
              trackUserLocation={true}
            />

            {this.state.exhibPins.map((exhib, i) => (
              <Marker
                key={i}           
                longitude={exhib.long}
                latitude={exhib.lat}
              >
                <CityPin size={15} onClick={() => this.setState({ popupInfo: true })}/>
              
                {this.state.popupInfo && (
                  <Popup
                    longitude={exhib.long}
                    latitude={exhib.lat}
                  >
                    <MapExhibInfo info={ this.state.exhibitions[i] } />
                  </Popup> 
                )}
              </Marker>
            ))} 

          </ReactMapGL>
        </div>
      </div>
    )
  }
}

export default MapExhibitionsIndex

{/* <Marker
  key={i}           
  longitude={exhib.long}
  latitude={exhib.lat}
  >
  <div>🐷</div>
</Marker>
))}  */}

//  this.state.showPopup && <Popup
// latitude={exhib.lat}
// longitude={exhib.long}
// closeButton={true}
// closeOnClick={false}
// onClose={() => this.setState({ showPopup: false })}
// anchor="top" >
// <div>🐳</div>
// </Popup>

{/* <Popup
latitude={exhib.lat}
longitude={exhib.long}
closeButton={true}
closeOnClick={false}
onClose={() => this.setState({ showPopup: false })}
anchor="top" >
<div>hi</div>
</Popup> */}

// closeButton={true}
// closeOnClick={true}
// onClose={() => this.setState({ popupInfo: false })}
// tipSize={10}
// anchor="top"
// offset={20}