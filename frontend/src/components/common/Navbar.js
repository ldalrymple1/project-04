import React from 'react'
import Auth from '../../lib/auth'
import { Link, withRouter } from 'react-router-dom'


class Navbar extends React.Component {
  constructor(){
    super()

    this.logout = this.logout.bind(this)
  }

  logout() {
    Auth.logout()
    this.props.history.push('/')
  }

  // ADD CALENDAR VIEW

  render() {
    return (
      <nav>

        <nav className="left">
          {Auth.isAuthenticated() && <Link to='exhibitions/new'><i className="fas fa-plus"></i><span className="nav-plus">exhibition</span></Link>}
          {Auth.isAuthenticated() &&  <Link to='/' onClick={this.logout}><div className='nav-item'>Logout</div></Link>}
        </nav>

        <nav className="right">
          <Link to='/exhibitions'><p>{'What\'s on?'}</p></Link>
          <Link to='/exhibitions-map'><p>Map</p></Link>
          <Link to='/art-news'><p>Art News</p></Link>
          <Link to='/'><i className="fas fa-home"></i></Link>
        </nav>

      </nav>
      
    )
  }
}
export default withRouter(Navbar)




// {Auth.isAuthenticated()}
// <Link to='/exhibitions-calendar'><p>Calendar</p></Link>
