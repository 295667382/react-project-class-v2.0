import './App.less';

import {Button, message,Input} from 'antd'

// 导入 Route, Routes 组件
import { Route, Routes } from 'react-router-dom';

import Login from './pages/login/login';
import Admin from './pages/admin/admin';

function App() {
  return (
    <Routes>
	  {/* 页面默认导航到 Home 组件(页面上显示 Home Compontent) */}
      <Route path='/*' element={<Admin />} />
	  {/* 在地址输入 http://localhost:3000/about 导航到 About 组件(页面上显示 About Compontent) */}
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
