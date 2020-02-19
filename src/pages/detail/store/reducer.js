import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

// header 独立的状态管理,类似于vuex中的module模块,单独管理自己的状态和action
const defaultState = fromJS({
  title: '',
  content: ''
})

export default function (state = defaultState, action) {
  switch (action.type) {
    case actionTypes.SET_DETAIL:
      return state.merge({
        title: action.data.title,
        content: action.data.content
      })
    default:
      return state
  }
}
