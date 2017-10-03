import React from "react";
import { Nav, NavItem } from 'react-bootstrap'
import TextFieldGroup from '../common/TextFieldGroup';
import * as UserActions from "../actions/UserActions";

export default class AddNewUser extends React.Component {
  constructor(props) {
    super();
    this.state = {
      id: '',
      img_url: 'https://s17-us2.ixquick.com/cgi-bin/serveimage?url=http%3A%2F%2Ft0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQkKa1PG-a7vXhUbr-Fxj5vSfX7nmerB2MpsWcbzo3FWluOpWU7&sp=dc592d206a5345fcf14d581039154699&anticache=466946',
      first_name: '',
      last_name: '',
      address: '',
      city: '',
      state: '',
      zip: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    let userData = this.state
    UserActions.createUser(userData);
    //console.log("UserData in onsubmit in addnewuser:", userData);
    let form = document.getElementById('AddUserForm');
    form.reset();
    return false;
  }
  resetForm(e){
    let form = document.getElementById('AddUserForm');
    form.reset();
  }
  render() {
    //console.log("YOUR PROPS ON ADD USER", this.props);
    const { img_url, first_name, last_name, address, city, state, zip } = this.props;

    return (
      <div>
      <form onSubmit={this.onSubmit.bind(this)} id="AddUserForm">


        <TextFieldGroup
          field="first_name"
          label="First Name"
          name="first_name"
          value={first_name}
          onChange={this.onChange}
        />

        <TextFieldGroup
          field="img_url"
          label="Profile photo url"
          name="img_url"
          value={img_url}
          onChange={this.onChange}
        />

        <TextFieldGroup
          field="last_name"
          label="Last Name"
          name="last_name"
          value={last_name}
          onChange={this.onChange}
        />

        <TextFieldGroup
          field="address"
          label="Address"
          name="address"
          value={address}
          onChange={this.onChange}
        />

        <TextFieldGroup
          field="city"
          label="City"
          name="city"
          value={city}
          onChange={this.onChange}
        />
        <TextFieldGroup
          field="state"
          label="State"
          name="state"
          value={state}
          onChange={this.onChange}
        />

        <TextFieldGroup
          field="zip"
          label="Zip"
          name="zip"
          value={zip}
          onChange={this.onChange}
        />
        <div>
        <button type="submit" className="button-logo-2">Enter User</button>
  <button type="button" className="button-logo-2" data-dismiss="modal">Done</button>


        </div>
        <Nav>
          <NavItem onClick={this.resetForm.bind(this)}
           className="sideFont"><span className="glyphicon glyphicon-trash" aria-hidden="false"></span></NavItem>
        </Nav>
      </form>

      </div>

    );
  }
}
