import React, { useState, useEffect } from "react";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { positionsFetch } from "../../redux/menu/menu.actions";
import { selectMenuPositions } from "../../redux/menu/menu.selectors";

import VerticalMenu from "./../vertical-menu/vertical-menu.component";

import "./horizontal-menu.style.scss";

const HorizontalMenu = ({ positionsFetch, positions }) => {
  useEffect(() => {
    positionsFetch();
  }, []);

  const [menuState, setMenuState] = useState({
    expand: false,
    menus: {},
    active: ""
  });

  const { menus } = menuState;

  const expand = (active, menus) => {
    if (menuState.active === active) {
      setMenuState({
        ...menuState,
        expand: !menuState.expand,
        menus
      });
    } else {
      setMenuState({
        ...menuState,
        expand: true,
        menus,
        active
      });
    }
  };

  return (
    <div
      className={`menu-horizontal${
        menuState.expand ? " menu-horizontal--expand" : ""
      }`}
    >
      <ul className="menu-horizontal__main">
        {positions.map(position => (
          <li
            key={position.id}
            className="menu-horizontal__item"
            onClick={() => expand(position.name, position.menus)}
          >
            {position.name}
          </li>
        ))}
      </ul>

      <div className="menu-vertical__container">
        {Object.keys(menus).map(menu => (
          <VerticalMenu
            key={menus[menu].id}
            name={menus[menu].name}
            items={menus[menu].items}
          />
        ))}
      </div>

      <div
        className={`vertical-menu${
          menuState.expand ? "" : "vertical-menu--hidden"
        }`}
      ></div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  positions: selectMenuPositions
});

const mapDispatchToProps = dispatch => ({
  positionsFetch: () => dispatch(positionsFetch())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HorizontalMenu);
