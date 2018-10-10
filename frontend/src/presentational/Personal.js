import React, { Component } from "react";
import { css } from "emotion";

export default class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
  }
  changeAge = e => {
    console.log(e.target.value);
  };
  changeName = e => {
    console.log(e.target.value);
  };
  changeGender = e => {
    console.log(e.target.value);
  };

  render() {
    return (
      <div className={global}>
        <input
          onChange={this.changeName}
          placeholder="What's your name?"
          className="name"
          type="text"
        />
        <input
          onChange={this.changeAge}
          placeholder="Age"
          type="number"
          className="age"
        />
        <select onChange={this.changeGender}>
          <option className="placeholder" value="" disabled selected>
            Gender
          </option>
          <option>Female</option>
          <option>Male</option>
        </select>
      </div>
    );
  }
}

const global = css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 28px 0px 16px 0px;
  input {
    margin: 0px 40px 0px 0px;
    font-size: 1.2em;
    padding: 8px 10px;
    border-radius: 4px;
    border: 2px solid black;
    background-image: none;
    background-color: transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }
  input:focus {
    outline: none;
  }

  select:focus {
    outline: none;
  }

  select {
    color: hsl(0, 0, 50);
    margin: 0px 40px 0px 0px;
    font-size: 1.2em;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 8px 10px;
    border-radius: 4px;
    border: 2px solid black;
    background-image: none;
    background-color: transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }
  .age {
    width: 5ch;
  }
  .placeholder {
    color: hsl(0, 0%, 50);
  }
`;
