import React from "react";
import { Nav, NavItem } from 'react-bootstrap'
import TextFieldGroup from '../common/TextFieldGroup';
import * as UserActions from "../actions/UserActions";
import UserStore from "../stores/UserStore";


export default class EditUser extends React.Component {
  constructor(props) {
    super();
    this.state = {
      users: UserStore.getAll(),
      record: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  // componentWillMount() {
  //     this.setState({
  //       todos: TodoStore.getAll(),
  //     });
  //     const user_id = this.props.id;
  //     console.log("DID MOUNT", this.state, this.props);
  //     const userRecord = this.state.todos.filter((todo) => {
  //       console.log("FILTER from db to props id", todo.id, " = ", user_id);
  //         return todo.id == user_id
  //     });
  //     console.log("you got a winner", userRecord[0]);
  //     const record = userRecord[0];
  //     this.setState({record : record })
  //     console.log("RECORD", this.state.record);
  //     console.log("FIRST NAME", record.first_name);
  //   console.log("WILL MOUNT", this.state, this.props);
  // }

  componentWillMount(){
    // let temp = this.props.match.params.id;
    // console.log("MATCH ID, will mount", temp);
    // var user_id = this.props.id;
    var user_id = 235684679;

    console.log("WILL MOUNT (state)(props)", this.state, this.props);
    const userRecord = this.state.users.filter((user) => {
      console.log("FILTER", user.id, " = ", user_id);
        return user.id == user_id
    });
    console.log("you got a winner", userRecord[0]);
    const userToUpdate = userRecord[0];
    console.log("}}}}}", userToUpdate);
    this.setState(
      {
        record: userToUpdate
      }
    );


    console.log("state user edit component  will mount", this.state);


    // console.log("FIRST NAME", this.record.first_name);
    // console.log("ID", this.record.id);

  }

  componentDidMount(){
    // var user_id = this.props.id;
    var user_id = 235684679;

    console.log("DID MOUNT? (state)(props)", this.state, this.props);
    const userRecord = this.state.users.filter((user) => {
      console.log("FILTER", user.id, " = ", user_id);
        return user.id == user_id
    });
    console.log("you got a winner", userRecord[0]);
    const userToUpdate = userRecord[0];
    console.log("}}}}}", userToUpdate);
    this.setState(
      {
        record: userToUpdate,
      }
    );


    console.log("state user edit did mount", this.state);


  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log("STATE", this.state);
    console.log(this.props);

  }
  onSubmit(e) {
    e.preventDefault();

    console.log("YOU MADE IT TO ONSUBMIT");
    let userData = this.state
    if (this.state.img_url === 'undefined'){
      userData.img_url = 'https://s17-us2.ixquick.com/cgi-bin/serveimage?url=http%3A%2F%2Ft0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQkKa1PG-a7vXhUbr-Fxj5vSfX7nmerB2MpsWcbzo3FWluOpWU7&sp=dc592d206a5345fcf14d581039154699&anticache=466946'
    }
    UserActions.editUser(userData);
    console.log(":", userData);
    let form = document.getElementById('EditUserForm');
    form.reset();
    return false;
  }

  render() {
    console.log("CAN U SEE ME", this.state.record.first_name);
    return (
      <div>

      <img src={this.state.record.img_url} />

      <form onSubmit={this.onSubmit.bind(this)} id="EditUserForm">


        <TextFieldGroup
          field="first_name"
          label={this.state.record.first_name}
          name="first_name"
          value={this.state.first_name}
          onChange={this.onChange}
         // error={errors.first}
        />
        <TextFieldGroup
          field="img_url"
          label={this.state.record.img_url}
          name="img_url"
          value={this.state.img_url}
          onChange={this.onChange}
         // error={errors.first}
        />

        <TextFieldGroup
          field="last_name"
          label={this.state.record.last_name}
          name="last_name"
          value={this.state.record.last_name}
          onChange={this.onChange}
         // error={errors.last}
        />

        <TextFieldGroup
          field="address"
          label="Address"
          name="address"
          value={this.state.record.address}
          onChange={this.onChange}
         // error={errors.img_url}
        />

        <TextFieldGroup
          field="city"
          label="City"
          name="city"
          value={this.state.record.city}
          onChange={this.onChange}
         // error={errors.img_url}
        />
        <TextFieldGroup
          field="state"
          label="State"
          name="state"
          value={this.state.record.state}
          onChange={this.onChange}
         // error={errors.img_url}
        />

        <TextFieldGroup
          field="zip"
          label="Zip"
          name="zip"
          value={this.state.record.zip}
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
