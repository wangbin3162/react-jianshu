import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class Topic extends PureComponent {
  render() {
    return (
      <div className="topic-wrap">
        {
          this.props.topicList.map(item => {
            return (
              <div className="topic-item" key={item.get('id')}>
                <img src={item.get('imgUrl')} alt="topic"/>
                <span>{item.get('title')}</span>
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
    topicList: state.getIn(['home', 'topicList'])
  }
}

export default connect(mapStateToProps, null)(Topic)
