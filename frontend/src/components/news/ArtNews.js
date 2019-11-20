import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


class ArtNews extends React.Component {
  constructor() {
    super()

    this.state = {
      articles: []
    }

  }

  componentDidMount(){
    this.getNews()
  }

  getNews() {
    axios.get('https://newsapi.org/v2/everything?language=en&q=art&exhibition&apiKey=4025da49e1ab46a4b79aee49112ae37c')
      .then(res => this.setState({ articles: res.data.articles }))
      .catch(err => console.log(err))
  }

  



  render() {
    console.log(this.state, 'state')
    return (
      <div className="animated fadeInUp">
        <h1 className="index-title">Art News</h1>
        <div className="index-card-wrapper">
          {this.state.articles.map((art, i) => (
      
            <div key={i}>
              <div className="card">
                <div className="card-image">
                  <img src={art.urlToImage} className="img-responsive " />
                </div>
                <div className="card-header">
                  <div className="card-title-news">{art.title}</div>
                  <div className="card-subtitle text-gray">{art.source.name}</div>
                </div>
                <div className="card-body">
                  <small>{art.publishedAt}</small>
                  <p className="news-description">{art.description}</p>
                </div>
              
                <div className="card-footer">
                  <Link to={art.url}><button className="btn btn-primary">Find out more</button></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

}
export default ArtNews


