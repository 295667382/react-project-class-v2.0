import React, { Component } from 'react'
import { Button, Form, Input, InputNumber,message } from 'antd';
import { Route, Routes, useNavigate } from "react-router-dom";
import './index.less'
import logo from '../../assets/logo.png'
import { reqLogin } from '../../api';
import storageUtils from '../../storageUtils';

export const withNavigation = (Component) => {
  return (props) => <Component {...props} navigate={useNavigate()} />;
};
/*  用户名/密码的的合法性要求
    1). 必须输入
    2). 必须大于等于 4 位
    3). 必须小于等于 12 位
    4). 必须是英文、数字或下划线组成 */
class Login extends Component {
    onFinish=async(value)=>{
        /* const {username,password}=e.user */
        const {user}=value
        const {username,password}=user
        const response=await reqLogin(username,password)
        if(response.status===0){
            message.info("登录成功") 
            storageUtils.saveUser(response.data)
            this.props.navigate("/home")
        }else{
            const {msg}=response
            message.error(msg)
        } 
       
        console.log(username,password)
    }
    //用户名校验，必须大于等于4位小于12位
    validatorUsername=(_,value)=>{
        if(value){
            const nameLength=value.length
            if(nameLength>=4&&nameLength<=12){
                return Promise.resolve();
            }
            return Promise.reject(new Error('用户名需要在4-12位'));
        }
    }
     //密码校验，必须是英文、数字或下划线组成
     validatorPassword=(_,value)=>{
        if(value){
            //const rule = /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{4,12}$/;
            if(value){
                const nameLength=value.length
                if(nameLength>=4&&nameLength<=12){
                    return Promise.resolve();
                }
                return Promise.reject(new Error('密码需要在4-12位'));
        }
     }
    }
    render() {
    const layout = {
        labelCol: { span: 5 },
        wrapperCol: { span: 15 },
    };
    const validateMessages={

    }
    return (
      <div className='login'>
        <div className='login-header'>
            <img src={logo}/>
            <h1>React 项目: 后台管理系统</h1>
        </div>
        <div className="login-content">
            <h3>用户登陆</h3>
            <Form {...layout} name="nest-messages" onFinish={this.onFinish} validateMessages={validateMessages}>
            <Form.Item name={['user', 'username']} label="用户名" rules={[{ required: true,message: '用户名不能为空'},{validator:this.validatorUsername}]}>
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'password']} label="密码" rules={[{ required: true,message: '密码不能为空',  },{validator:this.validatorPassword}]}>
            <Input type="password" name="password" autoComplete="on"/>
            </Form.Item>
            <Form.Item
            wrapperCol={{
                offset: 2,
                span: 28,
            }}>
            <Button style={{width:'250px'}} type="primary" htmlType="submit">
            登陆
            </Button>
            </Form.Item>
            </Form>

        </div>
        
      </div>
    )
  }
}
export default withNavigation(Login);