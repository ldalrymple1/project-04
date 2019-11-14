import React from 'react'
import ReactMapGL, { Marker } from  'react-map-gl'
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

    
    } 
    this.populateMap = this.populateMap.bind(this)

  }

  // componentDidMount() {
  //   axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${process.env.MAPBOX_ACCESS_TOKEN}`)
  //     .then(res => console.log('hello', res))
  //     .catch(err => console.log(err))
  // }


  componentDidMount() {
    axios.get('/api/exhibitions')
      .then(res => this.setState({ exhibitions: res.data }))
      .catch(err => console.log(err))
    
  }

  

  populateMap() {
    this.state.exhibitions.map(exhib => {
      {console.log(exhib.postcode)}
      axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${exhib.postcode.replace(' ','')}.json?access_token=${process.env.MAPBOX_ACCESS_TOKEN}`)
        .then(res => {
          const long = res.data.features[0].geometry.coordinates[0]
          const lat = res.data.features[0].geometry.coordinates[1]
          this.setState({ exhibPins: [...this.state.exhibPins, { long, lat }] })
        })
        .catch(err => console.log(err))

    })
   
  }
  // map the exhibs 

  // .then(res => this.setState({ bikepoints: res.data }))

  render() {
    console.log(this.state, 'state re render')
    console.log(this.state.exhibPins, 'locations')
    return (
      <div>
        {this.populateMap()}
        <h1>map</h1>
        <ReactMapGL {...this.state.viewport}
          mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
          mapStyle={`mapbox://styles/mapbox/streets-v9?access_token=${process.env.MAPBOX_ACCESS_TOKEN}`}
          onViewportChange={(viewport) => this.setState({ viewport })}
          width={'90vw'}
          height={'70vh'}
        >
        </ReactMapGL>


      </div>
      
    )
  }
}

export default MapExhibitionsIndex