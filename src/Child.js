import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {
  render() {
    return (
      <div
        className="child"
        style={{backgroundColor: "#FFF"}}
        onClick={this.props.color}
      ></div>
    )
  }
}

export default Child
