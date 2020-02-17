// 其实就相当于Vue中的action
import * as actionTypes from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'

// 填充热门搜索 注意:这里需要将js获取的普通js对象,转换为immutable对象
const setHotListAction = (data) => ({
  type: actionTypes.SET_HOT_LIST,
  data: fromJS(data)
})

// 获取输入框focus action
export const getSearchFocusAction = () => ({
  type: actionTypes.SEARCH_FOCUS
})

// 获取输入框blur action
export const getSearchBlurAction = () => ({
  type: actionTypes.SEARCH_BLUR
})

export const mouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER
})
export const mouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE
})

// 获取热门搜索
export const getHotList = () => {
  return (dispatch) => {
    axios.get('/api/hotList').then(res => {
      const data = res.data.data
      dispatch(setHotListAction(data))
    })
  }
}
