import React, { Component } from "react";
import { css } from "emotion";
import Diseases from "./Diseases";
import LoadingCard from "../presentational/LoadingCard";

export default class Diagnosis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }
  concatDisease = () => {
    let diseases = "";
    this.props.issues.map(item => {
      diseases = diseases + item.label + ", ";
      return 0;
    });
    diseases = diseases.slice(0, -2); //removing the last comma
    return diseases;
  };
  render() {
    let temp = this.state.isLoading ? "Searching" : "Showing";
    const { diagnosis, age } = this.props;
    //button not clciked yet
    if (!diagnosis) {
      return (
        <h3 className={styled}>
          <center className="info">
            Toggle off the button to have Auto Search Box feature
          </center>
        </h3>
      );
    }
    // age error input handles
    if (age === "" || age === 0) {
      return <div>Enter age!</div>;
    }
    //No results found for a given combination
    if (diagnosis.length === 0) {
      return <div>No diagnosis found with the combination!</div>;
    }
    if (this.props.diagnosis.constructor !== Array) {
      return <span>{this.props.diagnosis}</span>;
    }
    return (
      <div className={styled}>
        <span className="searching">
          {`${temp} diagnosis for ${this.concatDisease()} ...`}
        </span>
        {!this.state.isLoading ? (
          <Diseases diagnosis={this.props.diagnosis} />
        ) : (
          <LoadingCard />
        )}
      </div>
    );
  }
}

const styled = css`
  margin-top: 50px;
  display: flex;
  display: flex;
  flex-direction: column;
  .info {
    margin-top: 80px;
  }
  .searching {
    color: rgb(53, 55, 64, 0.6);
    font-style: italic;
  }
  .loading {
  }
`;
