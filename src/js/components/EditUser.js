import React from "react";
import { Nav, NavItem } from 'react-bootstrap'
import TextFieldGroup from '../common/TextFieldGroup';
import * as UserActions from "../actions/UserActions";
import UserStore from "../stores/UserStore";


export default class EditUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: this.props.currentUser,
      id: '',
      img_url: '',
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

  _handleChangeEvent(val) {
       return val;
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    this._handleChangeEvent(this.state.record);
    //console.log("STATE on EDIT component", this.state);
    //console.log(this.props);
  }

  onSubmit(e) {
    e.preventDefault();
  //  console.log("YOU MADE IT TO ONSUBMIT");
    let userData = this.state
    if (this.state.img_url === 'undefined'){
      userData.img_url = 'https://s17-us2.ixquick.com/cgi-bin/serveimage?url=http%3A%2F%2Ft0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQkKa1PG-a7vXhUbr-Fxj5vSfX7nmerB2MpsWcbzo3FWluOpWU7&sp=dc592d206a5345fcf14d581039154699&anticache=466946'
    }
    UserActions.editUser(userData);
  //  console.log(":", userData);
    let form = document.getElementById('EditUserForm');
    form.reset();
    return false;
  }

  render() {
console.log("}}}}}", this.state.record);
    return (
      <div>
      <h1>{this.state.record.id}</h1>
      <img src={this.state.record.img_url} />
      <form onSubmit={this.onSubmit.bind(this)} id="EditUserForm">

        <TextFieldGroup
          field="first_name"
          label={this.state.record.first_name}
          name="first_name"
          defaultValue={this.state.record.first_name}
          onChange={this.onChange}
         // error={errors.first}

        />
        <TextFieldGroup
          field="img_url"
          label="Enter Image Url"
          name="img_url"
          defaultValue={this.state.record.img_url}
          onChange={this.onChange}
         // error={errors.first}
        />

        <TextFieldGroup
          field="last_name"
          label={this.state.record.last_name}
          name="last_name"
          defaultValue={this.state.record.last_name}
          onChange={this.onChange}
         // error={errors.last}
        />

        <TextFieldGroup
          field="address"
          label="Address"
          name="address"
          defaultValue={this.state.record.address}
          onChange={this.onChange}
         // error={errors.img_url}
        />

        <TextFieldGroup
          field="city"
          label="City"
          name="city"
          defaultValue={this.state.record.city}
          onChange={this.onChange}
         // error={errors.img_url}
        />
        <TextFieldGroup
          field="state"
          label="State"
          name="state"
          defaultValue={this.state.record.state}
          onChange={this.onChange}
         // error={errors.img_url}
        />

        <TextFieldGroup
          field="zip"
          label="Zip"
          name="zip"
          defaultValue={this.state.record.zip}
          onChange={this.onChange}
         // error={errors.img_url}
        />
        <div>
        <button type="submit" className="button-logo-2">Update User</button>
        <button type="button" className="button-logo-2" data-dismiss="modal">Done</button>
        </div>
        <Nav>
          <NavItem onClick={()=>{
            this.form.reset();
          }} className="sideFont"><span className="glyphicon glyphicon-trash" aria-hidden="false"></span></NavItem>
        </Nav>
      </form>

      </div>
    );
  }
}
