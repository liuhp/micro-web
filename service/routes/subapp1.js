/*
 * @Author: your name
 * @Date: 2021-09-09 23:00:09
 * @LastEditTime: 2021-09-10 01:08:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /micro-web/service/routes/users.js
 */
const router = require('koa-router')()

router.prefix('/subapp1') //根路径添加前缀

router.get('/getInfo', function (ctx, next) {
  ctx.body = '这句是服务端接口返回：subapp1中getInfo接口的返回'
})


module.exports = router
