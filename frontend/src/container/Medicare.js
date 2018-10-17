import React, { Component } from "react";
import { css } from "emotion";
import MedicalCare from "../presentational/MedicalCare";
import Header from "../presentational/Header";
import LoadingCard from "../presentational/LoadingCard";
export default class Diseases extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: {},
      error: false,
      isLoading: true
    };
  }

  componentDidMount() {
    this.fetchdata(this.props.disease);
  }

  fetchdata = disease => {
    fetch(`${process.env.REACT_APP_URL}/api/results/?disease=${disease}`)
      .then(response => response.json())
      .then(data => this.setState({ result: data.result, isLoading: false }))
      .catch(e => this.setState({ error: true }));
  };

  render() {
    const { result, error, isLoading } = this.state;
    const { disease, personal } = this.props;
    if (error === true) {
      return (
        <div className={styled}>
          <Header />
          <div>No result found</div>
        </div>
      );
    }
    if (isLoading === true) {
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
        <MedicalCare personal={personal} result={result} />
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
  background: #fbfbfb;
  font-family: 'Heebo', sans-serif;
  @media (min-width: 320px) and (max-width: 480px) {
      padding-left: 0%;
      padding-right: 0%;
    }
  }

`;
