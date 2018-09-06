import React, { Component } from 'react'
import styled from 'styled-components'

const StyledRoundsBar = styled.div`
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-wrap: nowrap;
  -webkit-overflow-scrolling: touch;
  overflow-x: scroll;
  justify-content: center;
  align-items: center;
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
  scrollerRef = React.createRef()

  componentDidUpdate() {
    const scroller = this.scrollerRef.current
    scroller.scrollLeft = scroller.scrollWidth
  }
  render() {
    const { scores } = this.props
    return (
      <StyledRoundsBar innerRef={this.scrollerRef}>
        {scores.map((score, index) => (
          <Round key={index}> {score} </Round>
        ))}
      </StyledRoundsBar>
    )
  }
}
