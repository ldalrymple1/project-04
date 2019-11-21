import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class CategoryShow extends React.Component {
  constructor(){
    super()

    this.state = {
      exhibitionIds: [],
      category: '',
      exhibitionInfo: [],
      search: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    const catId = this.props.match.params.id
    axios.get(`/api/categories/${catId}`)
      .then(res =>  {
        this.setState({ category: res.data.category }) // Getting the category name
        this.setState({ exhibitionIds: res.data.exhibitions }) // Getting the category IDs
        this.getExhibitionData()
      })
      .then(err => console.log(err))
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  getExhibitionData(){
    this.state.exhibitionIds.map((exId) => {
      axios.get(`/api/exhibitions/${exId}`)
        .then(res => {
          console.log(res.data, 'getting all expo data')
          this.setState({ exhibitionInfo: [...this.state.exhibitionInfo, res.data ] }) // Makes each res be added to the array 
        })
        .catch(err => console.log(err))
    })
  }

  filteredExhibitions() {
    const { exhibitionInfo, search } = this.state
    const re = new RegExp(search, 'i')
    return exhibitionInfo.filter((exhib) => {
      return re.test(exhib.artist)  // or title
    })
  }

  render(){
    if (!this.state.exhibitionIds) return null
    if (!this.state.exhibitionInfo) return null
    const { category, exhibitionIds, exhibitionInfo } = this.state 
    console.log(this.state, 'state')
    return (
      <div>
        <h1 className="index-title">{category}</h1>
        <div className="row searchbar">
          <div className="twelve columns search-field">
            <input
              placeholder="Search"
              name="search"
              onChange={this.handleChange}
            />
            <a>
              <div className="search-logo"></div>
            </a>
            <button className="btn btn-primary">Search</button>

          </div>
        </div>
        <div className="index-card-wrapper">
          {this.filteredExhibitions().map(exhib => (
          
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
          ))}
        </div>
      </div> 
    )
  }
}

export default CategoryShow