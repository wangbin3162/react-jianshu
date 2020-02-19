import * as actionTypes from './actionTypes'
import axios from 'axios'

const setDetailData = (data) => ({
  type: actionTypes.SET_DETAIL,
  data
})

// 获取detail 数据
export const getDetail = (id) => {
  return (dispatch) => {
    axios.get('/api/detail', { params: { id } }).then(res => {
      const data = res.data.data
      dispatch(setDetailData(data))
    })
  }
}
