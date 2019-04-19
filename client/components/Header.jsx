import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
    render() {
      return <div className="logo">
      <a href="/">The<br></br>Daily Image</a>
    </div>
    }
  }

export default Header;
