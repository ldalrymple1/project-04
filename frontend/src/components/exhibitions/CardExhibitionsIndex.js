import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


class CardExhibitionsIndex extends React.Component {
  constructor() {
    super()


    this.state = {
      exhibitions: []
    }

  }

  componentDidMount(){
    const exhibId = this.props.match.params.id
    axios.get('/api/exhibitions')
      .then(res => this.setState({ exhibitions: res.data }))
      .then(err => console.log(err))
  }

  // freeExhib(){
  //   if (this.state.exhibitions.rough_price === 0.00) {
  //     return 'FREE'
  //   }
  // }



  render () {
    if (!this.state.exhibitions) return null
    console.log(this.state.exhibitions, 'state')
    console.log(this.props.match, 'params')
    const exhibitions = this.state.exhibitions
    
    return (
      <div>
        <h1>Hello Index Page</h1>
        <div className="row searchbar">
          <div className="twelve columns search-field">
            <input
              placeholder="Search"
              name="search"
            />
            <button className="btn btn-primary">Search</button>

          </div>
        </div>   
        <div className="index-card-wrapper">
          {exhibitions.map(exhib => (
            <div key={exhib.id}>
              <div className="card">
                <div className="card-image">
                  <img src={exhib.image} className="img-responsive " />
                </div>
                <div className="card-header">
                  <Link to={`/exhibitions/${exhib.id}`}> <div className="card-title h5">{exhib.title}</div></Link>
                  <div className="card-subtitle text-gray">{exhib.artist}</div>
                </div>
                <div className="card-body">
                  <small>{exhib.start_date} - {exhib.end_date}</small>
                  <p>Roughly £{exhib.rough_price}</p>
                </div>
                <div className="card-footer">
                  <button className="btn btn-primary">Find out more</button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    )
  }


}

export default CardExhibitionsIndex

{/* <Link to={`/exhibitions/${exhib.id}`}> */}
{/* </Link> */}


{/* <div className="index-card" >
<Link to={`/exhibitions/${exhib.id}`}> <h3>{exhib.title}</h3> </Link>
<img className="card-images" src={exhib.image} alt={exhib.title} />
<p>{exhib.start_date} - {exhib.end_date}</p>
<p>{exhib.gallery.name}</p>

<p>{exhib.category.map(cat => (
  cat.category))}</p> */}