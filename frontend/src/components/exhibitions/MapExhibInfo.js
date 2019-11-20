import React from 'react'
import { Link } from 'react-router-dom'

class MapExhibInfo extends React.Component {
  render() {
    
    const { info } = this.props
    return (
      <div>
        <div>
          <small>{info.artist}</small>
        </div>
        <img width={150} src={info.image} />
        <Link to={`/exhibitions/${info.id}`}><p>Find out more</p></Link>
      </div>
    )
  }
}

export default MapExhibInfo