import React, { Component } from 'react'
import { formateDate } from '../../utils/formateDate'

export default class Time extends Component {
    state={
        time:''
    }
   
    componentDidMount(){
        this.intervalId=setInterval(()=>{
            this.setState({time:formateDate(Date.now())})
        },1000)
    }
    render() {
    const {time}=this.state
    return (
      <div>{time}</div>
    )
  }
}
