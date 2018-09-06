import React, { Component } from 'react'
import styled from 'styled-components'
import { load, save } from '../services'
import StartScreen from './StartScreen'
import GameScreen from './GameScreen'
import SummaryScreen from './SummaryScreen'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const StyledApp = styled.div`
  text-align: center;
  border: 1px solid;
  height: 90vh;
  width: 300px;
`

class App extends Component {
  state = {
    //showScreen: 'start', //or "game" or "summary"
    players: load('players') || [],
  }

  updateScore = (index, value) => {
    const players = this.state.players
    const player = players[index]

    this.setState(
      {
        players: [
          ...players.slice(0, index),
          { ...player, roundScore: player.roundScore + value },
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
    const players = this.state.players
    this.setState({
      players: players.map(
        player => ({
          ...player,
          scores: [...player.scores, player.roundScore],
          roundScore: 0,
        }),

        this.savePlayers
      ),
    })
  }

  // startGame = () => {
  //   if (this.state.players.length > 0) {
  //     this.setState({
  //       showScreen: 'summary',
  //     })
  //   }
  // }

  addPlayer = name => {
    const players = this.state.players

    this.setState(
      {
        players: [...players, { name: name, scores: [], roundScore: 0 }],
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

  renderStartScreen = () => {
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
      // showScreen: 'start',
    })
  }

  saveRound = () => {
    const players = this.state.players
    this.setState({
      players: players.map(player => ({
        ...player,
        scores: [...player.scores, player.roundScore],
        roundScore: 0,
      })),
      //showScreen: 'summary',
    })
  }

  addRound() {
    this.setState({
      showScreen: 'game',
    })
  }

  renderGameScreen = () => {
    return (
      <GameScreen
        players={this.state.players}
        onSaveRound={this.saveRound}
        onUpdateScore={this.updateScore}
        onResetScores={this.resetScore}
      />
    )
  }

  renderSummaryScreen = () => {
    return (
      <SummaryScreen
        players={this.state.players}
        onAddRound={() => this.addRound()}
        onBackToStart={this.backToStartScreen}
      />
    )
  }

  // renderScreen() {
  //   const { showScreen } = this.state
  //   if (showScreen === 'start') {
  //     return this.renderStartScreen()
  //   } else if (showScreen === 'summary') {
  //     return this.renderSummaryScreen()
  //   } else if (showScreen === 'game') {
  //     return this.renderGameScreen()
  //   } else {
  //     console.log('Error')
  //   }
  // }

  render() {
    return (
      <Router>
        <StyledApp>
          {/* {this.renderScreen()} */}

          <Route exact path="/" render={this.renderStartScreen} />
          <Route exact path="/summary" render={this.renderSummaryScreen} />
          <Route exact path="/game" render={this.renderGameScreen} />
        </StyledApp>
      </Router>
    )
  }
}

export default App
