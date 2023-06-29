import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { FaRegUser } from "react-icons/fa";
import UserReservationsModal from "../Reservations/UserReservationsModal";

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

    // document.addEventListener('click', closeMenu);
    // document.getElementById('modal-background').addEventListener('click', closeMenu)

    // return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <div className="profile">
        <FaRegUser id="user-profile" onClick={openMenu}/>
        {showMenu && (
            <ul className="dropdown">
              <h2>Hello, {user.username}</h2>
              <li>{user.email}</li>
              <UserReservationsModal user={user}/>
              <button id="logout" onClick={logout}>Sign Out</button>
            </ul>
        )}
      </div>
    </>
  );
}

export default ProfileButton;