import { render } from "react-dom";
import React from "react";

import Header from "./components/header"
import Body from "./components/body"

import "./styles/main.css"
import "@babel/polyfill";

class MainComponent extends React.Component{
  render(){
    return <div>
      <Header/>
      <Body/>
    </div>
  }
}

render(<MainComponent/>,document.getElementById("app"))