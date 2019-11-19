import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor(){
    super()

  }


  render () {
    return (
      <div className="home-wrapper">
        <h4 className="home-writing">DISCOVER ART  |     NEAR YOU</h4>
        <h1 className="home-title">EXPOSURE</h1>
        <h4 className="sub-writing">GET THE LATEST EXHIBITIONS IN LONDON</h4>
        <h4 className="sub-writing">SEARCH BY CATEGORY</h4>
        <h4 className="sub-writing">ALL THINGS ART</h4>
        <h4 className="gallery-q">Are you a Gallery?</h4>
        <span> <Link to='/gallery-register'><button className="home">YES</button></Link><Link to='/exhibitions'><button className="home">NO</button></Link> </span> 


      </div>
     
    )
  }
  

}



export default Home