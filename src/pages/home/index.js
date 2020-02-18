import React, { PureComponent } from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { connect } from 'react-redux'
import { actionCreator } from './store'
import { scrollTop, on, off } from '../../utils/dom'
import { CSSTransition } from 'react-transition-group'

class Home extends PureComponent {
  //PureComponent 即为性能优化

  render() {
    return (
      <div className="home-wrap">
        <div className="home-wrap-left">
          <img src={require('../../assets/images/banner.png')} alt="banner" className="banner"/>
          <Topic/>
          <List/>
        </div>
        <div className="home-wrap-right">
          <Recommend/>
          <Writer/>
        </div>
        <CSSTransition
          in={this.props.showBackTop}
          timeout={200}
          classNames="fade-move"
          unmountOnExit>
          <div className="back-top" onClick={this.handleScrollTop}>回到顶部</div>
        </CSSTransition>
      </div>
    )
  }

  componentDidMount() {
    this.props.getHomeData()
    on(window, 'scroll', this.props.changeBackShow)
  }

  componentWillUnmount() {
    off(window, 'scroll', this.props.changeBackShow)
  }

  handleScrollTop() {
    scrollTop(window, document.documentElement.scrollTop, 0, 1000)
  }

}

const mapStateToProps = (state) => {
  return {
    showBackTop: state.getIn(['home', 'showBackTop'])
  }
}

// 映射dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    getHomeData() {
      dispatch(actionCreator.getHomeDataAction())
    },
    changeBackShow() {
      dispatch(actionCreator.toggleBackShow(document.documentElement.scrollTop > 400))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
