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

export default class WithCallbacks extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

const styled = css`
  .react-select__control {
    color: "green";
    border-radius: 28px;
    min-height: 56px;
    border-color: #0fbcf9;
  }
  .react-select__value-container {
    color: "green";
  }
  .react-select__clear-indicators {
    color: "green";
    backgroundcolor: "orange";
  }
  .react-select__multi-value {
    border-radius: 28px;
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
    border-radius: 0 13px 13px 0;
  }
  .react-select__placeholder {
    font-size: 1.2em;
  }
  .react-select__dropdown-indicator .react-select__indicator-separator {
    border-color: #0fbcf9;
    backgroundcolor: #0fbcf9;
  }
`;
