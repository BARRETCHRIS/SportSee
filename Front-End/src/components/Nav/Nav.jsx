import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useUserSelector } from '../../context/UserSelector';
import './nav.scss';

function Nav() {
  const location = useLocation();
  const { selectedUserID, goToProfile } = useUserSelector();

  const handleProfileClick = (e) => {
    e.preventDefault();
    if (selectedUserID) {
      goToProfile();
    } else {
      alert("Veuillez sélectionner un profil.");
    }
  };

  return (
    <nav className='nav'>
        <menu className='nav_list'>
            <li className={`nav_list_item ${location.pathname === '/' ? 'active' : ''}`}>
              <Link to="/">Accueil</Link>
            </li>
            <li className={`nav_list_item ${location.pathname.startsWith('/profile') ? 'active' : ''}`}>
              <Link to="/profile" onClick={handleProfileClick}>Profile</Link>
            </li>
            <li className={`nav_list_item ${location.pathname === '/tuning' ? 'active' : ''}`}>
              <Link to="/tuning">Réglage</Link>
            </li>
            <li className={`nav_list_item ${location.pathname === '/cluster' ? 'active' : ''}`}>
              <Link to="/cluster">Communauté</Link>
            </li>
        </menu>
    </nav>
  );
}

export default Nav;
