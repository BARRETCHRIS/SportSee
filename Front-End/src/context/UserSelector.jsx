// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function UserSelector() {
//   const [selectedUserID, setSelectedUserID] = useState('12'); // ID par défaut
//   const navigate = useNavigate();

//   const handleSwitchID = (newID) => {
//     setSelectedUserID(newID);
//   };

//   const goToProfile = () => {
//     navigate(`/profile/${selectedUserID}`);
//   };

//   return (
//     <div className="user-selector">
//       <div className="buttons">
//         <button onClick={() => handleSwitchID('12')}>Switch to User 12</button>
//         <button onClick={() => handleSwitchID('18')}>Switch to User 18</button>
//       </div>
//       <button onClick={goToProfile}>Go to Profile</button>
//     </div>
//   );
// }

// export default UserSelector;


import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserSelectorContext = createContext();

export function useUserSelector() {
  return useContext(UserSelectorContext);
}

export function UserSelectorProvider({ children }) {
  const [selectedUserID, setSelectedUserID] = useState('12'); // ID par défaut
  const navigate = useNavigate();

  const handleSwitchID = (newID) => {
    setSelectedUserID(newID);
  };

  const goToProfile = () => {
    navigate(`/profile/${selectedUserID}`);
  };

  return (
    <UserSelectorContext.Provider value={{ selectedUserID, handleSwitchID, goToProfile }}>
      {children}
    </UserSelectorContext.Provider>
  );
}

export default function UserSelector() {
  const { handleSwitchID, goToProfile } = useUserSelector();

  return (
    <div className="user-selector">
      <div className="buttons">
        <button onClick={() => handleSwitchID('12')}>Switch to User 12</button>
        <button onClick={() => handleSwitchID('18')}>Switch to User 18</button>
      </div>
      <button onClick={goToProfile}>Go to Profile</button>
    </div>
  );
}
