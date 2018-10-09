import React, { Component } from "react";
import { css } from "emotion";
import DiseaseCard from "../presentational/DiseaseCard";
import { colors } from "./colors";

export default class Diseases extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [1, 2, 3, 4],
      colors: colors //random colors
    };
  }

  renderCards = () =>
    this.state.info.map((value, index) => {
      return (
        <DiseaseCard
          key={index}
          gradient={this.state.colors[index]}
          info={{
            prof_name: "Anxiety disorder",
            common_name: "Excessive feeling of fear",
            accuracy: 90
          }}
        />
      );
    });

  render() {
    return <div className={styled}>{this.renderCards()}</div>;
  }
}

const styled = css`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
`;
