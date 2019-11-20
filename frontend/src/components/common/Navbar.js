import React from 'react'
import Auth from '../../lib/auth'
import { Link } from 'react-router-dom'


class Navbar extends React.Component {
  constructor(){
    super()

    this.state = {

    }

    this.logout = this.logout.bind(this)
  }


  logout() {
    Auth.logout()
    this.props.history.push('/')
  }

  static isAuthenticated() {
    const payload = this.getPayload()
    if (!payload) return false
    const now = Math.round(Date.now() / 1000)
    return now < payload.exp //is right now less tahn the expiry time, true give access to site or false means youre not logged in/not valid
  }

  



  render() {
    return (
      <nav>

        <nav className="left">
          <Link to='exhibitions/new'><p>Add an exhibition?</p></Link>
          <Link to='/' onClick={this.logout}><div className='nav-item'>Logout</div></Link>
        </nav>

        <nav className="right">
          <Link to='/exhibitions'><p>{'What\'s on?'}</p></Link>
          <Link to='/exhibitions-calendar'><p>Calendar</p></Link>
          <Link to='/exhibitions-map'><p>Map</p></Link>
          <Link to='/art-news'><p>Art News</p></Link>
          <Link to='/'><i className="fas fa-home"></i></Link>
        </nav>

      </nav>
      
    )
  }
}
export default Navbar





