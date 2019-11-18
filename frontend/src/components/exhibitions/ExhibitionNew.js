import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'


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
        category: ''

      }

    }



    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  // handleSubmit(e) {
  //   e.preventDefault()
  //   axios.post('/api/exhibitions', this.state.data, {
  //     // headers: { Authorization: `Bearer ${Auth.getToken()}` }
  //   })
  //     .then(res => {
  //       this.props.history.push(`/exhibitions/${res.data.id}`)
  //     })
  //     .catch(err => console.log(err)) 
  // }




  render() {
    console.log(this.state, 'state')
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
              >
              </input>
            </div>
          </div>

          <div className="row form">
            <div className="ten columns">
              <label>Postcode</label>
              <input 
                className="u-full-width"
                type="text"
                placeholder="Postcode"
                name="postcode"
                onChange={this.handleChange} 
              >
              </input>
            </div>
          </div>

          <div className="row form">
            <label>Pick a category</label>
            <div className="select">
              <select name="category" onChange={this.handleChange}>
              
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
          <button className="create-exhib">Create Exhibition</button>


        </form>







      </div>
        
        </>
    )
  }


}

export default ExhibitionNew