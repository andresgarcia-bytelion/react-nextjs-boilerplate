import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useFetchUser } from '@/lib/user';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const { loading, user } = useFetchUser();
  const [currentUser, setCurrentUser] = useState();
  const [currentCardUser, setCurrentCardUser] = useState();

  useEffect(() => {
    if (user && !loading) {
      setCurrentUser(user);
    }
  }, [user]);

  return (
    <AppContext.Provider value={{ currentUser, setCurrentUser, currentCardUser, setCurrentCardUser }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContextProvider;
