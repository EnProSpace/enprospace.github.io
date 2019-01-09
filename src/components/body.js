import React from "react";
import Marger from "./marger";
import Section from "./section";

export default class Body extends React.Component {
  render(){
    return <div id="body">
      <Marger height="75px"/>
      <img width="960" height="540" className="center rad-1" src="static/Good.png" id="Main"/>
      <Section enname="AboutUs" name="О нас"/>
      <Section enname="Services" name="Услуги"/>
      <Section enname="Contact" name="Контакты"/>
      
    </div>
  }
}