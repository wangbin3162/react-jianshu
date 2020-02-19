import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Write extends PureComponent {
  render() {
    if (this.props.isLogin) {
      return <div>Write</div>
    }
    return (
      <Redirect to="/login"/>
    )
  }
}

const mapStateToProps = (state) => ({
  isLogin: state.getIn(['login', 'login'])
})

export default connect(mapStateToProps, null)(Write)
