import * as loading from './loading'

import * as appInfo from '../store'

export const navList = [
  {
    name: 'subapp1',// 唯一
    entry: '//localhost:4001',
    loading,
    container: '#sub-body',
    activeRule: '/subapp1',
    appInfo,
  },
  {
    name: 'subapp2',
    entry: '//localhost:4001/',
    loading,
    container: '#sub-body',
    activeRule: '/subapp2',
    appInfo,
  },
  {
    name: 'subapp3',
    entry: '//localhost:4001/',
    loading,
    container: '#sub-body',
    activeRule: '/subapp3',
    appInfo,
  },
  {
    name: 'subapp4',
    entry: '//localhost:4001/',
    loading,
    container: '#sub-body',
    activeRule: '/subapp4',
    appInfo,
  },
];

