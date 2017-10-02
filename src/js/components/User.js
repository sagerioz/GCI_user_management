import { Link } from "react-router";
import React from "react";
import TextFieldGroup from '../common/TextFieldGroup';
import TrashUserRecord from '../buttons/deleteBtn.js';
import AddNewUser from './AddNewUser';
import EditUser from './EditUser';
import TodoStore from "../stores/UserStore";


export default class User extends React.Component {
  constructor(props) {
    super();

  }

  render() {
    const { id, img_url, complete, edit, first_name, last_name, address, city, state, zip } = this.props;

    const icon = complete ? "\u2714" : "\u2716"


  console.log("ON TODO component this.props.id", id);
    if (edit) {
      return (
        <li>
          <input value={text} focus="focused"/>
        </li>
      );
    }

    return (

      <div class="card">
        <img class="card-img-top" src={img_url} alt="Card image cap"/>
        <div class="card-block">
          <h4 class="card-title">{first_name} {last_name}</h4>
          <p class="card-text">
          {address}<br/>
          {city} {state} {zip}
          </p>
          // <button type="button" className="button-logo-2" data-toggle="modal" data-target="#EditModal">
          // Edit User { id }
          // </button>
          <Link to="edit_user" params={{ editId: id }}>Edit User using params</Link>
          <Link to={"edit_user" + id}>Edit User using concat</Link>

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
          <EditUser id={id}/>
          </div>
        </div>
      </div>
      </div>







      </div>

    );
  }
}
