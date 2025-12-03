import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    id: 1,
    name: 'Usman Muneer',
    email: 'sarah@example.com',
    userType: 'homeowner', 
    profileImage: null,
    location: 'London, UK',
    joinDate: '2024-01-15'
  });

  const tradesUser = {
    id: 2,
    name: 'Usman Muneer',
    email: 'usman@example.com',
    userType: 'trades',
    profileImage: null,
    location: 'Manchester, UK',
    joinDate: '2023-06-10',
    rating: 4.8,
    reviewCount: 45
  };

  const homeownerUser = {
    id: 1,
    name: 'Usman Muneer',
    email: 'sarah@example.com',
    userType: 'homeowner',
    profileImage: null,
    location: 'London, UK',
    joinDate: '2024-01-15'
  };

  const switchToTradesUser = () => {
    setCurrentUser(tradesUser);
  };

  const switchToHomeownerUser = () => {
    setCurrentUser(homeownerUser);
  };

  const value = {
    currentUser,
    setCurrentUser,
    switchToTradesUser,
    switchToHomeownerUser,
    tradesUser,
    homeownerUser
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
