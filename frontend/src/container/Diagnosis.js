import React, { Component } from "react";
import { css } from "emotion";
import Diseases from "./Diseases";
import LoadingCard from "../presentational/LoadingCard";

export default class Diagnosis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      diseases: ["fever", "back pain", "dyxlesia"]
    };
  }
  concatDisease = () => {
    let diseases = "";
    this.state.diseases.map(item => {
      diseases = diseases + item + ", ";
      return 0;
    });
    diseases = diseases.slice(0, -2); //removing the last comma
    return diseases;
  };
  render() {
    let temp = this.state.isLoading ? "Searching" : "Showing";
    return (
      <div className={styled}>
        <span className="searching">
          {`${temp} diagnosis for ${this.concatDisease()} ...`}
        </span>
        {!this.state.isLoading ? <Diseases /> : <LoadingCard />}
      </div>
    );
  }
}

const styled = css`
  margin-top: 50px;
  display: flex;
  display: flex;
  flex-direction: column;
  .searching {
    color: rgb(53, 55, 64, 0.6);
    font-style: italic;
  }
  .loading {
  }
`;
