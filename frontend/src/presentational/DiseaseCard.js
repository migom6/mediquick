import React, { Component } from "react";
import styled from "react-emotion";
import { css } from "emotion";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { set_disease } from "../redux/medicActions";

class DiseaseCard extends Component {
  goMedicare = () => {
    console.log(this.props.info.prof_name);
    this.props.setDisease(this.props.info.prof_name);
  };
  render() {
    let prof_name = this.props.info.prof_name;
    let common_name = this.props.info.common_name;
    let accuracy = this.props.info.accuracy;
    let gradient = this.props.gradient;
    return (
      <Stylediv
        to="/details"
        onClick={this.goMedicare}
        className={style}
        gradient={gradient}
      >
        <span className="prof">{prof_name}</span>
        <span>{common_name}</span>
        <span>Accuracy: {accuracy}</span>
      </Stylediv>
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
      setDisease: set_disease
    },
    dispatch
  );
};
export default connect(
  mapStatetoProps,
  mapActionstoProps
)(DiseaseCard);

const style = css`
  transition: all 0.2s ease-in-out;
  &:hover {
    -ms-transform: scale(1.3, 1.3); /* IE 9 */
    -webkit-transform: scale(1.3, 1.3); /* Safari */
    transform: scale(1.3, 1.3);
  }
  span {
    margin-bottom: 4px;
  }
  .prof {
    font-size: 1.5em;
  }
  text-decoration: none;
  &:visited {
    text-decoration: none;
  }
  &:hover {
    text-decoration: none;
  }
  &:active {
    text-decoration: none;
  }
`;
const Stylediv = styled(Link)(props => ({
  padding: "20px",
  marginLeft: "16px",
  marginBottom: "16px",
  width: "25%",
  color: "white",
  display: "flex",
  background: `linear-gradient(${props.gradient})`,
  flexDirection: "column",
  alignItems: "center",
  border: "1px solid white",
  borderRadius: "8px",
  fontWeight: "bold",
  cursor: "pointer",
  boxShadow: "1px 1px #fff"
}));
