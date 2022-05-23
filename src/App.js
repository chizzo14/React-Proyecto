import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header.js";
import Button from "./components/button/Button.js";
import Section from "./components/Section/Section.js";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Button title={"Send Data"} />
        <Button title={"Send Info"} />
        <Button title={"Send contact"} />
        <Section
         subtitle={"Subtitulo 1"}
         text={"lorem ipsum..."}
         text2={'Texto de prueba 1'}
          />
        <Section
         subtitle={"Subtitulo 2"}
         text={"lorem ipsum...2"}
         text2={'Texto de prueba 2 '}
          />
      </div>
    );
  }
}
