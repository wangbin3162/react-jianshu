import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

// header 独立的状态管理,类似于vuex中的module模块,单独管理自己的状态和action
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: [],
  showBackTop: false
})

export default function (state = defaultState, action) {
  switch (action.type) {
    case actionTypes.SET_HOME_DATA:
      //注意:这里需要将js获取的普通js对象,转换为immutable对象
      return state.merge({
        topicList: fromJS(action.data.topicList),
        articleList: fromJS(action.data.articleList),
        recommendList: fromJS(action.data.recommendList),
        writerList: fromJS(action.data.writerList)
      })
    case actionTypes.ADD_HOME_LIST:
      //注意:这里需要将js获取的普通js对象,转换为immutable对象
      return state.set('articleList', state.get('articleList').concat(action.list))
    case actionTypes.SET_BACK_TOP_SHOW:
      //注意:这里需要将js获取的普通js对象,转换为immutable对象
      return state.set('showBackTop', action.show)
    default:
      return state
  }
}
