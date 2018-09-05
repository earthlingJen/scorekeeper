import React, { Component } from 'react'
import styled from 'styled-components'
import { load, save } from '../services'
import StartScreen from './StartScreen'
import GameScreen from './GameScreen'

const StyledApp = styled.div`
  text-align: center;
  border: 1px solid;
  height: 90vh;
  width: 300px;
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
    return (
      <StartScreen
        players={this.state.players}
        onAddPlayer={this.addPlayer}
        onDeletePlayer={this.deletePlayer}
        onDeleteAllPlayers={this.deleteAllPlayers}
        onStartGame={this.startGame}
      />
    )
  }

  backToStartScreen = () => {
    this.setState({
      showStartScreen: true,
    })
  }

  renderActiveGame() {
    return (
      <GameScreen
        players={this.state.players}
        onBack={this.backToStartScreen}
        onUpdateScore={this.updateScore}
        onResetScore={this.resetScore}
      />
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
