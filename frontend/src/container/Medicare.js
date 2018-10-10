import React, { Component } from "react";
import { css } from "emotion";
import MedicalCare from "../presentational/MedicalCare";
import Header from "../presentational/Header";
import LoadingCard from "../presentational/LoadingCard";
export default class Diseases extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: []
    };
  }

  componentDidMount() {
    this.fetchdata(this.props.disease);
  }

  fetchdata = disease => {
    console.log(disease);
    fetch(`http://139.59.27.218:5000/results/${disease}`)
      .then(response => response.json())
      .then(data => this.setState({ info: data.results }));
  };

  render() {
    const { info } = this.state;
    const { disease } = this.props;

    if (info.length === 0) {
      return (
        <div className={styled}>
          <Header />
          <p>{`Loading data for ${disease}...`}</p>
          <LoadingCard />
        </div>
      );
    }
    return (
      <div className={styled}>
        <Header />
        <MedicalCare personal={this.props.personal} info={this.state.info} />
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
