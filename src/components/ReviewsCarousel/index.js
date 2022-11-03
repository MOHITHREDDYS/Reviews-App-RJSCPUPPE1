// Write your code here

import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {count: 0}

  onClickingLeftArrow = () => {
    const {count} = this.state
    return count > 0
      ? this.setState(prevState => ({count: prevState.count - 1}))
      : ''
  }

  onClickingRightArrow = () => {
    const {count} = this.state
    const {reviewsList} = this.props
    return count < reviewsList.length - 1
      ? this.setState(prevState => ({count: prevState.count + 1}))
      : ''
  }

  render() {
    const {reviewsList} = this.props
    const {count} = this.state

    return (
      <div className="main_container">
        <div className="container">
          <h1 className="heading">Reviews</h1>
          <div className="review_container">
            <button
              testid="leftArrow"
              type="button"
              onClick={this.onClickingLeftArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="arrow_image"
              />
            </button>
            <div className="profile_container">
              <img
                src={reviewsList[count].imgUrl}
                alt={reviewsList[count].username}
                className="profile_image"
              />
              <p className="profile_name">{reviewsList[count].username}</p>
              <p className="company_name">{reviewsList[count].companyName}</p>
              <p className="description">{reviewsList[count].description}</p>
            </div>
            <button
              testid="rightArrow"
              type="button"
              onClick={this.onClickingRightArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="arrow_image"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
