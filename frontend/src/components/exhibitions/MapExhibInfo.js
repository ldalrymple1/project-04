import React from 'react'

class MapExhibInfo extends React.Component {
  render() {
    const { info } = this.props
    const displayImg = `${info.image}`

    return (
      <div>
        <div>
          <p>testing</p>
        </div>
        <img width={240} src={displayImg} />
      </div>
    )
  }
}

export default MapExhibInfo