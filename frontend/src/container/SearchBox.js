import React, { Component } from "react";
import { css } from "emotion";

import ListSearchBox from "../presentational/ListSearchBox";
import AutoSearchBox from "../presentational/AutoSearchBox";
import Toggle from "../presentational/Toggle";

export default class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
  }
  toggle = () => {
    this.setState({ toggle: !this.state.toggle });
    console.log(this.state);
  };
  render() {
    return (
      <div className={styles}>
        {!this.state.toggle ? <AutoSearchBox /> : <ListSearchBox />}
        <Toggle checked={!this.state.toggle} toggle={this.toggle} />
      </div>
    );
  }
}

const styles = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
