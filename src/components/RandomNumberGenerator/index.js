import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  onChangeButton = () => {
    this.setState(() => ({
      randomNumber: Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="btn" onClick={this.onChangeButton}>
            Generate
          </button>
          <p className="random-number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
