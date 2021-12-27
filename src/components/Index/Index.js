import React, { Component } from "react";
import Home from "../Home/index";
import About from "../About/index";
import Footer from "../Footer/index";
import Portofolio from "../Portofolio/index";
import SocialMedia from "../SocialMedia/index";
import Profile from "../Profile/index";
import Work from "../Work";

class Index extends Component {
  render() {
    return (
      <div>
        <Home />
        <Work />
        <Portofolio />
        <Profile />
        <About />
        <SocialMedia />
        <Footer />
      </div>
    );
  }
}

export default Index;
