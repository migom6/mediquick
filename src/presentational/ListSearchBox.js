import React, { Component } from "react";
import makeAnimated from "react-select/lib/animated";
import AsyncSelect from "react-select/lib/Async";
import { options as colourOptions } from "./data";
import { css } from "emotion";

const filterColors = inputValue =>
  colourOptions.filter(i =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );

const loadOptions = (inputValue, callback) => {
  setTimeout(() => {
    callback(filterColors(inputValue));
  }, 10);
};

export default class ListSearchBox extends Component {
  render() {
    return (
      <AsyncSelect
        className={`react-select-container ${styled}`}
        classNamePrefix="react-select"
        autoFocus
        isMulti
        cacheOptions
        components={makeAnimated()}
        loadOptions={loadOptions}
        defaultOptions
        onInputChange={this.handleInputChange}
        placeholder="What are your symptoms?"
      />
    );
  }
}

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
    font-size: 1.2em;
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
