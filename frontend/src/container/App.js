import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Medicare from "./Medicare";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { toggle: false };
  }
  render() {
    const { name, age, gender, disease } = this.props.medic;
    return (
      <Router>
        <Fragment>
          <Route exact path="/" component={Home} />
          <Route
            path="/details"
            render={props => (
              <Medicare
                {...props}
                personal={{ name, age, sex: gender }}
                disease={disease}
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
  return {};
};
export default connect(
  mapStatetoProps,
  mapActionstoProps
)(App);
