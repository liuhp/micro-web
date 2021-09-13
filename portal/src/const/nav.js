/*
 * @Author: your name
 * @Date: 2021-09-12 19:49:10
 * @LastEditTime: 2021-09-12 20:41:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /micro-web/portal/src/const/nav.js
 */
export const NAV_LIST = [
  {
    name: '首页',
    status: true,
    value: 0,
    url: '/subapp1',
    container:'#sub-body',
    hash: '',
  },
  {
    name: '资讯',
    status: false,
    value: 1,
    url: '/subapp2',
    container:'#sub-body',
  },
  {
    name: '视频',
    status: false,
    value: 2,
    url: '/subapp3',
    container:'#sub-body',
    hash: '',
  },
  {
    name: '选车',
    status: false,
    value: 3,
    url: '/subapp4',
    container:'#sub-body',
    hash: '',
  },
  {
    name: '新能源',
    status: false,
    value: 4,
    url: '/subapp5/',
    container:'#sub-body',
    hash: '',
  },
  {
    name: '新车',
    status: false,
    value: 5,
    url: '/subapp6/',
    container:'#sub-body',
    entry: 'http://localhost:4001',
  },
  {
    name: '排行',
    status: false,
    value: 6,
    url: '/subapp7/',
    container:'#sub-body',
    hash: '',
  },
]
