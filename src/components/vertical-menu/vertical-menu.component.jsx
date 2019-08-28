import React from "react";
import "./vertical-menu.style.scss";

import { Link } from "react-router-dom";

class VerticalMenu extends React.Component {
  state = {
    active: null
  };

  render() {
    const { items, name } = this.props;
    return (
      <div className="menu-vertical">
        <ul className="menu-vertical__list">
          <li className="menu-vertical__item menu-vertical__item--header">
            {name}
          </li>
          {Object.keys(items).map(el => (
            <li className="menu-vertical__item">
              <Link to={items[el].linkUrl}>{items[el].name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default VerticalMenu;
