import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor(){
    super()

  }


  render () {
    return (
      <div>
        <h1>EXPOSURE</h1>
        <Link to='/gallery-register'><button>Are you a gallery?</button></Link>
        <button>Are you a visitor?</button>


      </div>
     
    )
  }
  

}



export default Home