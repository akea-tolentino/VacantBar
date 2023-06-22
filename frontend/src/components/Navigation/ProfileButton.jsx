import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { FaRegUser } from "react-icons/fa";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <div className="profile">
        <FaRegUser className="icon" id="user-profile" onClick={openMenu}/>
        {showMenu && (
          <div className="dropdown">
          <ul>
            <h2>Hello, {user.email}</h2>
            <li>{user.email}</li>
            <li>
              <button id="logout" onClick={logout}>Sign Out</button>
            </li>
          </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default ProfileButton;