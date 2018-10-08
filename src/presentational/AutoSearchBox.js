import React, { Component } from "react";
import { css } from "emotion";

export default class AutoSearchBox extends Component {
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

const styled = css`
  width: 100%;
  max-width: 560px;
  border-radius: 4px;
  min-height: 56px;
  border: 2px solid #0984e3;
  font-size: 1.2em;
  padding-left: 8px;
  ::-webkit-input-placeholder {
    /* WebKit browsers */
    color: hsl(0, 0%, 50);
    top: 50%;
  }
  &:focus {
    outline: 5px;
  }
`;
