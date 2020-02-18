import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreator } from '../store'
import { Link } from 'react-router-dom'

class List extends PureComponent {
  render() {
    return (
      <div className="list">
        {
          this.props.articleList.map((item, index) => {
            return (
              <Link to="/detail" className="list-item" key={index}>
                <div className="list-info">
                  <div className="title">{item.get('title')}</div>
                  <p className="desc">{item.get('desc')}</p>
                  <div className="meta">
                    <span className="nickname mr-10">{item.get('nickname')}</span>
                    <span className=" mr-10">阅读量: {item.get('read')}</span>
                    <span>喜欢: {item.get('like')}</span>
                  </div>
                </div>
                <img className="pic" src={item.get('imgUrl')} alt="list-item"/>
              </Link>
            )
          })
        }
        <div className="load-more" onClick={this.props.getMoreList}>阅读更多</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    articleList: state.getIn(['home', 'articleList'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMoreList() {
      dispatch(actionCreator.getMoreListAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
