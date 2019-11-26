// GENERAL 
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

// EXHIBITIONS
import CardExhibitionsIndex from './components/exhibitions/CardExhibitionsIndex'
import MapExhibitionsIndex from './components/exhibitions/MapExhibitionsIndex'
import CalendarExhibitionsIndex from './components/exhibitions/CalendarExhibitionsIndex'
import ExhibitionShow from './components/exhibitions/ExhibitionShow'
import ExhibitionNew from './components/exhibitions/ExhibitionNew'

// CATEGORIES
import CategoryShow from './components/categories/CategoryShow'

// GALLERIES 
import GalleryShow from './components/galleries/GalleryShow'

// NEWS 
import ArtNews from './components/news/ArtNews'

// COMMON
import Home from './components/common/Home'
import Navbar from './components/common/Navbar'

// AUTH
import Register from './components/auth/Register'
import Login from './components/auth/Login'

// IMPORT STYLES 
import './style.scss'
import 'spectre.css'

const App = () => (
  <BrowserRouter>

    <main>
      <Navbar />
      <Switch>
        <Route path='/exhibitions/:id' component={ExhibitionShow} />
        <Route path='/exhibitions/new' component={ExhibitionNew} />
        <Route path='/categories/:id' component={CategoryShow} />
        <Route path='/galleries/:id' component={GalleryShow} />
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


