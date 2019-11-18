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
      categoryChosen: 'All'
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
    // console.log(this.state.categoryChosen, 'chosen cat')
    const { exhibitions, categories } = this.state
   
    
    return (
      <div>
        <h1 className="index-title">Exposure</h1>
        <div className="search-area">
          <div className="row searchbar">
            
            <label className="label">Pick a category</label>
            <div className="select">
              <select className="four columns" name="categoryChosen" onChange={this.handleChange}>
              
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
            
            <div className="search-field">
              <input
                className="six columns"
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