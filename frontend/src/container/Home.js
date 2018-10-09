import React, { Component } from "react";
import SearchBox from "./SearchBox";
import Header from "../presentational/Header";
import GoButton from "../presentational/GoButton";
import Personal from "../presentational/Personal";
import Diagnosis from "./Diagnosis";
import { css } from "emotion";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { toggle: false };
  }
  render() {
    return (
      <div className={styled}>
        <Header />
        <Personal />
        <SearchBox />
        <GoButton>Search</GoButton>
        <Diagnosis />
      </div>
    );
  }
}

const styled = css`
  display: flex;
  flex-direction: column;
  padding-top: 40;
  padding-left: 20%;
  padding-right: 20%;
  font-family: 'Heebo', sans-serif;
  @media (min-width: 320px) and (max-width: 480px) {
      padding-left: 0%;
      padding-right: 0%;
    }
  }

`;
