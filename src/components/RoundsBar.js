import React, { Component } from 'react'
import styled from 'styled-components'

const StyledRoundsBar = styled.div`
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  width: 80%;
  justify-content: center;
  align-items: center;
  height: 20px;
`

const Round = styled.span`
  font-size: 22px;
  padding: 12px 7px;
  margin: 1px;
  border: 1px solid;
  border-radius: 2px;
  background: lightgrey;

  &:hover {
    background: orange;
  }
`

export default class RoundsBar extends Component {
  // state = {
  //   round: [11, 20, 12],
  // }

  render() {
    const { round } = this.props
    return (
      <StyledRoundsBar>
        {round.map((round, index) => (
          <Round key={index} round={round.score} />
        ))}
      </StyledRoundsBar>
    )
  }
}
