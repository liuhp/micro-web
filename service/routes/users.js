/*
 * @Author: your name
 * @Date: 2021-09-09 23:00:09
 * @LastEditTime: 2021-09-10 00:49:15
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /micro-web/service/routes/users.js
 */
const router = require('koa-router')()

router.prefix('/users') //根路径添加前缀

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
