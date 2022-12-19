import React, { Component } from 'react'
import './index.less'
import Time from '../time/time'


export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='header-top'>
            <span>欢迎，admin</span>
            <span className="quit">退出</span>
        </div>
        <div className="header-bootom">
        <div className="header-bootom-left">
            <span>品类管理</span>
        </div>
        <div  className="header-bootom-right">
            <Time/>
        </div>
        <span className="weather">天晴</span>
        </div>
        
      </div>
    )
  }
}
