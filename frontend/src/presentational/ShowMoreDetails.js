import React, { Component } from "react";
import { css } from "emotion";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class ShowMoreDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: false
    };
  }

  moreDetails = () => {
    this.setState({ details: true });
  };

  getNamesofSymptoms = () => {
    const { issues } = this.props.medic;
    let names = [];
    if (issues.length === 0) {
      return "No issues matching our database";
    }
    for (let i = 0; i < issues.length; i++) {
      names.push(issues[i].label);
    }
    names = names.join(", ");
    return names;
  };
  render() {
    const { issues } = this.props.medic;
    if (issues.length > 0) {
      return (
        <div className={styles} onClick={this.moreDetails}>
          <div>
            Found {issues.length} issues related to you,{" "}
            <u>Click here for more details</u>
          </div>
          {this.state.details ? (
            <div className="diagnosis">{this.getNamesofSymptoms()}</div>
          ) : (
            false
          )}
        </div>
      );
    }
    return false;
  }
}

const mapStatetoProps = (state, props) => {
  return {
    medic: state.medic,
    ...props
  };
};
const mapActionstoProps = (dispatch, props) => {
  return bindActionCreators({}, dispatch);
};

export default connect(
  mapStatetoProps,
  mapActionstoProps
)(ShowMoreDetails);

const styles = css`
  cursor: pointer;
  align-items: center;
  .diagnosis {
    color: #b71540;
  }
`;
