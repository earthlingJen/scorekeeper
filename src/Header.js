import React, { Component } from 'react'
import './App.css'
import logo from './logo.svg'
import Rating from './Rating'

export default class Header extends Component {
  state = {
    rating: 0,
  }

  updateRating = value => {
    this.setState({ rating: value })
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <Rating rating={this.state.rating} callback={this.updateRating} />
          </div>
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    )
  }
}
