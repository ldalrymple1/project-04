import React from 'react'
import axios from 'axios'

class ExhibitionShow extends React.Component {
  constructor() {
    super()


    this.state = {
      exhibition: [],
      gallery: [],
      categories: []

    }
  }

  componentDidMount(){
    const exhibId = this.props.match.params.id
    axios.get(`/api/exhibitions/${exhibId}`)
      .then(res => this.setState({ exhibition: res.data }))
      .then(err => console.log(err))

  }

  // getCategories(){
  //   axios.get()
  // }

  render() {
    if (!this.state.exhibition) return null
    console.log(this.state.exhibition, 'the expo')
    console.log(this.state, 'state')
    const exhib = this.state.exhibition
    return (
      <div>
        <div className="show-wrapper">
          <h2>{exhib.title}</h2>
          <img src={exhib.image} alt={exhib.title} />
          <p>{exhib.start_date} - {exhib.end_date}</p>
          <p className="description">{exhib.description}</p>
          <p>£{exhib.rough_price}</p>
          <div className="buzz-word">
            <p className="category">Category Ex</p>
          </div>
        </div>
      </div>


    
      
    

    )
  }


}

export default ExhibitionShow