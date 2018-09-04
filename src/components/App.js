import React, { Component } from 'react'
import styled from 'styled-components'
import Button from './Button'
import ScoreBoard from './ScoreBoard'
import PlayerSetup from './PlayerSetup'
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
    users: load('users') || [],
  }

  updateScore = (index, value) => {
    const users = this.state.users
    const user = users[index]

    this.setState(
      {
        users: [
          ...users.slice(0, index),
          { ...user, score: user.score + value },
          ...users.slice(index + 1),
        ],
      },
      this.saveUsers
    )
  }

  saveUsers() {
    save('users', this.state.users)
  }

  resetScore = () => {
    this.setState(
      {
        users: this.state.users.map(user => ({ ...user, score: 0 })),
      },
      this.saveUsers
    )
  }

  startGame = () => {
    if (this.state.users.length > 0) {
      this.setState({
        showStartScreen: false,
      })
    }
  }

  addPlayer = name => {
    const users = this.state.users

    this.setState(
      {
        users: [...users, { name: name, score: 0 }],
      },
      this.saveUsers
    )
  }

  renderWarningOrPlaybutton() {
    return this.state.users.length ? (
      <Button handleClick={this.startGame}>Play!</Button>
    ) : (
      <div>Please add one user and hit Enter-Button</div>
    )
  }

  deleteUser = index => {
    const users = this.state.users

    this.setState(
      {
        users: [...users.slice(0, index), ...users.slice(index + 1)],
      },
      this.saveUsers
    )
  }

  deleteAllUsers = () => {
    this.setState(
      {
        users: [],
      },
      this.saveUsers
    )
  }

  renderStartScreen() {
    const { users } = this.state
    return (
      <div>
        <h1>StartScreen</h1>
        {users.map((user, index) => (
          <div key={index}>
            {user.name}
            <SimpleButton onClick={() => this.deleteUser(index)}>
              &times;
            </SimpleButton>
          </div>
        ))}
        <PlayerSetup onSubmit={this.addPlayer} />
        {this.renderWarningOrPlaybutton()}
        <SimpleButton onClick={this.deleteAllUsers}>
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
        {this.state.users.map((user, index) => (
          <ScoreBoard
            key={index}
            title={user.name}
            score={user.score}
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
