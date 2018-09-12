import React, { Component } from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import GameInputContainer from './containers/GameInputContainer'

export default class StartScreen extends Component {
  render() {
    const gameName = 'test GameName'
    return (
      <div>
        <h1>{gameName} - Start Screen</h1>

        <GameInputContainer type="text" />
        <Link to="/setup" style={{ textDecoration: 'none' }}>
          <Button>New Game</Button>
        </Link>
      </div>
    )
  }
}
