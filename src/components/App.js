import React, { Component } from 'react'
import styled from 'styled-components'
import { load, save } from '../services'
import StartScreen from './StartScreen'
import GameScreen from './GameScreen'
import SummaryScreen from './SummaryScreen'

const StyledApp = styled.div`
  text-align: center;
  border: 1px solid;
  height: 90vh;
  width: 300px;
`

class App extends Component {
  state = {
    showScreen: 'start', //or "game" or "summary"
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
        showScreen: 'summary',
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
      showScreen: 'start',
    })
  }

  renderGameScreen() {
    return (
      <GameScreen
        players={this.state.players}
        onBack={this.backToStartScreen}
        onUpdateScore={this.updateScore}
        onResetScores={this.resetScore}
      />
    )
  }

  renderSummaryScreen() {
    return (
      <SummaryScreen
        players={[
          { name: 'John', scores: [1, 2, 3] },
          {
            name: 'Jane',
            scores: [10, 20, 32, 10, 20, 32, 10, 20, 32, 10, 20, 32],
          },
        ]}
        onAddRound={() => console.log('add round')}
      />
    )
  }

  renderScreen() {
    const { showScreen } = this.state
    if (showScreen === 'start') {
      return this.renderStartScreen()
    } else if (showScreen === 'summary') {
      return this.renderSummaryScreen()
    } else {
      this.renderGameScreen()
    }
  }

  render() {
    return <StyledApp>{this.renderScreen()}</StyledApp>
  }
}

export default App
