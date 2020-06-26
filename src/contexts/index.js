import React, {
  createContext,
  useContext,
} from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const title = 'Test';

  return (
    <AppContext.Provider value={{ title }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContextProvider;
