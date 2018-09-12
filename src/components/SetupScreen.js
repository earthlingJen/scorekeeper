import React, { Component } from 'react'
import styled from 'styled-components'
import Button from './Button'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import PlayerInputContainer from './containers/PlayerInputContainer'

const SimpleButton = styled.button`
  border: 1px solid blue;
`

export default class SetupScreen extends Component {
  static propTypes = {
    players: PropTypes.arrayOf(PropTypes.object),
    onDeleteAllPlayers: PropTypes.func,
    onDeletePlayer: PropTypes.func,
    onStartGame: PropTypes.func,
  }
  render() {
    const { players, onDeletePlayer, onDeleteAllPlayers } = this.props
    return (
      <div>
        <h1>(Game name) - Setup Screen</h1>
        {players.map((player, index) => (
          <div data-test-id="SetupScreen-player" key={index}>
            {player.name}
            <SimpleButton
              data-test-id="SetupScreen-delete-player"
              onClick={() => onDeletePlayer(index)}
            >
              &times;
            </SimpleButton>
          </div>
        ))}
        <PlayerInputContainer />
        {this.renderWarningOrPlaybutton()}
        <SimpleButton
          data-test-id="SetupScreen-delete-all"
          onClick={onDeleteAllPlayers}
        >
          Delete all Players
        </SimpleButton>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <SimpleButton>Back to start</SimpleButton>
        </Link>
      </div>
    )
  }

  renderWarningOrPlaybutton() {
    const { players } = this.props
    return players.length ? (
      <div>
        <Link to="/summary" style={{ textDecoration: 'none' }}>
          <Button>Play!</Button>
        </Link>
      </div>
    ) : (
      <h2 data-test-id="SetupScreen-hint">
        Please add one player and hit Enter-Button
      </h2>
    )
  }
}
