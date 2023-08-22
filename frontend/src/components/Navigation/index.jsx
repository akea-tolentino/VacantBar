import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import SignupFormModal from '../SignupFormModal';
import { MdTableBar } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";
// import { LuSearch  } from "react-icons/lu";


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
          {/* <li className='nav-search-container'>
            <LuSearch className='search'/>
          </li> */}
          <li className="github">
            <a href="https://github.com/akea-tolentino/VacantBar.git" target={'_blank'}>
                <BsGithub />
            </a>
          </li>
          <li className="linkedin">
            <a href="https://www.linkedin.com/in/jamesbradley-akea-tolentino-813555229/" target={'_blank'}>
                <BsLinkedin />
            </a>
          </li>
        </ul>
      </ul>
  );
}

export default Navigation;
