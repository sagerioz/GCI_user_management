import { Link } from "react-router";
import React from "react";
import TextFieldGroup from '../common/TextFieldGroup';
import TrashUserRecord from '../buttons/deleteBtn.js';
import AddNewUser from './AddNewUser';
import EditUser from './EditUser';
import UserStore from "../stores/UserStore";
import * as UserActions from "../actions/UserActions";



export default class User extends React.Component {
  constructor(props) {
    super();
    this.state = {
      users: UserStore.getAll(),
      editId: 0,
      record: '',
      currentUser: '',
    };
  }

  handleClick(){
    //console.log("HANDLE CLICK HAPPENED");
    UserActions.currentUserUpdate(this.props.id)
    //UserStore.currentUserUpdate(this.props.id)
    console.log("+", UserStore.getCurrentUser());
    //this.setState({record: current})
    let current = UserStore.getCurrentUser();
    console.log("++", current);
    this.state.record = current;
    this.props = this.state.record;
    console.log("STATE in handle click", this.state);
  }

  render() {
    const { id, img_url, first_name, last_name, address, city, state, zip } = this.props;

    return (

      <div class="card">
        <img class="card-img-top" src={img_url} alt="Card image cap"/>
        <div class="card-block">
          <h4 class="card-title">{first_name} {last_name}</h4>
          <p class="card-text">
          {address}<br/>
          {city} {state} {zip}
          </p>

          <button type="button" className="button-logo-2" data-toggle="modal" data-target="#EditModal" onClick={this.handleClick.bind(this)}>
          Edit User { id } </button>
      </div>

      <div className="modal fade" id="AddModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
           <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h3 className="modal-title" id="myModalLabel">New User</h3>
            </div>

            <div className="modal-body">
            <AddNewUser />
          </div>
        </div>
       </div>
      </div>

      <div className="modal fade" id="EditModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h3 className="modal-title" id="myModalLabel">Edit User</h3>
          </div>
          <div className="modal-body">
          <EditUser currentUser={this.state.currentUser}/>
          </div>
         </div>
        </div>
      </div>

      </div>

    );
  }
}
