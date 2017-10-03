import React from "react";
import AddNewUser from '../components/AddNewUser';
import EditUser from '../components/EditUser';
import TextFieldGroup from '../common/TextFieldGroup';
import TrashUserRecord from '../buttons/deleteBtn.js';
import User from "../components/User";
import * as UserActions from "../actions/UserActions";
// 'import * as' is a clean way to import and define all of your functions. It will show up here in an object literal.
// ex)
// {
//    createUser: function() {}
//    deleteUser: function() {}
// }
import UserStore from "../stores/UserStore";


export default class Users extends React.Component {
  constructor() {
    super();
    this.getUsers = this.getUsers.bind(this);
    this.state = {
      users: UserStore.getAll(),
      editId: 0,
    };
  }

  componentWillMount() {
    UserStore.on("change", () => {
      this.setState({
        users: UserStore.getAll(),
      });
    });
  }

  componentWillUnmount() {
    UserStore.removeListener("change", this.getUsers);
  }

  getUsers() {
    this.setState({
      users: UserStore.getAll(),
    });
  }

  reloadUsers() {
    UserActions.reloadUsers();
  }

  render() {
    const { users } = this.state;

    const UserComponents = users.map((user) => {

        return <User key={user.id} {...user} />;
    });

    return (

      <div className="container">

        <h1>User List</h1>
        <ul>{UserComponents}</ul>

        <button type="button" className="button-logo-2" data-toggle="modal" data-target="#AddModal">
        Add User
        </button>

      </div>
    );
  }
}
