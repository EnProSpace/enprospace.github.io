import React from "react";
import HeaderButton from "./headerButton";

import "./../styles/header.css"

export default class Header extends React.Component {
  render(){
    return <div id="header">
      <HeaderButton text="Главная" link="Main"/>
      <HeaderButton text="О нас" link="Main"/>
      <HeaderButton text="Услуги" link="Main"/>
      <HeaderButton text="Контакты" link="Main"/>
    </div>
  }
}