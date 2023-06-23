import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import SignupFormModal from '../SignupFormModal';
import { LuSearch  } from "react-icons/lu";
import { MdTableBar } from "react-icons/md";

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal />
      </>
    );
  }

  return (
      <ul className='nav-container'>
        <li className='logo'>
          <NavLink className="home-link" exact to="/">
            <MdTableBar />
            <span >
              VacantBar
            </span>
          </NavLink>
        </li>
        <ul className='sign-buttons-container'>
          <li className='sign-links-container'>
            {sessionLinks}
          </li>
          <li className='nav-search-container'>
            <LuSearch className='search'/>
          </li>
        </ul>
      </ul>
  );
}

export default Navigation;