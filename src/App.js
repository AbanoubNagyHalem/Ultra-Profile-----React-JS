import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Index from "./components/Index/Index";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
