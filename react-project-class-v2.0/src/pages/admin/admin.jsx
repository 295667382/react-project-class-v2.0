import React, { Component } from 'react'
import { Layout } from 'antd';
import { Route, Routes } from 'react-router-dom';
import Header from '../../components/header/header';
import Leftnav from '../../components/LeftNav/leftnav';
import Home from '../home/home';
import Category from '../category/category';
import Product from '../../components/product/product';
import Role from '../role/role';
import User from '../user/user';
import Bar from '../charts/bar';
import Line from '../charts/line';
import Pie from '../charts/pie';
const { Footer, Sider, Content } = Layout;


export default class Admin extends Component {
  render() {
    return (
      <div>
    <Layout>
      <Sider  style={{
        overflow: 'auto',
        height: '100%',
        position: 'fixed',
        left: 0,
        top: 0,
        right:0,
        bottom: 0,
      }}>
        <Leftnav/>

      </Sider>
      <Layout style={{
        marginLeft:'200px'
      }}>
        <Header />
        <Content style={{textAlign: 'center',background:'white',color: '#aaaaaa',minHeight: '550px'}}>
        <Routes>
            {/* 页面默认导航到 Home 组件(页面上显示 Home Compontent) */}
            <Route path="/home" element={<Home/>}></Route>
            <Route path='/category' element={<Category />} />
            {/* 在地址输入 http://localhost:3000/about 导航到 About 组件(页面上显示 About Compontent) */}
            <Route path='/product' element={<Product />} />
            <Route path='/role' element={<Role />} />
            <Route path='/user' element={<User/>} />
            <Route path="/charts/bar" element={<Bar/>}></Route>
            <Route path="/charts/Line" element={<Line/>}></Route>
            <Route path="/charts/Pie" element={<Pie/>}></Route>
            </Routes>

        </Content>
        <Footer style={{textAlign: 'center',color: '#aaaaaa'}}>推荐使用谷歌浏览器，可以获得最佳页面操作体验</Footer>
      </Layout>
    </Layout> 

      </div>
    )
  }
}
