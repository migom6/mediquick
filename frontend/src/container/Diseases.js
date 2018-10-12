import React, { Component } from "react";
import { css } from "emotion";
import DiseaseCard from "../presentational/DiseaseCard";
import { colors } from "./colors";

export default class Diseases extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: colors //random colors
    };
  }

  renderCards = diagnosis =>
    diagnosis.map((value, index) => {
      return (
        <DiseaseCard
          key={index}
          gradient={this.state.colors[index]}
          info={{
            prof_name: value.Issue.ProfName,
            common_name: value.Issue.Name,
            accuracy: value.Issue.Accuracy
          }}
        />
      );
    });

  render() {
    const { diagnosis } = this.props;
    return <div className={styled}>{this.renderCards(diagnosis)}</div>;
  }
}

const styled = css`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
`;
