import React, { Component } from 'react'
import { Divider, Menu, Switch } from 'antd';

import { Route, Routes, useNavigate } from "react-router-dom";
import menuList from '../../config/menuConfig';
import logo from '../../assets/logo.png'
import './index.less'
export const withNavigation = (Component) => {
  return (props) => <Component {...props} navigate={useNavigate()} />;
};

class Leftnav extends Component {
    state={
        collapsed:true
    }
    //点击触发
    handleClick=({ item, key, keyPath, domEvent })=>{
   /*      console.log("this.props",this.props,
        "==============item===========",item,
    "==============key==============:",
    key,"==============keyPath==============:",
    keyPath,"==============domEvent==============",domEvent) */
    this.props.navigate(key)
    }
    render() {
        const {collapsed}=this.state
    return (
      <div className='left-nav'>
        <div className='left-nav-header'>
            <img className='logo' src={logo} alt="logo"/>
            <h1>后台管理</h1>
        </div>
        <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={menuList}
        onClick={this.handleClick}
      />
      </div>
    )
  }
}
export default withNavigation(Leftnav);