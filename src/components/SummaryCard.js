import React, { Component } from 'react'
import PlayerHeader from './PlayerHeader'
import RoundsBar from './RoundsBar'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const BackgroundSummaryCard = styled.div`
  background: grey;
  padding: 8px;
`

export default class SummaryCard extends Component {
  static propTypes = {
    title: PropTypes.string,
    scores: PropTypes.arrayOf(PropTypes.number),
  }
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
