import React, { Component } from 'react'
import styled from 'styled-components'
import PlayerInput from './PlayerInput'
import Button from './Button'

const SimpleButton = styled.button`
  border: 1px solid blue;
`

export default class StartScreen extends Component {
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
          <div key={index}>
            {player.name}
            <SimpleButton onClick={() => onDeletePlayer(index)}>
              &times;
            </SimpleButton>
          </div>
        ))}
        <PlayerInput onSubmit={onAddPlayer} />
        {this.renderWarningOrPlaybutton()}
        <SimpleButton onClick={onDeleteAllPlayers}>
          Delete all Players
        </SimpleButton>
      </div>
    )
  }

  renderWarningOrPlaybutton() {
    const { players, onStartGame } = this.props
    return players.length ? (
      <Button onClick={onStartGame}>Play!</Button>
    ) : (
      <div>Please add one player and hit Enter-Button</div>
    )
  }
}
