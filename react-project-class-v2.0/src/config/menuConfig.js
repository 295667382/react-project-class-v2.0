import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    HomeOutlined,
    PieChartOutlined,
    LineChartOutlined,
    BarChartOutlined,
    UserOutlined,
    SmileOutlined,
    AreaChartOutlined,
    ShoppingCartOutlined,
    ProfileOutlined
  } from '@ant-design/icons';
  const  menuList = [
      {
      label: '首页',title: '首页', key:'/home', icon: <HomeOutlined />,
      }, 
      {
      title: '商品',label:'商品',key: '/products',icon: <MailOutlined />,
      children:
       [ // 子菜单列表
        {title: '品类管理', label: '品类管理',key: '/category', icon: <ProfileOutlined />}, 
        {title: '商品管理',label: '商品管理', key: '/product', icon: <ShoppingCartOutlined />}, 
      ]}, 
      {
      title: '用户管理',label: '用户管理', key: '/user', icon: <UserOutlined />
      }, 
      {
      title: '角色管理',label: '角色管理', key: '/role', icon: <SmileOutlined />,
      },
      {
      title: '图形图表',label: '图形图表', key: '/charts', icon: <AreaChartOutlined />, 
      children: [
        {
        title: '柱形图',label: '柱形图', key: '/charts/bar', icon: <BarChartOutlined />
        }, {
        title: '折线图',label: '折线图', key: '/charts/line', icon: <LineChartOutlined />
        }, {
        title: '饼图',
        label:'饼图',
        key: '/charts/pie', icon: <PieChartOutlined />
        }, ]
        },
  ]
  export default menuList