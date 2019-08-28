import React from "react";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { positionsFetch } from "../../redux/menu/menu.actions";
import { selectMenuPositions } from "../../redux/menu/menu.selectors";

import VerticalMenu from "./../vertical-menu/vertical-menu.component";

import "./horizontal-menu.style.scss";

class HorizontalMenu extends React.Component {
  state = {
    expand: false,
    menus: {},
    active: ""
  };

  expand = (active, menus) => {
    if (this.state.active === active) {
      this.setState({
        expand: !this.state.expand,
        menus
      });
    } else {
      this.setState({
        expand: true,
        menus,
        active
      });
    }
  };

  componentDidMount() {
    const { positionsFetch } = this.props;
    positionsFetch();
  }

  render() {
    const { positions } = this.props;
    const { menus } = this.state;

    return (
      <div
        className={`menu-horizontal${
          this.state.expand ? " menu-horizontal--expand" : ""
        }`}
      >
        <ul className="menu-horizontal__main">
          {positions.map(position => (
            <li
              key={position.id}
              className="menu-horizontal__item"
              onClick={() => this.expand(position.name, position.menus)}
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
            this.state.expand ? "" : "vertical-menu--hidden"
          }`}
        ></div>
      </div>
    );
  }
}

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
