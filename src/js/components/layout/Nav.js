import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const featuredClass = location.pathname === "/" ? "active" : "";
    const archivesClass = location.pathname.match(/^\/favorites/) ? "active" : "";
    const addUserClass = location.pathname.match(/^\/add_user/) ? "active" : "";
    // const editUserClass = location.pathname.match(/^\/edit_user\/[a-zA-Z0-9-_]/) ? "active" : "";
    const editUserClass = location.pathname.match(/^\/edit_user/) ? "active" : "";

    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>

            </button>
          </div>
          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class={featuredClass}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Users</IndexLink>
              </li>
              <li class={archivesClass}>
                <Link to="favorites" onClick={this.toggleCollapse.bind(this)}>Favorites</Link>
              </li>
              <li class={addUserClass}>
                <Link to="add_user" onClick={this.toggleCollapse.bind(this)}>Add New User</Link>
              </li>
              <li class={editUserClass}>
                <Link to="edit_user/:editId" onClick={this.toggleCollapse.bind(this)}>Edit User</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
