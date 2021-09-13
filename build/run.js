/*
 * @Author: your name
 * @Date: 2021-09-09 22:52:56
 * @LastEditTime: 2021-09-12 20:25:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /micro-web/build/run.js
 */

const path = require('path')
const runShell = require('./util').runShell

const filePath = {
  main: path.join(__dirname, '../portal'),
  subapp1: path.join(__dirname, '../subapp1'),
  service: path.join(__dirname, '../service'),
}


// 启动项目
function runChild () {
  Object.keys(filePath).forEach(item => {
    const childPath = filePath[item]
    runShell(`cd ${childPath} && npm start`)
  });

  console.log('start success, open browser now');
  runShell(`node ${path.join(__dirname, './openBrowser.js')}`)
}

runChild()

