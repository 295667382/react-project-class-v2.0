/* const CracoLessPlugin = require('craco-less');
console.log("执行了吗")
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': 'red' },
            javascriptEnabled: true,
            
          },
        },
      },
    },
  ],
  babel: {
    //支持装饰器
    plugins: [
      [
        "import",
        {
          libraryName: "antd",
          libraryDirectory: "es",
          style: true, //设置为true即是less 这里用的是css，如果是scss，则需要设置为false，否则不能正常生效
        },
      ],
    ],
  }
}; */

const CracoLessPlugin = require("craco-less");
// 需要安装两个插件：`yarn add craco-less` `yarn add babel-plugin-import` 从而实现样式的按需引入
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "orange" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  babel: {
    //支持装饰器
    plugins: [
      [
        "import",
        {
          libraryName: "antd",
          libraryDirectory: "es",
          style: true, //设置为true即是less 这里用的是css，如果是scss，则需要设置为false，否则不能正常生效
        },
      ],
    ],
  },
};