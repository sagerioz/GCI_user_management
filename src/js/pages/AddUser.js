import React from "react";
import AddNewUser from '../components/AddNewUser'
import TextFieldGroup from '../common/TextFieldGroup';
import TrashUserRecord from '../buttons/deleteBtn.js';
import * as UserActions from "../actions/UserActions";
import UserStore from "../stores/UserStore";


export default class AddUser extends React.Component {
  render() {
    const { id, text, complete, edit, first_name, last_name, address, city, state, zip } = this.props;

    return (
      <div>
      <h3> Add a New User </h3>
      <AddNewUser />
      </div>
    );
  }
}
