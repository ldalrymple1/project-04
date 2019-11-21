import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

// TO DO: BORDER BOX RED FOR ERROR HANDLER

class Login extends React.Component {
  constructor(){
    super()

    this.state = {
      data: {
        email: '',
        password: ''
      },
      error: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange({ target: { name, value } }) {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data, error: '' })
  }

  handleSubmit(e) {
    console.log('clicked')
    e.preventDefault()
    axios.post('/api/login', this.state.data)
      .then(res => {
        Auth.setToken(res.data.token)
        this.props.history.push('/exhibitions')
      })
      .catch(() => this.setState({ error: 'Incorrect Credentials' }))
  }

  render() {
    console.log(this.state)
    return (
      <div className="login-form-wrapper">
        
        <form onSubmit={this.handleSubmit}>
          <h3 className="register-title">Login</h3>
          <div className="row">
            <div className="twelve columns">
              <label>Email</label>
              <input
                className={`u-full-width ${this.state.error} ? : 'error' : '' `}
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
              <label>Password</label>
              <input 
                className={`u-full-width ${this.state.error} ? : 'error' : '' `}
                type="password" 
                placeholder="Password"
                name="password"
                onChange={this.handleChange} 
              > 
              </input>
            </div>
          </div>
          <div>
            {this.state.error && <small className="error">{this.state.error}</small>}
          </div>
          
          <button className="login">Login</button>
        </form>  
      </div>
    )
  } 
}

export default Login
