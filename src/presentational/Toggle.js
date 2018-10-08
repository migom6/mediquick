import React, { Component } from "react";
import { css } from "emotion";

export default class Toggle extends Component {
  toggle = e => {
    e.preventDefault();
    this.props.toggle();
  };
  render() {
    return (
      <label className={this.props.checked ? styled1 : styled2}>
        <input onChange={this.toggle} className="input" type="checkbox" />
        <span className="slider round" />
      </label>
    );
  }
}

const styled1 = css`
  margin-left: 12px;
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  border: solid 1px black;
  border-radius: 34px;
  .input {
    display: none;
    z-index: 99;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    -o-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    -o-transition: 0.4s;
    transition: 0.4s;
  }
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

const styled2 = css`
  margin-left: 12px;
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  border: solid 1px black;
  border-radius: 34px;
  .input {
    z-index: 22;
    display: none;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    -o-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    -o-transition: 0.4s;
    transition: 0.4s;
  }

  .input + .slider {
    background-color: #353740;
  }

  .input + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
