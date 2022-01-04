import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Nav from "./Components/Nav";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav></Nav>
      </BrowserRouter>
    );
  }
}

export default App;
