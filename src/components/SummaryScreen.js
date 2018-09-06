import React, { Component } from 'react'
import SummaryCard from './SummaryCard'
import Button from './Button'

export default class SummaryScreen extends Component {
  render() {
    const { players, onAddRound, onBackToStart } = this.props
    return (
      <div>
        <h1>Summary Screen</h1>
        {players.map((player, index) => (
          <SummaryCard key={index} title={player.name} scores={player.scores} />
        ))}
        <Button onClick={onAddRound}>Add round</Button>
        <Button onClick={onBackToStart}>Back to start</Button>
      </div>
    )
  }
}
