import React, { Component } from "react";
import QuestionBox from "./questionBox";
import Fade from "./Fade";

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

  handleSubmit = event => {
    console.log("form submitted");
    event.preventDefault();
  };

  renderQuestions = () => {
    const data = [
      "How old are you?",
      "You're out for a walk and notice a snake 5 ft. from you. Do you kill it?",
      "question3",
      "question4",
      "question5",
      "question6",
      "question7",
      "question8",
      "question9"
    ];

    return data.map(question => {
      return <QuestionBox item={question} />;
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="sort-container">
          <div>
            <h1>Sorting Hat</h1>
          </div>
          {this.renderQuestions()}
          <Fade>
            <button className="submit" type="submit">
              Apparate Answers
            </button>
          </Fade>
        </div>
      </form>
    );
  }
}
