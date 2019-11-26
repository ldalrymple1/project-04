import React from 'react'
import axios from 'axios'


class ArtNews extends React.Component {
  constructor() {
    super()

    this.state = {
      articles: [],
      animateReady: null
    }

  }

  componentDidMount(){
    this.getNews()
  }

  getNews() {
    axios.get(`https://newsapi.org/v2/everything?language=en&q=art&exhibition&apiKey=${process.env.NEWS_API_KEY}`)
      .then(res => {
        console.log(res.data)
        this.setState({ articles: res.data.articles })
      })
      .catch(err => console.log(err))
  }

  render() {
    if (!this.state.articles) return null
    setTimeout(() => {
      this.setState({ animateReady: true })
    }, 200)
    return (
      <div className={`${this.state.animateReady ? 'animated fadeInUp' : 'hide' }`}>
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
                  <a href={art.url}><button className="btn btn-primary">Find out more</button></a>
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


