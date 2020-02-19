import * as actionTypes from './actionTypes'
import axios from 'axios'

const setLogin = (isLogin) => ({
  type: actionTypes.LOGIN,
  isLogin: true
})

export const login = (username, password) => {
  return (dispatch) => {
    axios.post('/login/login', { username, password }).then(res => {
      if (res.data.code === 0) {
        dispatch(setLogin())
      } else {
        alert(res.data.message)
      }
    })
  }
}

export const logout = () => ({
  type: actionTypes.LOGOUT,
  isLogin: false
})
