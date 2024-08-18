import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useUserSelector } from '../../context/UserSelector';
import './nav.scss';

/**
 * Nav Component
 * 
 * This component renders the main navigation menu for the application.
 * It includes links to different sections of the app (e.g., Home, Profile, Settings, Community),
 * and highlights the currently active page.
 * 
 * @category Components
 * @component
 * @returns {React.Component} A React component that displays the navigation menu.
 */
function Nav() {
  // Get the current location to determine which link is active
  const location = useLocation();
  
  // Custom hook for user selection context, providing the selected user ID and a function to navigate to the profile
  const { selectedUserID, goToProfile } = useUserSelector();

  /**
   * Handle Profile Click
   * 
   * This function is triggered when the "Profile" link is clicked.
   * If a user profile is selected, it navigates to the profile page.
   * If no profile is selected, it alerts the user to select a profile first.
   * 
   * @param {Event} e - The click event.
   */
  const handleProfileClick = (e) => {
    e.preventDefault();
    if (selectedUserID) {
      // Navigate to the selected user's profile
      goToProfile();
    } else {
      // Alert the user if no profile is selected
      alert("Veuillez sélectionner un profil.");
    }
  };

  return (
    <nav className='nav'>
      {/* Navigation menu list */}
      <menu className='nav_list'>
        {/* Home link */}
        <li className={`nav_list_item ${location.pathname === '/' ? 'active' : ''}`}>
          <Link to="/">Accueil</Link>
        </li>
        
        {/* Profile link with custom onClick handler */}
        <li className={`nav_list_item ${location.pathname.startsWith('/profile') ? 'active' : ''}`}>
          <Link to="/profile" onClick={handleProfileClick}>Profile</Link>
        </li>
        
        {/* Settings link */}
        <li className={`nav_list_item ${location.pathname === '/tuning' ? 'active' : ''}`}>
          <Link to="/tuning">Réglage</Link>
        </li>
        
        {/* Community link */}
        <li className={`nav_list_item ${location.pathname === '/cluster' ? 'active' : ''}`}>
          <Link to="/cluster">Communauté</Link>
        </li>
      </menu>
    </nav>
  );
}

export default Nav;