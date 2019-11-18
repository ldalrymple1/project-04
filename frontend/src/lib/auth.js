class Auth {
  static setToken(token) {
    localStorage.setItem('token', token)
  }

  // static setName(name) {
  //   localStorage.setItem('name', name)
  // }

  static getToken() {
    return localStorage.getItem('token')
  }

  static logout() {
    localStorage.removeItem('token')
    // localStorage.removeItem('name')
  }

  static getPayload() {
    const token = this.getToken()
    if (!token) return false //if no token 
    const parts = token.split('.') //splitting at the dots in the token
    if (parts.length < 3) return false
    return JSON.parse(atob(parts[1]))
  }

  //what we are going to call to render stuff
  static isAuthenticated() {
    const payload = this.getPayload()
    if (!payload) return false
    const now = Math.round(Date.now() / 1000)
    return now < payload.exp //is right now less tahn the expiry time, true give access to site or false means youre not logged in/not valid
  }

  

}

export default Auth




// To get this function in other comps write the below 
// Auth.getToken()