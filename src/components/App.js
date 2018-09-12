import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { applyMiddleware, createStore } from 'redux'
import styled from 'styled-components'
import { Provider } from 'react-redux'
import { saveToLocalStorage } from '../middlewares'
import reducer from '../reducer'
import SummaryScreenContainer from './containers/SummaryScreenContainer'
import GameScreenContainer from './containers/GameScreenContainer'
import StartScreenContainer from './containers/StartScreenContainer'

const store = createStore(reducer, applyMiddleware(saveToLocalStorage))

const StyledApp = styled.div`
  text-align: center;
  border: 1px solid;
  height: 90vh;
  width: 300px;
`

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <StyledApp>
            <Route exact path="/" component={StartScreenContainer} />
            <Route exact path="/summary" component={SummaryScreenContainer} />
            <Route exact path="/game" component={GameScreenContainer} />
          </StyledApp>
        </Provider>
      </Router>
    )
  }
}

export default App
