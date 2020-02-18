import React from 'react'
import Header from './components/Header'
import store from './store'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header/>
        <div>
          <Route exact component={Home} path="/"/>
          <Route exact component={Detail} path="/detail"/>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
