import React from 'react'

class About extends React.Component{
  constructor(props) {
    super(props);
    this.name = props.name
  }
  render() {
    return (
      <h1>{this.props.name}</h1>
    )
  }
}

export default About
