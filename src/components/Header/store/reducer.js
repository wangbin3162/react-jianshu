import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

// header 独立的状态管理,类似于vuex中的module模块,单独管理自己的状态和action
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  hotList: []
})

export default function (state = defaultState, action) {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set('focused', true) // 相当于返回了一个全新的数据并设置,感觉还是类似于拷贝
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false)
    case actionTypes.SET_HOT_LIST:
      // 问题,创建state的时候会转换为immutable对象,且,数组也会初始化immutable数组
      return state.set('hotList', action.data)
    case actionTypes.MOUSE_ENTER:
      return state.set('mouseIn', true)
    case actionTypes.MOUSE_LEAVE:
      return state.set('mouseIn', false)
    default:
      return state
  }
}
