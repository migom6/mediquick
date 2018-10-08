import React, { Component } from "react";
import { css } from "emotion";
import DiseaseCard from "../presentational/DiseaseCard";
import LoadingCard from "../presentational/LoadingCard";

export default class Diagnosis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
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
        {!this.state.isLoading ? <DiseaseCard /> : <LoadingCard />}
      </div>
    );
  }
}

const styled = css`
  margin-top: 50px;
  display: flex;
  .searching {
    color: rgb(53, 55, 64, 0.6);
  }
  .loading {
  }
`;
