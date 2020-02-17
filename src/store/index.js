import { createStore, compose, applyMiddleware } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
const enhancer = composeEnhancers(
  applyMiddleware(thunk) // 使用thunk中间件
)

const store = createStore(reducer, enhancer)

export default store
