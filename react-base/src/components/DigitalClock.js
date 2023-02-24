import React from 'react'

class DigitalColok extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      date: new Date()
    }
  }
  componentDidMount(){
    this.timer = setInterval( () => {
      this.setState({
        date: new Date()
      })
    }, 10000)
  }
  componentDidUpdate(currentProps, surrentState) {
    // console.log(surrentState)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  render() {
    return(
      <div className='disital-clock-component jumbotro'>
        <h2>{ this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

export default DigitalColok;