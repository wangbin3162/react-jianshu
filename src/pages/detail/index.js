import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreator } from './store'

class Detail extends PureComponent {
  render() {
    return (
      <div className="detail-wrap">
        <h1 className="detail-header">{this.props.title}</h1>
        <article className="detail-content" dangerouslySetInnerHTML={{ __html: this.props.content }}/>
      </div>
    )
  }

  componentDidMount() {
    // 传递params 参数
    this.props.getDetail(this.props.match.params.id)
  }
}

const mapStateToProps = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
})

const mapDispatchToProps = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreator.getDetail(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
