import React from "react";
import { css } from "emotion";

const Header = props => {
  return (
    <div className={header}>
      <span className="left">MediQuick</span>
      <span className="right">
        <a href="www.google.com" className="help">
          Help
        </a>
        <a href="www.github.com/migom6">Github</a>
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
  color: #442ab9;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin: 16px 0px;
  .right {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-top: 8px;
  }
  .left {
    font-size: 2em;
    font-weight: bold;
  }
  .help {
    margin: 0px 12px;
  }
`;
