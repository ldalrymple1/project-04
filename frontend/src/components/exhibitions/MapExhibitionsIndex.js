import React from 'react'
import { Link } from 'react-router-dom'
import ReactMapGL, { Marker, GeolocateControl, Popup } from  'react-map-gl'
import axios from 'axios'
import 'mapbox-gl/dist/mapbox-gl.css'

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
      exhibPins: []
      // popupInfo: null

    
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



  

  
  // map the exhibs 

  // .then(res => this.setState({ bikepoints: res.data }))

  render() {
    if (!this.state.exhibPins) return null
    if (!this.state.exhibitions) return null
    // console.log(this.state, 'state re render')
    console.log(this.state, 'locations')
    return (
      <div>
        <h1>map</h1>
        <ReactMapGL {...this.state.viewport}
          mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
          mapStyle={`mapbox://styles/mapbox/streets-v9?access_token=${process.env.MAPBOX_ACCESS_TOKEN}`}
          width={'90vw'}
          height={'80vh'}
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
              <div>🎨</div>
              
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