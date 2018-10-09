import React, { Component } from "react";
export default class MedicalCare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [1, 2, 3, 4]
    };
  }
  render() {
    return <div>{this.props.info}</div>;
  }
}
