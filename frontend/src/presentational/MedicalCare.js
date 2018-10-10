import React, { Component } from "react";
import styled from "react-emotion";
import { css } from "emotion";

export default class MedicalCare extends Component {
  renderCards = () =>
    this.props.info.map((element, index) => {
      let lines = element.split("\n");
      return lines.map((e, i) => {
        if (i === 0) return <Heading>{e}</Heading>;
        else {
          if (i % 2 === 1) return <SubHeading>{e}</SubHeading>;
          else return <Text>{e}</Text>;
        }
      });
    });
  render() {
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
        {this.renderCards()}
      </div>
    );
  }
}
const Title = styled("h1")(props => ({
  alignSelf: "center",
  color: "#2C3A47"
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
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 8px;
  margin-top: 28px;
  padding-left: 28px;
  padding-top: 20px;
  padding-bottom: 60px;
  background-color: #efefef;
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
`;
