import React, { Component } from 'react'
import styled from 'styled-components'
import PlayerInput from './PlayerInput'
import Button from './Button'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const SimpleButton = styled.button`
  border: 1px solid blue;
`

export default class StartScreen extends Component {
  static propTypes = {
    players: PropTypes.arrayOf(PropTypes.object),
    onDeleteAllPlayers: PropTypes.func,
    onDeletePlayer: PropTypes.func,
    onAddPlayer: PropTypes.func,
    onStartGame: PropTypes.func,
  }
  render() {
    const {
      players,
      onDeletePlayer,
      onAddPlayer,
      onDeleteAllPlayers,
    } = this.props
    return (
      <div>
        <h1>Score keeper</h1>
        {players.map((player, index) => (
          <div data-test-id="StartScreen-player" key={index}>
            {player.name}
            <SimpleButton
              data-test-id="StartScreen-delete-player"
              onClick={() => onDeletePlayer(index)}
            >
              x{/*&times;*/}
            </SimpleButton>
          </div>
        ))}
        <PlayerInput onSubmit={onAddPlayer} />
        {this.renderWarningOrPlaybutton()}
        <SimpleButton
          data-test-id="StartScreen-delete-all"
          onClick={onDeleteAllPlayers}
        >
          Delete all Players
        </SimpleButton>
      </div>
    )
  }

  renderWarningOrPlaybutton() {
    const { players, onStartGame } = this.props
    return players.length ? (
      <Link to="/summary" style={{ textDecoration: 'none' }}>
        <Button onClick={onStartGame}>Play!</Button>
      </Link>
    ) : (
      <h2 data-test-id="StartScreen-hint">
        Please add one player and hit Enter-Button
      </h2>
    )
  }
}
