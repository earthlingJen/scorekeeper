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
    const { title, scores } = this.props
    const total = scores.reduce(
      (previous, current) => Number(previous) + Number(current),
      0
    )
    return (
      <BackgroundSummaryCard>
        <PlayerHeader title={title} score={total} />
        <RoundsBar scores={scores} />
      </BackgroundSummaryCard>
    )
  }
}
