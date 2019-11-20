import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor(){
    super()

  }


  render () {
    return (
      <div className="home-wrapper">
        <h4 className="home-writing">DISCOVER ART<span className="line"> | </span> NEAR YOU</h4>
        <h1 className="home-title animated  slow zoomIn ">EXPOSURE</h1>
        <h4 className="sub-writing-big">GET THE LATEST EXHIBITIONS IN LONDON</h4>
        <h4 className="sub-writing">SEARCH BY CATEGORY <span className="line">| </span>ALL THINGS ART</h4>
        <h4 className="gallery-q">Are you a Gallery?</h4>
        <span> <Link to='/gallery-register'><button className="btn home">YES</button></Link><Link to='/exhibitions'><button className="btn home">NO</button></Link> </span> 


      </div>
     
    )
  }
  

}



export default Home