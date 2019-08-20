import React from "react";
import "./menu-item.style.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => {
      history.push(`${match.url}${linkUrl}`);
    }}
  >
    <div
      className="menu-item__background"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    >
      <div className="menu-item__content">
        <h1 className="menu-item__title">{title}</h1>
        <span className="menu-item__subtitle">SHOP NOW</span>
      </div>
    </div>
  </div>
);

export default withRouter(MenuItem);
