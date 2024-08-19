import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Création du contexte pour la sélection d'utilisateur
const UserSelectorContext = createContext();

/**
 * Custom hook to use the UserSelectorContext.
 *
 * This hook provides access to the current user ID, the function to switch user IDs, and the function to navigate to the user's profile.
 *
 * @returns {Object} An object containing:
 * - selectedUserID: {String} The currently selected user ID.
 * - handleSwitchID: {Function} Function to update the selected user ID.
 * - goToProfile: {Function} Function to navigate to the user's profile.
 */
export function useUserSelector() {
  return useContext(UserSelectorContext);
}

/**
 * Provides the UserSelectorContext to its children.
 *
 * This component manages the selected user ID and provides functions to switch user IDs and navigate to the user's profile.
 * It also persists the selected user ID in localStorage.
 *
 * @component
 * @category Context Providers
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The children components that will have access to the context.
 * @returns {React.Component} A context provider component wrapping its children.
 */
export function UserSelectorProvider({ children }) {
  // State to manage the currently selected user ID, initialized from localStorage or default to '12'
  const [selectedUserID, setSelectedUserID] = useState(() => {
    return localStorage.getItem('selectedUserID') || '12';
  });

  // Hook for navigation
  const navigate = useNavigate();

  // Effect to update localStorage whenever the selected user ID changes
  useEffect(() => {
    localStorage.setItem('selectedUserID', selectedUserID);
  }, [selectedUserID]);

  /**
   * Updates the selected user ID state.
   *
   * @param {String} newID - The new user ID to set as selected.
   */
  const handleSwitchID = (newID) => {
    setSelectedUserID(newID);
  };

  /**
   * Navigates to the profile page of the currently selected user.
   */
  const goToProfile = () => {
    navigate(`/profile/${selectedUserID}`);
  };

  return (
    <UserSelectorContext.Provider value={{ selectedUserID, handleSwitchID, goToProfile }}>
      {children}
    </UserSelectorContext.Provider>
  );
}