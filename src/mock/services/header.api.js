import Mock from 'mockjs'
import { builder } from '../util'
import util from '../../utils/util'

const getHotList = (options) => {
  const list = ['锦鲤', '杠精', '设计', '父亲节', '女人和衣服', 'Vue', 'React', '高考', '区块链', 'JSX',
    'Redux', 'Redux-thunk', 'Redux-saga', 'immutable', 'react-immutable']
  const randomList = util.shuffle(list).splice(0, 10)
  return builder(randomList)
}

Mock.mock(/\/api\/hotList/, 'get', getHotList)
