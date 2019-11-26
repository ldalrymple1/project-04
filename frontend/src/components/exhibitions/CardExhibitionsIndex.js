import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Select from 'react-select'

class CardExhibitionsIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      exhibitions: [],
      search: '',
      categories: [],
      categoryChosen: 'All',
      animateReady: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.filteredExhibitions = this.filteredExhibitions.bind(this)

  }

  componentDidMount(){
    const exhibId = this.props.match.params.id
    axios.get('/api/exhibitions')
      .then(res => {
        this.setState({ exhibitions: res.data })
        this.filteredExhibitions()
        this.getCategories()
      })
      .then(err => console.log(err))
  }

  // CREATE FUNCTION THAT SPECIFIES IF FREE!


  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  getCategories(){
    axios.get('/api/categories') 
      .then(res => this.setState({ categories: res.data }))
      .catch(err => console.log(err))
    
  }

  filteredExhibitions() {
    const { exhibitions, search } = this.state
    const re = new RegExp(search, 'i')
    const filteredExhibitionsArr =  exhibitions.filter((exhib) => {
      console.log(this.state.categoryChosen, 'chosen')
      // return re.test(exhib.artist) && exhib.category.some(cat => cat.category === this.state.categoryChosen)
      return (re.test(exhib.artist) && exhib.category.find(cat => cat.category === this.state.categoryChosen)) || this.state.categoryChosen === 'All'
    })
    console.log('filtered', filteredExhibitionsArr)
    return filteredExhibitionsArr
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.state.categoryChosen === 'Pottery') {
      // console.log('pottery')
    }
  }

  render () {
    if (!this.state.exhibitions) return null
    console.log(this.state, 'state')
    setTimeout(() => {
      this.setState({ animateReady: true })
    }, 50)
    const { exhibitions, categories } = this.state
    return (
      <div className={`${this.state.animateReady ? 'animated fadeInUp' : 'hide' }`}>
        <h1 className="index-title">Exposure</h1>
   
        <div className="search-wrapper">

          <div className="form-group">
            <p>Pick a category</p>
            <select className="form-select" name="categoryChosen" onChange={this.handleChange} >
              <option value="" disabled>Pick a category</option>
              <option value="All">All</option>
              <option value="Photography">Photography</option>
              <option value="Fine Art">Fine Art</option>
              <option value="Drawings">Drawings</option>
              <option value="Pottery">Pottery</option>
              <option value="Sculpture">Sculpture</option>
              <option value="Paintings">Paintings</option>
              <option value="Modern Art">Modern Art</option>
              <option value="Film">Film</option>
              <option value="Etchings">Etchings</option>
              <option value="Contemporary Art">Installations</option>
              <option value="Light" >Light</option>
            </select>
          </div>
            
          <div className="search-div">
            <input
              className="field"
              placeholder="Search"
              name="search"
              onChange={this.handleChange}
            />
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
       
        <div className="index-card-wrapper">
          {this.filteredExhibitions().map(exhib => (
            <Link to={`/exhibitions/${exhib.id}`} key={exhib.id}>
              <div >
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
                    <div className="location">
                      <img className="locations-icon" src='https://cdn3.iconfinder.com/data/icons/unicons-vector-icons-pack/32/location-512.png' />
                      <p>{exhib.gallery.name}</p>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-primary">Find out more</button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    )
  }
}

export default CardExhibitionsIndex

