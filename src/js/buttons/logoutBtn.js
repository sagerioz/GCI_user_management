import React, { Component } from 'react'
import { Nav, NavItem } from 'react-bootstrap'

class Logout extends Component{
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    //localStorage.removeItem('profile')
    window.localStorage.clear();
    window.location.replace('/')
  }

  render() {
    return (
      <Nav>
        <NavItem onClick={this.handleClick}>
      Logout
        </NavItem>
      </Nav>
    )
  }
}

export default Logout
