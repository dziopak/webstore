import React from "react";

import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { auth } from "./../../firebase/firebase.utils";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "./../../assets/img/crown.svg";
import { selectCartVisible } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOut } from "../../redux/user/user.actions";

import CartIcon from "./../cart-icon/cart-icon.component";
import CartDropdown from "./../cart-dropdown/cart-dropdown.component";

import "./header.style.scss";

const Header = ({ currentUser, show, signOut }) => {
  return (
    <div className="header">
      <Link className="header__logo-container" to="/">
        <Logo className="header__logo" />
      </Link>

      <div className="menu">
        <Link className="menu__item" to="/">
          Homepage
        </Link>
        <Link className="menu__item" to="/shop">
          Shop
        </Link>
        <Link className="menu__item" to="/contact">
          Contact
        </Link>
        {currentUser ? (
          <div className="menu__item" onClick={() => signOut()}>
            Sign out
          </div>
        ) : (
          <Link className="menu__item" to="/sign-in">
            Sign in
          </Link>
        )}
        <CartIcon />
      </div>
      {show ? <CartDropdown /> : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  show: selectCartVisible,
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
