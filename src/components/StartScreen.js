import React, { Component } from 'react'
import styled from 'styled-components'
import PlayerInput from './PlayerInput'
import Button from './Button'

const SimpleButton = styled.button`
  border: 1px solid blue;
`

export default class StartScreen extends Component {
  render() {
    const { players } = this.state
    return (
      <div>
        <h1>StartScreen</h1>
        {players.map((player, index) => (
          <div key={index}>
            {player.name}
            <SimpleButton onClick={onDeletePlayer(index)}>&times;</SimpleButton>
          </div>
        ))}
        <PlayerInput onSubmit={this.addPlayer} />
        {this.renderWarningOrPlaybutton()}
        <SimpleButton onClick={this.deleteAllPlayers}>
          Delete all Players
        </SimpleButton>
      </div>
    )
  }

  renderWarningOrPlaybutton() {
    return this.state.players.length ? (
      <Button handleClick={this.startGame}>Play!</Button>
    ) : (
      <div>Please add one player and hit Enter-Button</div>
    )
  }
}
