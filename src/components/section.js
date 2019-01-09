import React from "react";
import Marger from "./marger";
import text from "./../text.json";

export default class Section extends React.Component {
  render() {
    return <div id="body">
      <Marger height="20px" />
      <h1 className="center" id={this.props.enname}>{this.props.name}</h1>
      <div dangerouslySetInnerHTML=
        {{"__html":text[this.props.enname]}}
      />
    </div>
  }
}