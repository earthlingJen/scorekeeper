import React, { Component } from 'react'
import styled from 'styled-components'
import Button from './Button'
import PlayerCard from './PlayerCard'
import PlayerInput from './PlayerInput'
import { load, save } from '../services'

const StyledApp = styled.div`
  text-align: center;
  border: 1px solid;
  height: 90vh;
  width: 300px;
`

const SimpleButton = styled.button`
  border: 1px solid blue;
`

class App extends Component {
  state = {
    showStartScreen: true,
    players: load('players') || [],
  }

  updateScore = (index, value) => {
    const players = this.state.players
    const player = players[index]

    this.setState(
      {
        players: [
          ...players.slice(0, index),
          { ...player, score: player.score + value },
          ...players.slice(index + 1),
        ],
      },
      this.savePlayers
    )
  }

  savePlayers() {
    save('players', this.state.players)
  }

  resetScore = () => {
    this.setState(
      {
        players: this.state.players.map(player => ({ ...player, score: 0 })),
      },
      this.savePlayers
    )
  }

  startGame = () => {
    if (this.state.players.length > 0) {
      this.setState({
        showStartScreen: false,
      })
    }
  }

  addPlayer = name => {
    const players = this.state.players

    this.setState(
      {
        players: [...players, { name: name, score: 0 }],
      },
      this.savePlayers
    )
  }

  renderWarningOrPlaybutton() {
    return this.state.players.length ? (
      <Button handleClick={this.startGame}>Play!</Button>
    ) : (
      <div>Please add one player and hit Enter-Button</div>
    )
  }

  deletePlayer = index => {
    const players = this.state.players

    this.setState(
      {
        players: [...players.slice(0, index), ...players.slice(index + 1)],
      },
      this.savePlayers
    )
  }

  deleteAllPlayers = () => {
    this.setState(
      {
        players: [],
      },
      this.savePlayers
    )
  }

  renderStartScreen() {
    const { players } = this.state
    return (
      <div>
        <h1>StartScreen</h1>
        {players.map((player, index) => (
          <div key={index}>
            {player.name}
            <SimpleButton onClick={() => this.deletePlayer(index)}>
              &times;
            </SimpleButton>
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

  backToStartScreen = () => {
    this.setState({
      showStartScreen: true,
    })
  }

  renderActiveGame() {
    return (
      <React.Fragment>
        <h2>Score keeper</h2>
        {this.state.players.map((player, index) => (
          <PlayerCard
            key={index}
            title={player.name}
            score={player.score}
            onUpdate={score => this.updateScore(index, score)}
          />
        ))}
        <Button handleClick={this.resetScore}>Reset Scores</Button>
        <Button handleClick={this.backToStartScreen}>Back</Button>
      </React.Fragment>
    )
  }

  render() {
    const { showStartScreen } = this.state
    return (
      <StyledApp>
        {showStartScreen ? this.renderStartScreen() : this.renderActiveGame()}
      </StyledApp>
    )
  }
}

export default App
