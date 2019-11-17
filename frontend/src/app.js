import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

// EXHIBITIONS
import CardExhibitionsIndex from './components/exhibitions/CardExhibitionsIndex'
import MapExhibitionsIndex from './components/exhibitions/MapExhibitionsIndex'
import CalendarExhibitionsIndex from './components/exhibitions/CalendarExhibitionsIndex'
import ExhibitionShow from './components/exhibitions/ExhibitionShow'

// NEWS 
import ArtNews from './components/news/ArtNews'

// COMMON
import Home from './components/common/Home'

// AUTH
import Register from './components/auth/Register'
import Login from './components/auth/Login'

// IMPORT STYLES 
import './style.scss'
import 'spectre.css'



const App = () => (
  <BrowserRouter>
    <main>
      <nav>
        <Link to='/exhibitions'><p>IndexPage</p></Link>
        <Link to='/exhibitions-calendar'><p>Calendar</p></Link>
        <Link to='/exhibitions-map'><p>Map</p></Link>
        <Link to='/art-news'><p>Art News</p></Link>
        <Link to='/'><p>HomePage</p></Link>
      </nav>
      <Switch>
        <Route path='/exhibitions/:id' component={ExhibitionShow} />
        <Route path='/gallery-login' component={Login} />
        <Route path='/gallery-register' component={Register} />
        <Route path='/exhibitions-calendar' component={CalendarExhibitionsIndex} />
        <Route path='/exhibitions-map' component={MapExhibitionsIndex} />
        <Route path='/exhibitions' component={CardExhibitionsIndex} />
        <Route path='/art-news' component={ArtNews} />
        <Route exact path='/' component={Home} />
        <Route exact path='' component={Home} />
      </Switch>
    </main>
  
  
  
  </BrowserRouter>







)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

















// console.log('hello world')

// fetch('api/exhibitions')
//   .then(res => res.json())
//   .then(res => console.log(res))
//   .then(err => console.log(err))


