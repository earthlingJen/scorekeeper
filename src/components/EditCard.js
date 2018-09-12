import React, { Component } from 'react'
import PointButtonBar from './PointButtonBar'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const PlayerName = styled.span`
  font-size: 32px;
  margin-right: 70px;
`

const Score = styled.span`
  color: blue;
  font-size: 32px;
`

export default class EditCard extends Component {
  static propTypes = {
    title: PropTypes.string,
    score: PropTypes.number,
    onUpdate: PropTypes.func,
  }
  render() {
    const { title, score, onUpdate } = this.props
    return (
      <div>
        <PlayerName>{title}</PlayerName>
        <Score>{score}</Score>
        <PointButtonBar onClick={onUpdate} />
      </div>
    )
  }
}
