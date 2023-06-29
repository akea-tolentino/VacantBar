import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { FaRegUser } from "react-icons/fa";
import UserReservationsModal from "../Reservations/UserReservationsModal";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {

      const current_target = document.querySelector(".dropdown");
      const current_children = Array.from(current_target.querySelectorAll("*"));
      
      if (e.target === current_target || current_children.includes(e.target)) {return};
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  const changeModal = () => {
    if (showModal) {
      return setShowModal(false)
    }
    setShowModal(true);
  }

  return (
    <>
      <div className="profile">
        <FaRegUser id="user-profile" onClick={openMenu}/>
        {showMenu && (
            <ul className="dropdown">
              <h2>Hello, {user.username}</h2>
              <li>{user.email}</li>
              <button onClick={changeModal}>Reservations</button>
              <button id="logout" onClick={logout}>Sign Out</button>
            </ul>
        )}
        {showModal && <UserReservationsModal changeModal={changeModal} user={user}/>}
      </div>
    </>
  );
}

export default ProfileButton;