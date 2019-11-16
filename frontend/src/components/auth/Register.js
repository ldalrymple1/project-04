import React from 'react'
import 'spectre.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/auth'

class Register extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        email: '',
        username: '',
        password: '',
        passwordConfirmation: ''
      }

    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value } }) {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit(e) {
    console.log('clicked')
    e.preventDefault()
    axios.post('/api/register', this.state.data)
      .then(() => this.props.history.push('/gallery-login'))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state)
    return (
      <div className="reg-form-wrapper">
        
        <form onSubmit={this.handleSubmit}>
          <h3>Register</h3>
          <div className="row">
            <div className="twelve columns">
              <label>Email</label>
              <input 
                className="u-full-width"
                type="email"
                placeholder="test@mailbox.com"
                name="email"
                onChange={this.handleChange} 
              >
              </input>
            </div>
          </div>
          <div className="row">
            <div className="twelve columns">
              <label>Username</label>
              <input 
                className="u-full-width" 
                type="text" 
                placeholder="Username"
                name="username"
                onChange={this.handleChange} 
              >
              </input>
            </div>
          </div>
          <div className="row">
            <div className="twelve columns">
              <label>Password</label>
              <input 
                className="u-full-width" 
                type="password" 
                placeholder="Password"
                name="password"
                onChange={this.handleChange} 
              > 
              </input>
            </div>
          </div>
          <div className="row">
            <div className="twelve columns">
              <label>Password Confirmation</label>
              <input 
                className="u-full-width" 
                type="password" 
                placeholder="Password Confirmation"
                name="passwordConfirmation"
                onChange={this.handleChange} 
              >   
              </input>
            </div>
          </div>
          <button>Register</button>
          <Link to='/gallery-login'><p>Already have an account?</p></Link>
        </form>  
      </div>

    
    )
  }

}

export default Register 