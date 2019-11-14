import React from 'react'
import axios from 'axios'


class CardExhibitionsIndex extends React.Component {
  constructor() {
    super()


    this.state = {
      exhibitions: []
    }

  }

  componentDidMount(){
    axios.get('/api/exhibitions')
      .then(res => this.setState({ exhibitions: res.data }))
      .then(err => console.log(err))
  }



  render () {
    if (!this.state.exhibitions) return null
    const exhibitions = this.state.exhibitions
    
    return (
      <div>
        <h1>Hello Index Page</h1>
        <div className="index-card-wrapper">
          {exhibitions.map(exhib => (
            <div key={exhib.id}>
              <div className="index-card" >
                <h3>{exhib.title}</h3>
                <img className="card-images" src={exhib.image} alt={exhib.title} />
                <p>{exhib.start_date} - {exhib.end_date}</p>
                <p>{exhib.gallery.name}</p>

                <p>{exhib.category.map(cat => (
                  cat.category))}</p>
                

                
              </div>
            
            </div>
          ))}
        </div>

      </div>
    )
  }


}

export default CardExhibitionsIndex