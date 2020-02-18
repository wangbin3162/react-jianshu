import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class Recommend extends PureComponent {
  render() {
    return (
      <div className="recommend">
        {
          this.props.list.map(item => {
            return (
              <a target="_blank" href="/" key={item.get('id')}>
                <img src={item.get('imgUrl')} alt="banner"/>
              </a>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'recommendList'])
  }
}


export default connect(mapStateToProps, null)(Recommend)
