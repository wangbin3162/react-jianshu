import React from 'react'
import Header from './components/Header'
import store from './store'
import { BrowserRouter, Route } from 'react-router-dom'
import loadable from './loadable'
import { Provider } from 'react-redux'

const Home = loadable(() => import('./pages/home'))
const Login = loadable(() => import('./pages/login'))
const Detail = loadable(() => import('./pages/detail'))
const Write = loadable(() => import('./pages/write'))

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header/>
        <div>
          {/* 如果是/detail/id 这种形式,path=/detail/:id 叫做动态路由,获取参数时获取props.match.params 即可  */}
          {/* 如果页面通过/detail?id=xxx 这种形式,patch即原始的/detail 获取参数应该从props中的location search 中解析,比较麻烦*/}
          <Route exact component={Home} path="/"/>
          <Route exact component={Login} path="/login"/>
          <Route exact component={Detail} path="/detail/:id"/>
          <Route exact component={Write} path="/write"/>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
