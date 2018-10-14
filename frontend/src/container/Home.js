import React, { Component } from "react";
import SearchBox from "./SearchBox";
import Header from "../presentational/Header";
import GoButton from "../presentational/GoButton";
import Personal from "../presentational/Personal";
import ShowMoreDetails from "../presentational/ShowMoreDetails";
import Diagnosis from "./Diagnosis";
import { css } from "emotion";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { set_diagnosis } from "../redux/medicActions";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { toggle: false };
  }
  onClick = () => {
    this.props.getDiagnosis();
  };
  render() {
    if (this.props.medic.symptoms === "Invalid token") {
      return <h1>Token Error, API limits exceeded</h1>;
    }
    const { diagnosis, issues, age, toggle } = this.props.medic;
    return (
      <div className={styled}>
        <Header />
        <Personal />
        <SearchBox />
        {!toggle ? <ShowMoreDetails /> : false}
        <GoButton onClick={this.onClick}>Search</GoButton>
        <Diagnosis
          toggle={toggle}
          issues={issues}
          age={age}
          diagnosis={diagnosis}
        />
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
      getDiagnosis: set_diagnosis
    },
    dispatch
  );
};
export default connect(
  mapStatetoProps,
  mapActionstoProps
)(Home);

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
  .show {
    text-decoration :underline;
  }
  .details {
    text-decoration : none;
  }
`;
