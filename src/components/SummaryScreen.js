import React, { Component } from 'react'
import SummaryCard from './SummaryCard'
import Button from './Button'

export default class SummaryScreen extends Component {
  render() {
    const { players, onAddRound } = this.props
    return (
      <div>
        {players.map((player, index) => (
          <SummaryCard key={index} title={player.name} scores={player.scores} />
        ))}
        <Button onClick={onAddRound}>Add round</Button>
      </div>
    )
  }
}
