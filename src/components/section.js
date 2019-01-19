import React from "react";
import Marger from "./marger";
import text from "./../text.json";
import Services from "./services"

export default class Section extends React.Component {
  render() {
    let code;
    if (this.props.enname === "Services") {
      code = <div id="body">
        <Marger height="20px" />
        <h1 className="center" id={this.props.enname}>{this.props.name}</h1>
        <Services/>
      </div>
    } else {
      code = <div id="body">
        <Marger height="20px" />
        <h1 className="center" id={this.props.enname}>{this.props.name}</h1>
        <div dangerouslySetInnerHTML=
          {{ "__html": text[this.props.enname] }}
        />
      </div>
    }


    return code;
  }
}