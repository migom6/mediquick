import React, { Component } from "react";
import MedicalCare from "../presentational/MedicalCare";
export default class Diseases extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [1, 2, 3, 4]
    };
  }
  componentDidMount() {}
  render() {
    return <MedicalCare info={this.props.info} />;
  }
}
