import React, { Component } from "react";

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
      <div className="box-container">
        <h1>{this.state.item}</h1>
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
    );
  }
}
