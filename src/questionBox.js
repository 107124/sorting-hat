import React, { Component } from "react";
import Fade from "./Fade";

export default class QuestionBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "Initial State",
      item: props.item
    };
  }
  componentDidMount = () => {
    console.log("ComponentDidMount started");
  };

  render() {
    return (
      <Fade>
        <div className="page-container">
          <div className="box-container">
            <h1 className="question">{this.state.item}</h1>
            <div className="question-wrapper">
              <div className="input-container">
                <input type="radio" />
                <div className="options">Yes</div>
              </div>
              <div className="input-container">
                <input type="radio" />
                <div className="options">No</div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}
