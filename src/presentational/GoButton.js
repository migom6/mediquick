import styled from "react-emotion";

const GoButton = styled("button")`
  max-width: 100px;
  color: #0984e3;
  background: white;
  border: 1px solid;
  border-radius: 4px;
  font-size: 1.1em;
  padding: 8px 16px 8px 16px;
  margin-top: 16px;
  cursor: pointer !important;
  &:focus {
    outline: 0 !important;
  }
  &:hover {
    background: #0984e3;
    color: white;
  }
`;
export default GoButton;
