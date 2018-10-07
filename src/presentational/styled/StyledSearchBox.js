import React, { Fragment } from "react";
import styled from "react-emotion";
const StyledSeachBox = styled(Fragment)`
  .react-select__control {
    color: "green";
  }
  .react-select__value-container {
    color: "yellow";
  }
`;

export default props => <StyledSeachBox {...props} />;
