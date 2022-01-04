import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
