import React, { Component } from 'react'
import { createStore } from 'redux'
import reducer from '../reducer'
import ACTIONS, { addPlayer, deletePlayer } from '../actions'
import styled from 'styled-components'
import StartScreen from './StartScreen'
import GameScreen from './GameScreen'
import SummaryScreen from './SummaryScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const store = createStore(reducer)

const StyledApp = styled.div`
  text-align: center;
  border: 1px solid;
  height: 90vh;
  width: 300px;
`

class App extends Component {
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate()
    })
  }

  renderStartScreen = () => {
    return (
      <StartScreen
        players={store.getState().players}
        onAddPlayer={name => store.dispatch(addPlayer({ name }))}
        onDeletePlayer={index => store.dispatch(deletePlayer({ index }))}
        onDeleteAllPlayers={this.deleteAllPlayers}
        onStartGame={this.startGame}
      />
    )
  }

  renderGameScreen = () => {
    return (
      <GameScreen
        players={store.getState().players}
        onSaveRound={this.saveRound}
        onUpdateScore={this.updateScore}
        onResetScores={this.resetScore}
      />
    )
  }

  renderSummaryScreen = () => {
    return (
      <SummaryScreen
        players={store.getState().players}
        onAddRound={() => this.addRound()}
        onBackToStart={this.backToStartScreen}
      />
    )
  }

  render() {
    return (
      <Router>
        <StyledApp>
          <Route exact path="/" render={this.renderStartScreen} />
          <Route exact path="/summary" render={this.renderSummaryScreen} />
          <Route exact path="/game" render={this.renderGameScreen} />
        </StyledApp>
      </Router>
    )
  }
}

export default App
