import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './BookingCalendar.scss'
// import NewBookingButton from './NewBookingButton'
// import Scheduler, { SchedulerData, ViewTypes, DATE_FORMAT } from 'react-big-scheduler'
// import 'react-big-scheduler/lib/css/style.css'
// import moment from 'moment'
import axios from 'axios'


class CalendarExhibitionsIndex extends React.Component {
  constructor() {
    super()

    // const schedulerData = new SchedulerData('2019-11-15', ViewTypes.Week)
    // schedulerData.localeMoment.locale('en')
    // const localizer = BigCalendar.momentLocalizer(moment)

    this.state = {
      exhibitions: [],
      galleries: []
      // viewModel: schedulerData
    }  
  }

  // // let schedulerData = new SchedulerData(new moment().format(DATE_FORMAT), ViewTypes.Week)
  // let schedulerData = new SchedulerData('2019-11-15', ViewTypes.Week)
  // // const galleries = this.state.exhibitions.map(exhib => exhib.gallery)
  // // const events = this.state.exhibitions
  // schedulerData.setResources(galleries)
  // // the event array should be sorted in ascending order by event.start property, otherwise there will be some rendering errors
  // schedulerData.setEvents(events)

  // AXIOS IS ASYNCHRONOUS (AND OFTEN SLOW) SO DO THIS
  getExhibitions() {
    axios.get('/api/exhibitions')
      .then(res =>  {
        this.setState({ exhibitions: res.data })
        console.log(1, this.state.exhibitions)
      })
      .catch(err => console.log(err))
  }

  getGalleries() {
    axios.get('/api/galleries')
      .then(res =>  {
        this.setState({ galleries: res.data })
      })
      .catch(err => console.log(err))
  }



  componentDidMount() {
    this.getExhibitions()
    this.getGalleries()
  }

  setDates = () => {
    const events = []
    this.state.exhibitions.map(event => {
      return events.push({
        start: new Date(event.start),
        end: new Date(event.end),
        title: `${event.pet_name} Stay (Human: ${event.human_name})`,
        allDay: true
      })
    })
    return events
  }

  render() {
    if (!this.state.exhibitions || !this.state.galleries) return null
    const localizer = momentLocalizer(moment)
    console.log(this.state.exhibitions, 'test')
    console.log(this.state.galleries, 'galllllllls')

    return (
      <div>
        <h1>Calendar Index</h1>
        <div className="calendar-container">
          <Calendar
            localizer={localizer}
            events={this.setDates()}
            startAccessor="start"
            endAccessor="end"
          />
        </div>
       
      </div>
        

    )
  }


}

export default CalendarExhibitionsIndex

{/* <Scheduler 
          prevClick={this.prevClick}
          nextClick={this.nextClick}
          onSelectDate={this.onSelectDate}
          onViewChange={this.onViewChange}
          eventItemClick={this.eventClicked}
        />
         */}
// let resources = [

//   {
//      id: 'r1',
//      name: 'Resource1'
//   },
//   {
//      id: 'r2',
//      name: 'Resource2'
//   },
//   {
//      id: 'r3',
//      name: 'Resource3'
//   }

// ]

// {console.log(this.state.viewModel)}
// <Scheduler schedulerData={this.state.viewModel}
//   prevClick={this.prevClick}
//   nextClick={this.nextClick}
//   onSelectDate={this.onSelectDate}
//   onViewChange={this.onViewChange}
//   eventItemClick={this.eventClicked}
// />

// prevClick = (schedulerData) => {
//   schedulerData.prev()
//   schedulerData.setEvents(this.state.exhibitions)
//   this.setState({
//     viewModel: schedulerData
//   })
// }

// nextClick = (schedulerData) => {
//   schedulerData.next()
//   schedulerData.setEvents(this.state.exhibitions)
//   this.setState({
//     viewModel: schedulerData
//   })
// }

// onViewChange = (schedulerData, view) => {
//   schedulerData.setViewType(view.viewType, view.showAgenda, view.isEventPerspective)
//   schedulerData.setEvents(this.state.exhibitions)
//   this.setState({
//     viewModel: schedulerData
//   })
// }

// onSelectDate = (schedulerData, date) => {
//   schedulerData.setDate(date)
//   schedulerData.setEvents(this.state.exhibitions)
//   this.setState({
//     viewModel: schedulerData
//   })
// }