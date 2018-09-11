import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { applyMiddleware, createStore } from 'redux'
import styled from 'styled-components'
import {
  addPlayer,
  deleteAllPlayers,
  deletePlayer,
  resetRoundScores,
  saveRound,
  updateRoundscore,
} from '../actions'
import { saveToLocalStorage } from '../middlewares'
import reducer from '../reducer'
import GameScreen from './GameScreen'
import StartScreen from './StartScreen'
import SummaryScreen from './SummaryScreen'

const store = createStore(reducer, applyMiddleware(saveToLocalStorage))

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
        onDeleteAllPlayers={() => store.dispatch(deleteAllPlayers())}
      />
    )
  }

  renderGameScreen = () => {
    return (
      <GameScreen
        players={store.getState().players}
        onSaveRound={() => store.dispatch(saveRound())}
        onUpdateScore={(index, value) =>
          store.dispatch(updateRoundscore({ index, value }))
        }
        resetRoundScores={() => store.dispatch(resetRoundScores())}
      />
    )
  }

  renderSummaryScreen = () => {
    return <SummaryScreen players={store.getState().players} />
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
