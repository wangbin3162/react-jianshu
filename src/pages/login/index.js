import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreator } from './store'
import { Redirect } from 'react-router-dom'

class Login extends PureComponent {
  render() {
    if (this.props.isLogin) {
      return <Redirect to="/"/>
    }
    return (
      <div className="login-wrap" data-flex="main:center">
        <div className="login-box">
          <h4 className="t-center">Login 登录</h4>
          <input placeholder="输入用户名" ref={(input) => this.username = input}/>
          <input placeholder="输入密码" type="password" ref={(input) => this.password = input}/>
          <button onClick={() => this.props.login(this.username, this.password)}>登录</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isLogin: state.getIn(['login', 'login'])
})


const mapDispatchToProps = (dispatch) => ({
  login(usernameEl, passwordEl) {
    dispatch(actionCreator.login(usernameEl.value, passwordEl.value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
