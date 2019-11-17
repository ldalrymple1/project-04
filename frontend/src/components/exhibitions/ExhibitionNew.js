import React from 'react'


class ExhibitionNew extends React.Component {
  constructor() {
    super()

  }




  render() {
    return (
      <>
      <h3 className="register-title">Add an Exhibition</h3>
      <div className="new-form-wrapper">
        <form className="new">
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
                name="startDate"
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
                name="title"
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
              <input 
                className="u-full-width"
                type="textarea"
                placeholder="Write your description here..."
                name="description"
                onChange={this.handleChange} 
              >
              </input>
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
              <select name="categoryChosen" onChange={this.handleChange}>
              
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