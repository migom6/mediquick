import React, { Component } from "react";
export default class MedicalCare extends Component {
  // renderCards = () =>
  //   this.props.info.map((element, index) => {
  //     let lines = element.split("\n");
  //     if (index === 0) {
  //       lines = lines.slice(1);
  //     }
  //     lines.map((e, i) => {
  //       if (i % 2 === 0) return <h1>{e}</h1>;
  //       else return <h3>{e}</h3>;
  //     });
  //   });
  renderCards = () =>
    this.props.info.map((element, index) => {
      let lines = element.split("\n");
      return lines.map((e, i) => {
        if (i === 0) return <h1>{e}</h1>;
        else {
          if (i % 2 === 1) return <h2>{e}</h2>;
          else return <h4>{e}</h4>;
        }
      });
    });
  render() {
    return <div>{this.renderCards()}</div>;
  }
}
