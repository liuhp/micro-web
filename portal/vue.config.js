
module.exports = {
  devServer: {
    open: true,  // npm run serve后自动打开页面
    host: 'localhost',  // 匹配本机IP地址(默认是0.0.0.0)
    port: 4002, // 开发服务器运行端口号
    proxy: null,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
}
