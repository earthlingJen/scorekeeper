import React, { Component } from 'react'
import Button from './Button'
import PlayerCard from './PlayerCard'

export default class GameScreen extends Component {
  render() {
    const { players, onUpdateScore, onBack, onResetScore } = this.props
    return (
      <React.Fragment>
        <h2>Score keeper</h2>
        {players.map((player, index) => (
          <PlayerCard
            key={index}
            title={player.name}
            score={player.score}
            onUpdate={score => onUpdateScore(index, score)}
          />
        ))}
        <Button handleClick={onResetScore}>Reset Scores</Button>
        <Button handleClick={onBack}>Back</Button>
      </React.Fragment>
    )
  }
}
