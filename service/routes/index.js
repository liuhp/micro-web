/*
 * @Author: your name
 * @Date: 2021-09-09 23:00:09
 * @LastEditTime: 2021-09-09 23:09:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /micro-web/service/routes/index.js
 */
const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  ctx.body = 'koa2 index!!!'
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
