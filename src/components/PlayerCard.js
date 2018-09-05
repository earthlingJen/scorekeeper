import React, { Component } from 'react'
import PlayerButtonBar from './PlayerButtonBar'
import styled from 'styled-components'

const PlayerName = styled.span`
  font-size: 32px;
  margin-right: 70px;
`

const Score = styled.span`
  color: blue;
  font-size: 32px;
`

export default class PlayerCard extends Component {
  render() {
    const { title, score, onUpdate } = this.props
    return (
      <div>
        <PlayerName>{title}</PlayerName>
        <Score>{score}</Score>
        <PlayerButtonBar handleClick={onUpdate} />
      </div>
    )
  }
}
