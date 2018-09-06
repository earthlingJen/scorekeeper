import React, { Component } from 'react'
import SummaryCard from './SummaryCard'
import Button from './Button'
import { BrowserRouter as Router, Routes, Link } from 'react-router-dom'

export default class SummaryScreen extends Component {
  render() {
    const { players, onAddRound, onBackToStart } = this.props
    return (
      <div>
        <h1>Summary Screen</h1>
        {players.map((player, index) => (
          <SummaryCard key={index} title={player.name} scores={player.scores} />
        ))}
        <Link to="/game" style={{ textDecoration: 'none' }}>
          <Button onClick={onAddRound}>Add round</Button>
        </Link>

        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button onClick={onBackToStart}>Back to start</Button>
        </Link>
      </div>
    )
  }
}
