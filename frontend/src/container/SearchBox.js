import React, { Component } from "react";
import { css } from "emotion";

import ListSearchBox from "../presentational/ListSearchBox";
import AutoSearchBox from "../presentational/AutoSearchBox";
import Toggle from "../presentational/Toggle";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { set_toggle } from "../redux/medicActions";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
    this.onChangeToggle = this.props.onChangeToggle.bind(this);
  }
  toggle = () => {
    this.onChangeToggle(!this.state.toggle);
    this.setState({ toggle: !this.state.toggle });
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

const mapStatetoProps = (state, props) => {
  return {
    medic: state.medic,
    ...props
  };
};
const mapActionstoProps = (dispatch, props) => {
  return bindActionCreators(
    {
      onChangeToggle: set_toggle
    },
    dispatch
  );
};

export default connect(
  mapStatetoProps,
  mapActionstoProps
)(SearchBox);

const styles = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
