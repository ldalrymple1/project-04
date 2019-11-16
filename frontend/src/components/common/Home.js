import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor(){
    super()

  }


  render () {
    return (
      <div className="home-wrapper">
        <h1 className="home-title">EXPOSURE</h1>
        <Link to='/gallery-register'><button className="home">Are you a gallery?</button></Link>
        <button className="home">Are you a visitor?</button>


      </div>
     
    )
  }
  

}



export default Home