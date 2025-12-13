import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutStart } from '../../store/user/user.action';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
  UserGreeting,
  LeftContainer,
} from './navigation.styles';

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

  const getFirstName = (displayName) => {
    if (!displayName) return 'User';
    return displayName.split(' ')[0];
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LeftContainer>
          <LogoContainer to='/'>
            <CrwnLogo className='logo' />
          </LogoContainer>
          {currentUser && (
            <UserGreeting>
              Hello, {getFirstName(currentUser.displayName)}!
            </UserGreeting>
          )}
        </LeftContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>

          {currentUser ? (
            <>
              <NavLink to='/profile'>PROFILE</NavLink>
              <NavLink as='span' onClick={signOutUser}>
                SIGN OUT
              </NavLink>
            </>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
