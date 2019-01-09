import React from "react";
import "./../styles/headerButton.css"

export default class HeaderButton extends React.Component {
  render() {
    return <a className="headerButton" href={"#" + this.props.link}>{this.props.text}</a>
  }
}