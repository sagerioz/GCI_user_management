import dispatcher from "../dispatcher";

export function createUser(text) {
  console.log("In the actions file");
  dispatcher.dispatch({
    type: "CREATE_USER",
    text,
  });
}

export function deleteUser(id) {
  dispatcher.dispatch({
    type: "DELETE_USER",
    id,
  });
}

export function editUser(text) {
  dispatcher.dispatch({
    type: "EDIT_USER",
    text,
  });
}

export function currentUserUpdate(id) {
  dispatcher.dispatch({
    type: "UPDATE_CURRENT_USER",
    id,
  });
}

export function reloadUsers() {
  // axios("http://someurl.com/somedataendpoint").then((data) => {
  //   console.log("got the data!", data);
  // })
  dispatcher.dispatch({type: "FETCH_USERS"});
  setTimeout(() => {
    dispatcher.dispatch({type: "RECEIVE_USERS", users: [
      {
        id: 8484848484,
        text: "Go Shopping Again",
        complete: false
      },
      {
        id: 6262627272,
        text: "Hug Wife",
        complete: true
      },
    ]});
  }, 1000);
}
