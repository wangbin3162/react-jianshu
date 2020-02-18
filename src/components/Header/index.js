import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreator } from './store'
import ListArea from './ListArea'
import { Link } from 'react-router-dom'


class Header extends Component {
  render() {
    const props = this.props
    return (
      <div className="header-wrapper">
        <Link to="/" className="logo"> </Link>
        <div className="nav">
          <div className="left">
            <Link to="/" className="nav-item active">首页</Link>
            <div className="nav-item">下载APP</div>
            <div className="search">
              <input placeholder="搜索" className={props.focused ? 'focused' : null}
                     onFocus={() => props.handleInputFocus(props.hotList)} onBlur={props.handleInputBlur}/>
              <i className={`iconfont icon-sousuo${props.focused ? ' focused' : ''}`}/>
              <ListArea show={props.focused} hotList={props.hotList} mouseIn={props.mouseIn}
                        handleMouseEnter={props.handleMouseEnter}
                        handleMouseLeave={props.handleMouseLeave}
                        handleChange={props.handleChange}
              />
            </div>
          </div>
          <div className="right">
            <div className="nav-item"><i className="iconfont icon-Aa"/></div>
            <div className="nav-item">登录</div>
          </div>
        </div>
        <div className="addition">
          <button className="register">注册</button>
          <button className="write"><i className="iconfont icon-bi"/>写文章</button>
        </div>
      </div>
    )
  }
}

// 映射props immutable 对象使用get获取
const mapStateToProps = (state) => {
  return {
    focused: state.get('header').get('focused'),
    mouseIn: state.getIn(['header', 'mouseIn']),
    hotList: state.getIn(['header', 'hotList'])
  }
}
// 映射dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      // 注意,list为传入的immutable对象hotList,这里有size方法获取长度
      if (list.size === 0) {
        // 发送异步请求获取一次列表
        dispatch(actionCreator.getHotList())
      }
      dispatch(actionCreator.getSearchFocusAction())
    },
    handleMouseEnter() {
      dispatch(actionCreator.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreator.mouseLeave())
    },
    handleInputBlur() {
      dispatch(actionCreator.getSearchBlurAction())
    },
    handleChange() {
      dispatch(actionCreator.getHotList())
    }
  }
}
// 连接
export default connect(mapStateToProps, mapDispatchToProps)(Header)
