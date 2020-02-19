import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from '../components/Header/store'
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as detailReducer } from '../pages/detail/store'
import { reducer as loginReducer } from '../pages/login/store'

// 类似于vuex的module合并,会将这部分的内容封装至不同的参数下单独管理即header:{header单独的state状态管理}
export default combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer
})
