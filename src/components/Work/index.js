import axios from "axios";
import React, { Component } from "react";
import "../Work/style.css";

class Work extends Component {
  state = {
    works: [],
  };

  componentDidMount() {
    axios.get("js/data.json").then((res) => {
      this.setState({ works: res.data.works });
    });
  }

  render() {
    const { works } = this.state;

    const worksList = works.map((workitems) => {
      return (
        <div className="part" key={workitems.id}>
          <i className={workitems.icon_name}></i>
          <h4 className={workitems.title}>Mobile Ux</h4>
          <hr className="line" />
          <p className="part-desc">{workitems.body}</p>
        </div>
      );
    });

    return (
      <div className="work">
        <div className="container">
          <h2 className="work-title">
            <span>My</span> Work
          </h2>
          {worksList}
        </div>
      </div>
    );
  }
}

export default Work;
