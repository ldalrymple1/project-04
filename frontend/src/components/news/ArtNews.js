import React from 'react'
import axios from 'axios'


class ArtNews extends React.Component {
  constructor() {
    super()

  }

  componentDidMount(){
    this.getNews()
  }

  getNews() {
    axios.get(`https://cors-anywhere.herokuapp.com/https://content.guardianapis.com/search?q=art&api-key=${process.env.GUARDIAN_API_KEY}`)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }



  render() {
    return (
      <h3>ArtNews</h3>
    )
  }

}
export default ArtNews


