import React, { Component } from "react";
import makeAnimated from "react-select/lib/animated";
import Select from "react-select";
import { css } from "emotion";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { set_issues } from "../redux/medicActions";

class ListSearchBox extends Component {
  loadOptions = () => {
    const { symptoms } = this.props.medic;
    let symp = [];
    for (let i = 0; i < symptoms.length; i++) {
      let k = {};
      k.label = symptoms[i].Name;
      k.value = symptoms[i].ID;
      symp.push(k);
    }
    return symp;
  };
  handleInputChange = values => {
    this.props.setIssues(values);
  };
  render() {
    return (
      <Select
        className={`react-select-container ${styled}`}
        classNamePrefix="react-select"
        autoFocus
        isMulti
        cacheOptions
        components={makeAnimated()}
        options={this.loadOptions()}
        defaultOptions
        onChange={this.handleInputChange}
        placeholder="What are your symptoms?"
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
)(ListSearchBox);

const styled = css`
  width: 100%;
  max-width: 560px;
  border-radius: 4px;
  border-color: black;
  .react-select__control {
    border-radius: 4px;
    border: 2px solid black;
    min-height: 56px;
    border-color: black;
  }
  .react-select__value-container {
  }
  .react-select__clear-indicators {
  }
  .react-select__multi-value {
    border-radius: 4px;
    min-height: 36px;
  }
  .react-select__multi-value__label {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2px 12px 2px 12px;
    font-size: 1em;
  }
  .react-select__multi-value__remove {
    border-radius: 0 4px 4px 0;
  }
  .react-select__placeholder {
    font-size: 1.2em;
  }
  .react-select__dropdown-indicator .react-select__indicator-separator {
    border-color: black;
    backgroundcolor: black;
  }
`;
