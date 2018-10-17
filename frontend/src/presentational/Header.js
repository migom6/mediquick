import React from "react";
import { css } from "emotion";

const Header = props => {
  return (
    <div className={header}>
      <a href="/" className="left">
        <span className="Medi">Medi</span>
        <span className="Quick">Quick</span>
      </a>
      <span className="right">
        <a href="http://www.google.com" className="help">
          Help
        </a>
        <a href="https://www.github.com/migom6">Github</a>
      </span>
    </div>
  );
};

export default Header;

const header = css`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  color: #000;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin: 16px 0px;
  letter-spacing: 0.1em;
  font-family: "Abril Fatface", cursive;
  a {
    color: black;
  }
  a:link {
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  a:active {
    text-decoration: none;
  }
  .right {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-top: 8px;
  }
  .Medi {
    color: #e74c3c;
  }
  .Quick {
    color: black;
  }
  .left {
    font-size: 2em;
    font-weight: bold;
    &:link {
      text-decoration: none;
    }
  }
  .help {
    margin: 0px 12px;
  }
`;
