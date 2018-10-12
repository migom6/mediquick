import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { bindActionCreators } from "redux";
import Home from "./Home";
import Medicare from "./Medicare";
import { connect } from "react-redux";
import { set_symptoms } from "../redux/medicActions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { toggle: false };
    this.getSymptoms = this.props.getSymptoms.bind(this);
  }
  componentDidMount() {
    this.getSymptoms();
  }
  render() {
    const { name, age, gender, disease } = this.props.medic;
    return (
      <Router>
        <Fragment>
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route
            path="/details"
            render={props => (
              <Medicare
                {...props}
                disease={disease}
                personal={{ name, age, sex: gender }}
              />
            )}
          />
        </Fragment>
      </Router>
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
      getSymptoms: set_symptoms
    },
    dispatch
  );
};
export default connect(
  mapStatetoProps,
  mapActionstoProps
)(App);
