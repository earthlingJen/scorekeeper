import React, { Component } from 'react'
import styled from 'styled-components'

const StyledScore = styled.span`
  color: blue;
  font-size: 32px;
`

export default class Score extends Component {
  render() {
    return (
      <StyledScore>
        <h1>{this.props.value}</h1>
      </StyledScore>
    )
  }
}
