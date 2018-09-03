import React from 'react'
import Star from './Star'

class Rating extends React.Component {
  renderStars() {
    const { callback, rating } = this.props

    return Array(5)
      .fill()
      .map((item, index) => (
        <Star
          key={index}
          onClick={() => callback(index + 1)}
          filled={index < rating}
        />
      ))
  }

  render() {
    return <React.Fragment>{this.renderStars()}</React.Fragment>
  }
}

export default Rating
