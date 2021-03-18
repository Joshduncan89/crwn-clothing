import React from "react";
import "./Header.styles.scss";
import CartIconComponent from "../cart/Cart-Icon-Component";
import CartDropdown from "../cart/CartDropdown";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { useSelector } from "react-redux";

const Header = () => {
  const authReducer = useSelector((state) => state.authReducer);
  const { currentUser } = authReducer;

  const toggleCart = useSelector((state) => state.toggleCartReducer);
  const { hidden } = toggleCart;

  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo />
      </Link>
      <div className='options'>
        <Link to='/shop' className='option'>
          SHOP
        </Link>
        <Link to='/shop' className='option'>
          CONTACT
        </Link>
        {currentUser ? (
          <Link
            className='option'
            onClick={() => {
              auth.signOut();
            }}
            to='/'
          >
            LOGOUT
          </Link>
        ) : (
          <Link to='/signin' className='option'>
            SIGN IN
          </Link>
        )}
        <CartIconComponent />
      </div>
      {!hidden && <CartDropdown />}
    </div>
  );
};

export default Header;
