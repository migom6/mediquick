import React, { Component } from "react";
import { css } from "emotion";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { set_issues } from "../redux/medicActions";
import AutoSearch from "../utils/autoSearch";

class AutoSearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  handleChange = event => {
    if (this.state.value.length > 4) {
      let input_text = this.state.value.split(" ");
      let symptoms = new AutoSearch(input_text, this.props.medic.symptoms);
      let selected_symptoms = symptoms.predict();
      this.props.setIssues(selected_symptoms);
      this.setState({ details: true });
    }
  };
  onChange = e => {
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <input
        className={styled}
        placeholder="Write your symptoms? eg: I am having pack pain..."
        type="text"
        value={this.state.value}
        onBlur={this.handleChange}
        onChange={this.onChange}
      />
    );
  }
}

const mapStatetoProps = (state, props) => {
  return {
    medic: state.medic,
    ...props
  };
};
const mapActionstoProps = (dispatch, props) => {
  return bindActionCreators(
    {
      setIssues: set_issues
    },
    dispatch
  );
};

export default connect(
  mapStatetoProps,
  mapActionstoProps
)(AutoSearchBox);

const styled = css`
  width: 100%;
  max-width: 560px;
  border-radius: 4px;
  min-height: 56px;
  border: 2px solid black;
  font-size: 1.2em;
  padding-left: 8px;
  ::-webkit-input-placeholder {
    /* WebKit browsers */
    color: hsl(0, 0%, 50);
  }
  &:focus {
    outline: 5px;
  }
`;
