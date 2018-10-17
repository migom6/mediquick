import React, { Component } from "react";
import styled from "react-emotion";
import { css } from "emotion";

export default class MedicalCare extends Component {
  renderOptions = options =>
    options.map((option, j) => (
      <div className="indent" key={j}>
        <h2 className="title">{option.title}</h2>
        <span>{option.description}</span>
      </div>
    ));
  renderCards = treatment_types =>
    treatment_types.map((elem, i) => {
      return (
        <div key={i}>
          <h1 className="heading">{elem.type}</h1>
          {this.renderOptions(elem.options)}
        </div>
      );
    });
  render() {
    const { result } = this.props;
    const { disease, treatment_types } = result;
    return (
      <div className={box}>
        <Title>Medical Report</Title>
        <div className="personal">
          <span className="lbl">Paitent's Name:</span>
          <span className="lbl inf">{this.props.personal.name}</span>
          <span className="lbl">Sex:</span>
          <span className="lbl inf">{this.props.personal.sex}</span>
          <span className="lbl">Age:</span>
          <span className="lbl inf">{this.props.personal.age}</span>
        </div>
        <div>
          <span className="lbl">Diagnosed:</span>
          <span className="lbl inf">{disease}</span>
        </div>
        <hr />
        {this.renderCards(treatment_types)}
      </div>
    );
  }
}
const Title = styled("h1")(props => ({
  alignSelf: "center",
  color: "#0c2461"
}));

const Heading = styled("span")(props => ({
  color: "#3B3B98",
  fontSize: "2em",
  fontWeight: "800",
  marginTop: "15px",
  marginBottom: "15px"
}));

const SubHeading = styled("span")(props => ({
  color: "#3B3B98",
  fontSize: "1.5em",
  fontWeight: "500",
  marginLeft: "12px"
}));

const Text = styled("span")(props => ({
  marginLeft: "12px"
}));

const box = css`
  background: white !important;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  margin-top: 28px;
  padding-left: 28px;
  padding-top: 20px;
  padding-bottom: 60px;
  padding-right: 28px;
  background-color: #efefef;
  hr {
    width: 100%;
  }
  .personal {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    font-weight: bold;
  }
  .lbl {
    margin-left: 4px;
  }
  .inf {
    font-style: italic;
    margin-right: 8px;
  }
  .indent {
    margin-left: 24px;
  }
  .title {
    color: #6a89cc;
  }
  .heading {
    color: #0c2461;
  }
`;
