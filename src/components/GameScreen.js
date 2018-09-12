import React, { Component } from 'react'
import Button from './Button'
import EditCard from './EditCard'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class GameScreen extends Component {
  static propTypes = {
    players: PropTypes.arrayOf(PropTypes.object),
    onUpdateScore: PropTypes.func,
    onSaveRound: PropTypes.func,
    resetRoundScores: PropTypes.func,
  }

  render() {
    const { players, onUpdateScore, onSaveRound, resetRoundScores } = this.props
    return (
      <React.Fragment>
        <h1>(Game Name) - Game Screen</h1>
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
        <Button onClick={resetRoundScores}>Reset round scores</Button>
      </React.Fragment>
    )
  }
}
