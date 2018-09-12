import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledButton = styled.button`
  background: orange;
  color: whitesmoke;
  display: inline;
  border-radius: 12px;
  margin: 22px;
  padding: 0 12px;

  &:hover {
    border: solid;
    background: teal;
  }
`

export default class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.any,
  }

  render() {
    return (
      <StyledButton onClick={this.props.onClick}>
        <h1>{this.props.children}</h1>
      </StyledButton>
    )
  }
}
