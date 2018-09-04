import React, { Component } from 'react'
import ScoreUpdater from './ScoreUpdater'
import styled from 'styled-components'

const UserName = styled.span`
  font-size: 32px;
  margin-right: 70px;
`

const Score = styled.span`
  color: blue;
  font-size: 32px;
`

export default class ScoreBoard extends Component {
  render() {
    const { title, score, onUpdate } = this.props
    return (
      <div>
        <UserName>{title}</UserName>
        <Score>{score}</Score>
        <ScoreUpdater handleClick={onUpdate} />
      </div>
    )
  }
}
