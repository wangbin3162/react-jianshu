import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class Writer extends PureComponent {
  render() {
    return (
      <div className="writer-wrap">
        <div className="writer-title">推荐作者</div>
        {
          this.props.list.map(item => {
            return (
              <div className="writer-item" key={item.get('id')}>
                <div className="avatar">
                  <img src={item.get('imgUrl')} alt=""/>
                </div>
                <a className="follow" href="/">+ 关注</a>
                <h2 className="name">{item.get('name')}</h2>
                <p>{item.get('desc')}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'writerList'])
  }
}

export default connect(mapStateToProps, null)(Writer)
