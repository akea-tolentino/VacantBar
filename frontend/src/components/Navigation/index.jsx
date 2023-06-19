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
    <div className='nav-container'>
      <ul>
        <li>
          {/* <MdTableBar id='logo'/> */}
          <NavLink exact to="/"><MdTableBar id='logo' />VacantBar{/* replace with App Icon */}</NavLink>
        </li>
        <li className='sign-buttons'>
          {sessionLinks}
          <LuSearch className='search'/>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;