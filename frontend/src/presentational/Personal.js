import React, { Component } from "react";
import { css } from "emotion";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { set_gender, set_age, set_name } from "../redux/medicActions";

class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
    this.onChangeGender = this.props.onChangeGender.bind(this);
    this.onChangeAge = this.props.onChangeAge.bind(this);
    this.onChangeName = this.props.onChangeName.bind(this);
  }
  changeAge = e => {
    this.onChangeAge(e.target.value);
  };
  changeName = e => {
    this.onChangeName(e.target.value);
  };
  changeGender = e => {
    e.preventDefault();
    this.onChangeGender(e.target.value);
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
        <select onChange={this.changeGender} placeholder="Gender">
          <option value="">Gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
      </div>
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
      onChangeGender: set_gender,
      onChangeAge: set_age,
      onChangeName: set_name
    },
    dispatch
  );
};

export default connect(
  mapStatetoProps,
  mapActionstoProps
)(Personal);

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
  select.selector:first-child {
    color: hsl(0, 0%, 50);
  }
`;
