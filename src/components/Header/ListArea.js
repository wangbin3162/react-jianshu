import { CSSTransition } from 'react-transition-group'
import React, { Component } from 'react'

class ListArea extends Component {
  render() {
    const props = this.props
    return (
      <CSSTransition in={props.show || props.mouseIn} classNames="fade" timeout={300} unmountOnExit>
        <div className="search-info"
             onMouseEnter={props.handleMouseEnter}
             onMouseLeave={props.handleMouseLeave}>
          <div className="search-info-title" data-flex="main:justify">
            <span>热门搜索</span>
            <span style={{ cursor: 'pointer' }}
                  onClick={this.changeHot.bind(this)}>
              <i className="iconfont icon-spin" ref={(icon) => {
                this.spinIcon = icon
              }}
                 style={{
                   display: 'inline-block',
                   fontSize: '12px',
                   marginRight: '4px',
                   transition: 'all .5s ease-in'
                 }}/>
              换一批
            </span>
          </div>
          {
            props.hotList.map(item => {
              return <a href="/" className="search-info-item" key={item}>{item}</a>
            })
          }
        </div>
      </CSSTransition>
    )
  }

  changeHot() {
    let angle = this.spinIcon.style.transform.replace(/[^0-9]/ig, '')
    if (angle) {
      angle = parseInt(angle, 10)
    } else {
      angle = 0
    }
    this.spinIcon.style.transform = `rotate(${-(angle + 360)}deg)`
    this.props.handleChange()
  }
}

export default ListArea
