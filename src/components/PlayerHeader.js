import React, { Component } from 'react'
import styled from 'styled-components'

const PlayerName = styled.span`
  font-size: 32px;
`

const Score = styled.span`
  color: blue;
  font-size: 32px;
`

const HeaderBackground = styled.div`
  background: lightgray;
  display: flex;
  justify-content: space-between;
`

export default class PlayerHeader extends Component {
  render() {
    const { title, score } = this.props
    return (
      <HeaderBackground>
        <PlayerName>{title}</PlayerName>
        <Score>{score}</Score>
      </HeaderBackground>
    )
  }
}
