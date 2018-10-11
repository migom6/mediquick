import React, { Component } from "react";
import { css } from "emotion";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class AutoSearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    console.log(this.state.value);
    return (
      <input
        className={styled}
        placeholder="What are your symptoms?"
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
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
  return bindActionCreators({}, dispatch);
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
