import React, { Component } from 'react'
import { Button, Modal } from 'antd';
import './index.less'
import Time from '../time/time'
import storageUtils from '../../storageUtils';
import { Route, Routes, useNavigate } from "react-router-dom";
export const withNavigation = (Component) => {
  return (props) => <Component {...props} navigate={useNavigate()} />;
};

class Header extends Component {
  state={
    isModalOpen:false
  }
  //点击退出，弹框
  handleExit=()=>{
    this.setState({isModalOpen:true})
  }
  //点击确认退出
  handleOk=()=>{
    this.props.navigate("/login") 
    storageUtils.removeUser()
  }
  //取消退出
  handleCancel=()=>{
    this.setState({isModalOpen:false})
  }
  render() {
    const {isModalOpen}=this.state
    return (
      <div className='header'>
        <div className='header-top'>
            <span>欢迎，admin</span>
            <span className="quit" onClick={this.handleExit}>退出</span>
            <Modal  open={isModalOpen} onOk={this.handleOk} onCancel={this.handleCancel}>
        是否确认退出？
        </Modal>
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
export default withNavigation(Header);