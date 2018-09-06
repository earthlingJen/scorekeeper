import React, { Component } from 'react'
import Button from './Button'
import EditCard from './EditCard'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default class GameScreen extends Component {
  render() {
    const { players, onUpdateScore, onSaveRound, onResetScores } = this.props
    return (
      <React.Fragment>
        <h1>Count Score</h1>
        {players.map((player, index) => (
          <EditCard
            key={index}
            title={player.name}
            score={player.roundScore}
            onUpdate={score => onUpdateScore(index, score)}
          />
        ))}
        <Link to="/summary" style={{ textDecoration: 'none' }}>
          <Button onClick={onSaveRound}>Save Round</Button>
        </Link>
        <Button onClick={onResetScores}>Reset Scores</Button>
      </React.Fragment>
    )
  }
}
