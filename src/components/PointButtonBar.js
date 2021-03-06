import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledPointButtonBar = styled.div`
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  width: 80%;
  justify-content: center;
  align-items: center;
  height: 10px;
`

const Btn = styled.button`
  font-size: 22px;
  padding: 7px 7px;
  margin: 1px;
  border: 1px solid;
  border-radius: 2px;
  background: lightgrey;

  &:hover {
    background: orange;
  }
`

export default class PointButtonBar extends Component {
  static propTypes = {
    onClick: PropTypes.func,
  }
  render() {
    const { onClick } = this.props
    return (
      <StyledPointButtonBar>
        <Btn onClick={() => onClick(-10)}>-10</Btn>
        <Btn onClick={() => onClick(-5)}>-5</Btn>
        <Btn onClick={() => onClick(-1)}>-1</Btn>
        <Btn onClick={() => onClick(+1)}>+1</Btn>
        <Btn onClick={() => onClick(+5)}>+5</Btn>
        <Btn onClick={() => onClick(+10)}>+10</Btn>
      </StyledPointButtonBar>
    )
  }
}
