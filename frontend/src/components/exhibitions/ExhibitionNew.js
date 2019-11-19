import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import Select from 'react-select'



class ExhibitionNew extends React.Component {
  constructor() {
    super()


    this.state = {

      data: {
        title: '',
        artist: '',
        start_date: '',
        end_date: '',
        image: '',
        description: '',
        price: '',
        postcode: '',
        categories: [],
        category: [],
        gallery: {
          name: ''
        } 
      },
      galleries: []
    
    }


    this.handleCategories = this.handleCategories.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleGallery = this.handleGallery.bind(this)
  }

  componentDidMount() {
    axios.get('/api/galleries')
      .then(res => {
        this.setState({ galleries: res.data })
        this.getCategories()
      })
      .catch(err => console.log(err))
  }

  getCategories() {
    axios.get('/api/categories')
      .then(res => {
        const newArr = [...res.data]
        newArr.map(cat => {
          // removing the exhibitions field and adding in the value and label needed for the react-select
          delete cat.exhibitions
          cat.label = cat.category
          cat.value = cat.category
          return cat
          
        })
        // console.log(newArr, 'newarr')
        const data = { ...this.state.data, categories: newArr }
        this.setState({ data }) //id and name 
      })
      .catch(err => console.log(err)) 
  }



  

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  handleCategories(selected) {
    const categories = selected 
    const data = { ...this.state.data, category: categories }
    this.setState({ data })
  }

  handleGallery(e) {
    // console.log('handle gallery', { [e.target.name]: e.target.value })
    // const data = { ...this.state.data, [e.target.name]: e.target.value }
    // console.log(e.target.value, 'vaaal')
    const gallery1 = { ...this.state.gallery, name: e.target.value }
    // this.setState({ data })
    console.log(this.state.data.gallery, 'gaaaal')
    // const gallery1 = this.state.data.gallery
    this.setState({ data: { ...this.state.data, gallery: gallery1 } })
    // console.log('data', this.state.data)



    //const gallery = { [e.target.name]: e.target.value }
    // const gallery = { ...this.state.gallery, name: e.target.value }
    // this.setState({ gallery })
    // console.log(this.state.gallery, 'obj')
    // const gallery = this.state.gallery
    // this.setState({ data: { ...this.state.data, gallery: gallery } })
    // console.log('data', this.state.data)

  }

  handleSubmit(e) {
    e.preventDefault()
    // removing the value and label needed for the react-select so that those fields are not sent to the database
    const chosenArr = [...this.state.data.category]
    const theOne = chosenArr.map(cat => {
      delete cat.label
      delete cat.value
      return cat
    })
    console.log(theOne, 'the oooooone')
    const obj = {
      title: this.state.data.title,
      artist: this.state.data.artist,
      start_date: this.state.data.start_date,
      end_date: this.state.data.end_date,
      image: this.state.data.image,
      description: this.state.data.description,
      price: this.state.data.price,
      postcode: this.state.data.postcode,
      gallery: this.state.data.gallery,
      category: theOne
    }

    console.log(obj)

    axios.post('/api/exhibitions', obj, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        this.props.history.push(`/exhibitions/${res.data.id}`)
      })
      .catch(err => console.log(err)) 
  }


  render() {
    if (!this.state.data.categories) return null
    console.log(this.state, 'STATE')
    return (
      <>
      <h3 className="register-title">Add an Exhibition</h3>
      <div className="new-form-wrapper">
        <form onSubmit={this.handleSubmit} className="new">
          <div className="row form">
            <div className="ten columns">
              <label>Title of the Exhibition</label>
              <input 
                className="u-full-width"
                type="text"
                placeholder="Exhibition Title"
                name="title"
                onChange={this.handleChange}
                value={this.state.data.title}
              >
              </input>
            </div>
          </div>

          <div className="row form">
            <div className="ten columns">
              <label>Artist</label>
              <input 
                className="u-full-width"
                type="text"
                placeholder="Artist"
                name="artist"
                onChange={this.handleChange}
                value={this.state.data.artist}
              >
              </input>
            </div>
          </div>

          <div className="row form">
            <div className="five columns">
              <label>Opening Date</label>
              <input 
                className="u-full-width"
                type="date"
                placeholder="Choose the start date"
                name="start_date"
                onChange={this.handleChange}
                value={this.state.data.start_date} 
              >
              </input>
            </div>

        
            <div className="five columns">
              <label>Closing Date</label>
              <input 
                className="u-full-width"
                type="date"
                placeholder="Exhibition Title"
                name="end_date"
                onChange={this.handleChange}
                value={this.state.data.end_date} 
              >
              </input>
            </div>
          </div>



          
          
          <div className="row form">
            <div className="ten columns">
              <label>Choose a Cover Image</label>
              <input 
                className="u-full-width"
                type="text"
                placeholder="Choose an image"
                name="image"
                onChange={this.handleChange}
                value={this.state.data.image} 
              >
              </input>
            </div>
          </div>

          <div className="row form">
            <div className="ten columns">
              <label>Description of the Exhibition</label>
              <textarea 
                className="u-full-width"
                type="textarea"
                placeholder="Write your description here..."
                name="description"
                onChange={this.handleChange}
                value={this.state.data.description} 
              >
              </textarea>
            </div>
          </div>

          <div className="row form">
            <div className="ten columns">
              <label>Price</label>
              <input 
                className="u-full-width"
                type="number"
                placeholder="Price of the Exhibition"
                name="price"
                onChange={this.handleChange}
                value={this.state.data.price} 
              >
              </input>
            </div>
          </div>

          <div className="row form">
            <div className="ten columns">
              <label>Gallery</label>
              
              <select name="gallery" onChange={this.handleGallery} >
                {this.state.galleries.map(gal => ( <option key={gal.id} value={gal.name}>{gal.name}</option>))}
              </select>
            </div>
          </ div>

         

          <div className="row form">
            <div className="ten columns">
              <label>Postcode</label>
              <input 
                className="u-full-width"
                type="text"
                placeholder="Postcode"
                name="postcode"
                onChange={this.handleChange}
                value={this.state.data.postcode} 
              >
              </input>
            </div>
          </div>

          <div className="row form select">
            <label>Pick a category</label>
            <div className="select-categories">
              {this.state.data.categories && 
              <Select
                name="categories"
                options={this.state.data.categories} 
                isMulti={true}
                onChange={this.handleCategories}
                value={this.state.data.category}
              />
              }
              
            </div>
          </div>
          <button className="create-exhib">Create Exhibition</button>


        </form>







      </div>
        
        </>
    )
  }


}

export default ExhibitionNew