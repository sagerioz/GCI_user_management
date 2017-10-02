import React, { Component } from 'react'
import { Nav, NavItem } from 'react-bootstrap'

class TrashUserRecord extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (props) => {
      props.preventDefault()
      console.log("PROPS from trash", this.props.id);
      console.log("STATE", this.state);

  }

  render() {
    return (
      <Nav>
        <NavItem onClick={this.handleClick} className="sideFont"><span className="glyphicon glyphicon-trash" aria-hidden="false"></span></NavItem>
      </Nav>
    )
  }
}

export default TrashUserRecord
