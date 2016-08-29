import React, { Component } from 'react'
import { Select } from 'rebass'

class Home extends Component {
  _handleClick = () => {
    let select = document.querySelector("select[name='difficulty_level']")
    let difficulty = select.value
    this.props.navigate('game', difficulty)
  }
  render () {
    return <div className="Home">
    <h1>BOMBSNIFFER&trade;</h1>
      <Select
        label="Select Your Difficulty"
        name="difficulty_level"
        options={[{children: '99 BOMBS!!!', value: 2}, {children: 'MID LEVEL', value: 1}, {children: 'SLACKER', value: 0}]}
        rounded
      />
      <br />
      <button onClick={this._handleClick}>Choose Your Fate</button>
    </div>
  }
}

Home.propTypes = {
  navigate: React.PropTypes.func.isRequired
}

export default Home
