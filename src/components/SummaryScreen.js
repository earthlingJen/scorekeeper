import React, { Component } from 'react'
import SummaryCard from './SummaryCard'
import Button from './Button'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class SummaryScreen extends Component {
  static propTypes = {
    players: PropTypes.arrayOf(PropTypes.object),
    onBackToStart: PropTypes.func,
  }
  render() {
    const { players } = this.props
    return (
      <div>
        <h1>(Game name) - Summary Screen</h1>
        {players.map((player, index) => (
          <SummaryCard key={index} title={player.name} scores={player.scores} />
        ))}
        <Link to="/game" style={{ textDecoration: 'none' }}>
          <Button>Add round</Button>
        </Link>

        <Link to="/setup" style={{ textDecoration: 'none' }}>
          <Button>Back to Setup</Button>
        </Link>

        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button>End Game</Button>
        </Link>
      </div>
    )
  }
}
