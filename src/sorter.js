import React, { Component } from "react";
import QuestionBox from "./questionBox";

export default class Sorter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "Initial State"
    };
  }
  componentDidMount = () => {
    console.log("ComponentDidMount started");
  };

  renderQuestions = () => {
    const data = ["question1", "question2", "question3", "question4"];

    return data.map(question => {
      return <QuestionBox item={question} />;
    });
  };

  render() {
    return (
      <div className="sort-container">
        <h1>Sorting Hat</h1>
        {this.renderQuestions()}
      </div>
    );
  }
}
