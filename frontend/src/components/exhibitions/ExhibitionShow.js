import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class ExhibitionShow extends React.Component {
  constructor() {
    super()


    this.state = {
      exhibition: [],
      galleries: []
      // categories: []

    }
  }

  componentDidMount(){
    const exhibId = this.props.match.params.id
    axios.get(`/api/exhibitions/${exhibId}`)
      .then(res => {
        this.setState({ exhibition: res.data })
        this.getGalleries()
      })
      .then(err => console.log(err))

  }

  getGalleries(){
    axios.get('/api/galleries')
      .then(res => this.setState({ galleries: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    if (!this.state.exhibition) return null
    if (!this.state.exhibition.category) return null
    console.log(this.state.exhibition, 'the expo')
    console.log(this.state, 'state')
    const exhib = this.state.exhibition
    console.log(this.state.exhibition.category, 'cats')
    return (
      <div>
        <div className="show-wrapper animated fadeInUp">
          
          <h2 className="index-title">{exhib.title}</h2>

          <div className="show-space">
            <div className="show-image">
              <img src={exhib.image} alt={exhib.title} />
            </div>
            <div className="list-of-galls">
              <div className="gallery-list">
                <h3>Exposure's Art Galleries</h3>
              </div>
              <div className="list-of-galls2">
                {this.state.galleries.map(gal => (
                  <Link to={`/galleries/${gal.id}`} key={gal.id}>
                    <div className="buzz-gallery">
                      <h4 >{gal.name}</h4>
                    </div>
                    
                  </Link>
          
                ))}
              </div>

            </div>
          </div>
          <p className="date">{exhib.start_date} - {exhib.end_date}</p>
          <p className="description">{exhib.description}</p>
          <p>£{exhib.rough_price}</p>
          <p className="date">Categories</p>
          <div className="buzzword-wrapper">
            {exhib.category.map(cat => (
              <Link to={`/categories/${cat.id}`} key={cat.id}>
                <div className="buzz-word">
                  <p className="category">{cat.category}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
       
      </div>




    )
  }


}

export default ExhibitionShow