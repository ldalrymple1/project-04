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
      categoryChosen: ''
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

  // freeExhib(){
  //   if (this.state.exhibitions.rough_price === 0.00) {
  //     return 'FREE'
  //   }
  // }

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
    console.log(exhibitions, 'checking')
    const re = new RegExp(search, 'i')
    return exhibitions.filter((exhib) => {
      return re.test(exhib.artist)  // or title
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.state.categoryChosen === 'Pottery') {
      console.log('pottery')
    }
  }


  render () {
    if (!this.state.exhibitions) return null
    console.log(this.state, 'state')
    console.log(this.props.match, 'params')
    const { exhibitions, categories } = this.state
   
    
    return (
      <div>
        <h1 className="index-title">Exposure</h1>
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
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Pick a category</label>
            <div className="select">
              <select name="categoryChosen" onChange={this.handleChange} value={this.state.categoryChosen}>
              
                <option value="" disabled>Pick a category</option>
                <option value="photography">Photography</option>
                <option value="fine-art">Fine Art</option>
                <option value="drawings">Drawings</option>
                <option value="pottery">Pottery</option>
                <option value="sculpture">Sculpture</option>
                <option value="paintings">Paintings</option>
                <option value="modern-art">Modern Art</option>
                <option value="film">Film</option>
                <option value="etchings">Etchings</option>
                <option value="contemporary-art">Installations</option>
                <option value="light" >Light</option>
              
              </select>
            </div>
          </div> 
          <button>Search by category</button>


        </form>
  
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