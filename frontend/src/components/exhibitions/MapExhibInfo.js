import React from 'react'

class MapExhibInfo extends React.Component {
  render() {
    
    const { info } = this.props
    return (
      <div>
        <div>
          <small>{info.artist}</small>
        </div>
        <img width={150} src={info.image} />
      </div>
    )
  }
}

export default MapExhibInfo