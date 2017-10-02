import React, { Component } from 'react'
import { Nav, NavItem } from 'react-bootstrap'
import Logout from './logoutBtn.js'
import { Link } from 'react-router-dom';


class Profile extends Component{
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      pic: '',
      id: ''
    }

  }

  componentDidMount(){
  console.log("LOCAL STORAGE from NAVBAR >>>>>>", localStorage);
  this.setState({ name: localStorage.name, pic: localStorage.pic, id: localStorage.id })
  }

  //handleClick = () => {
    // <Link to="/scrapbook">Scrapbook</Link>
    // window.location.replace('/profile' + this.state.id)
//  }

  render() {
    return (
      <Nav>


      <div className="dropdown">
          <button className="button-logo-3 dropdown-toggle" type="button" data-toggle="dropdown">

          <NavItem className="side-font">
          <Link to={"/profile/" + this.state.id}>
          <span>{ this.state.name }</span></Link>
          <img src={ this.state.pic } className="sm-profile thumb"/>
          </NavItem>




          <span className="caret"></span></button>
          <ul className="dropdown-menu">
            <li><a href="#"><Logout/></a></li>
            <li className="nudge-profile"><Link to={"/profile/" + this.state.id}>Profile</Link></li>
          </ul>
        </div>





      </Nav>
    )
  }
}

export default Profile
