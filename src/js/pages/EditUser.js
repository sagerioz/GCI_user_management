import React from "react";
import EditUserDetails from '../components/EditUser'
import TextFieldGroup from '../common/TextFieldGroup';
import TrashUserRecord from '../buttons/deleteBtn.js';
import * as UserActions from "../actions/UserActions";
import UserStore from "../stores/UserStore";


export default class EditUser extends React.Component {

  render() {

    const { editId, id, first_name, last_name, address, city, state, zip } = this.props;
    console.log("from edit page, looking for editid", editId);
    return (
      <div>
      <h3> Edit/Delete User {editId}</h3>
      <EditUserDetails />
      </div>
    );
  }
}
