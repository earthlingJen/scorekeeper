import React, { Component } from 'react'
import SummaryCard from './SummaryCard'
import Button from './Button'

export default class SummaryScreen extends Component {
  render() {
    const { players, round, onAddRound } = this.props
    return (
      <div>
        {players.map(player => (
          <SummaryCard title={player.name} score={player.score} round={round} />
        ))}
        <Button onClick={onAddRound}>Add round</Button>
      </div>
    )
  }
}
