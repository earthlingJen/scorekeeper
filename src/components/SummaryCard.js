import React, { Component } from 'react'
import PlayerHeader from './PlayerHeader'
import RoundsBar from './RoundsBar'
import styled from 'styled-components'

const BackgroundSummaryCard = styled.div`
  background: grey;
  padding: 20px;
`

export default class SummaryCard extends Component {
  render() {
    const { title, score, round } = this.props
    return (
      <BackgroundSummaryCard>
        <PlayerHeader title={title} score={score} />
        <RoundsBar round={round} />
      </BackgroundSummaryCard>
    )
  }
}
