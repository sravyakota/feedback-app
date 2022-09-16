// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isLocked: false}

  onSettingFeedback = () => {
    this.setState({isLocked: true})
  }

  happyCustomer = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <>
        <img src={loveEmojiUrl} alt="love emoji" />
        <h1>Thank You</h1>
        <p>
          We will use your feedback to improve our customer support performance
        </p>
      </>
    )
  }

  feedbackContainers = () => {
    const {resources} = this.props

    return (
      <>
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="feedbackContainer">
          {resources.emojis.map(each => (
            <li className="semiFeedback" key={each.id}>
              <img
                src={each.imageUrl}
                className="im"
                alt={each.name}
                onClick={this.onSettingFeedback}
              />
              <p className="para">{each.name}</p>
            </li>
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {isLocked} = this.state

    return (
      <div className="bg">
        <div className="bg2">
          {isLocked ? this.happyCustomer() : this.feedbackContainers()}
        </div>
      </div>
    )
  }
}

export default Feedback
