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

  // componentDidMount() {
  //   axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${process.env.MAPBOX_ACCESS_TOKEN}`)
  //     .then(res => console.log('hello', res))
  //     .catch(err => console.log(err))
  // }

  populateMap() {
    this.state.exhibitions.map(exhib => {
      axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${exhib.postcode.replace(' ','')}.json?access_token=${process.env.MAPBOX_ACCESS_TOKEN}`)
        .then(res => {
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
      .catch(err => console.log(err))
    
  }

  _renderPopup() {
    const { popupInfo } = this.state
    const { exhibPins } = this.state

    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={exhibPins.long}
          latitude={exhibPins.lat}
          closeOnClick={false}
          onClose={() => this.setState({ popupInfo: null })}
        >
          <MapExhibInfo info={popupInfo} />
        </Popup>
      )
    )
  }



  

  
  // map the exhibs 

  // .then(res => this.setState({ bikepoints: res.data }))

  render() {
    if (!this.state.exhibPins) return null
    if (!this.state.exhibitions) return null
    // if (!this.state.popupInfo) return null
    console.log(this.state.popupInfo, 'pop up info')
    console.log(this.state, 'state')
    return (
      <div className="map-wrapper">
        <div className="map-title">
          <h1>What's on near you?</h1>
        </div>
        <ReactMapGL {...this.state.viewport}
          mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
          mapStyle={`mapbox://styles/mapbox/streets-v9?access_token=${process.env.MAPBOX_ACCESS_TOKEN}`}
          position={'relative'}
          width={'100%'}
          height={'90vh'}
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
              
              <CityPin size={20} onClick={() => this.state.exhibitions.map((exhib) => (this.setState({ popupInfo: exhib.image })) )} />
              {this.state.popupInfo && (
                <Popup
                  tipSize={5}
                  anchor="top"
                  longitude={exhib.long}
                  latitude={exhib.lat}
                  closeOnClick={false}
                  onClose={() => this.setState({ popupInfo: null })}
                >
                  <MapExhibInfo info={this.state.popupInfo} />
                </Popup> 
              )}
            </Marker>
            
            
            







            
             
          ))} 
  
        </ReactMapGL>


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