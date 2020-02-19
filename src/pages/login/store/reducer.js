import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

// header 独立的状态管理,类似于vuex中的module模块,单独管理自己的状态和action
const defaultState = fromJS({
  login: false
})

export default function (state = defaultState, action) {
  switch (action.type) {
    case actionTypes.LOGIN:
      return state.set('login', action.isLogin)
    case actionTypes.LOGOUT:
      return state.set('login', false)
    default:
      return state
  }
}
