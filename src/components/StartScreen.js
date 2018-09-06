import React, { Component } from 'react'
import styled from 'styled-components'
import PlayerInput from './PlayerInput'
import Button from './Button'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

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
      <Link to="/summary" style={{ textDecoration: 'none' }}>
        <Button onClick={onStartGame}>Play!</Button>
      </Link>
    ) : (
      <h2>Please add one player and hit Enter-Button</h2>
    )
  }
}
