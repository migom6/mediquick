import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Medicare from "./Medicare";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { toggle: false };
  }
  render() {
    return (
      <Router>
        <Fragment>
          <Route exact path="/" component={Home} />
          <Route
            path="/details"
            render={props => (
              <Medicare
                {...props}
                personal={{ name: "Raghav Tayal", age: 21, sex: "Male" }}
                disease={"malaria"}
              />
            )}
          />
        </Fragment>
      </Router>
    );
  }
}
export default App;
