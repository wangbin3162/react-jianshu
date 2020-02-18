import * as actionTypes from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'

const setHomeData = (data) => ({
  type: actionTypes.SET_HOME_DATA,
  data
})

const addHomeList = (list) => ({
  type: actionTypes.ADD_HOME_LIST,
  list: fromJS(list)
})

// 获取home 数据
export const getHomeDataAction = () => {
  return (dispatch) => {
    axios.get('/api/home').then(res => {
      const data = res.data.data
      dispatch(setHomeData(data))
    })
  }
}

// 加载更多
export const getMoreListAction = () => {
  return (dispatch) => {
    axios.get('/api/addList').then(res => {
      const data = res.data.data
      dispatch(addHomeList(data))
    })
  }
}

// 设置返回顶部显示
export const toggleBackShow = (show) => ({
  type: actionTypes.SET_BACK_TOP_SHOW,
  show
})
