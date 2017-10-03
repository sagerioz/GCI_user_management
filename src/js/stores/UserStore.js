// the general idea here with the EventEmitter:
// TodoStore.on("change", doSomething);
import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class UserStore extends EventEmitter {
  constructor() {
    super()
    this.users = [
        {
          id: 113464613,
          img_url: "https://s14-eu5.ixquick.com/cgi-bin/serveimage?url=http%3A%2F%2Ft0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcStIE0EunpfyUg4xAyyTwYH2mfq-5N3ss2XyI_evjtPXIXa1iJkMw&sp=3fe9a91189cf5fea8e3df878c3f6f9bc&anticache=413846",
          first_name: "Jane",
          last_name: "Doe",
          address: "101 Bayside Ave",
          city: "Bellingham",
          state: "WA",
          zip: 12345
        },
        {
          id: 235684679,
          img_url: "https://s17-us2.ixquick.com/cgi-bin/serveimage?url=http%3A%2F%2Ft0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcSP62OBsnOrunk8MFjDXFI49XcgO2WF9cywtb2xC63hQo9vwRLwYg&sp=8b97e5f244e58487635b28f2fd9d258e&anticache=39166",
          first_name: "John",
          last_name: "Smith",
          address: "1212 Pine Street",
          city: "Las Vegas",
          state: "NV",
          zip: 12123
        },
      ]
      this.currentUser = null
  }

  createUser(text) {
    console.log("THE PROPS inside the store", this.props);
    console.log("THIS IS TEXT OBJECT from the store", text);
    const id = Date.now();
    const { img_url,first_name, last_name, address, city, state, zip } = text;

    this.users.push({
      id,
      img_url,
      first_name,
      last_name,
      address,
      city,
      state,
      zip
    });

    this.emit("change");
  }

  editUser(text){
    console.log("You're in the store, trying to edit a user");
    const { id, img_url,first_name, last_name, address, city, state, zip } = text;
    for (var i = 0; i < this.users.length; i++) {
      if(this.users[i].id === id){
        users.splice(this.users[i], 1)
      }
      this.users.push({
        id,
        img_url,
        first_name,
        last_name,
        address,
        city,
        state,
        zip
      });

      this.emit("change");
    }
  }
  getAll() {
    return this.users;
  }
  getCurrentUser(){
    console.log("YAY you returned the current user from the store");
    return this.currentUser;
  }
  findUserRecord(id){
    const userRecord = this.users.filter((user) => {
      console.log("FILTER", user.id, " = ", this.props.id);
        return user.id == id
    });
    console.log("you got a winner", userRecord[0]);
  }
  updateCurrentUser(id){
    let currentUser = this.users.filter((user, i) => {
      console.log("FILTER", user.id, " = ", id);
        return user.id == id
    })
    console.log("*", currentUser);
    return currentUser[0]
  }
  handleActions(action) {
    // this is where you filter out only the action this store should listen to:
    // (use uppercase as this is a constant)
    switch(action.type) {
      case "CREATE_USER": {
        this.createUser(action.text);
        break;
      }
      case "RECEIVE_USERS": {
        this.users = action.users;
        this.emit("change");
        break;
      }
      case "EDIT_USER": {
        this.users = action.users;
        this.emit("change");
        break;
      }
      case "UPDATE_CURRENT_USER": {
        console.log("FROM THE STORE id", action.id);
        this.currentUser = this.updateCurrentUser(action.id)
        // this.updateCurrentUser(action.id)

        this.emit("change");
        break;
      }
    }
  }

}

const userStore = new UserStore;
dispatcher.register(userStore.handleActions.bind(userStore));

export default userStore;
