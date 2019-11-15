import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

// EXHIBITIONS
import CardExhibitionsIndex from './components/exhibitions/CardExhibitionsIndex'
import MapExhibitionsIndex from './components/exhibitions/MapExhibitionsIndex'
import CalendarExhibitionsIndex from './components/exhibitions/CalendarExhibitionsIndex'

// COMMON
import Home from './components/common/Home'

// IMPORT STYLES 
import './style.scss'
import 'spectre.css'



const App = () => (
  <BrowserRouter>
    <main>
      <nav>
        <Link to='/exhibitions'><p>IndexPage</p></Link>
        <Link to='/exhibitions-calendar'><p>CalendarIndexPage</p></Link>
        <Link to='/exhibitions-map'><p>MapIndexPage</p></Link>
        <Link to='/'><p>HomePage</p></Link>
      </nav>
      <Switch>
        <Route path='/exhibitions-calendar' component={CalendarExhibitionsIndex} />
        <Route path='/exhibitions-map' component={MapExhibitionsIndex} />
        <Route path='/exhibitions' component={CardExhibitionsIndex} />
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


