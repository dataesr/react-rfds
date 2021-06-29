import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

export const RouterContext = createContext(null);

export const RouterContextProvider = ({ children, Router }) => (
  <RouterContext.Provider value={Router}>
    {children}
  </RouterContext.Provider>
);
RouterContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  Router: PropTypes.element,
};
RouterContextProvider.defaultProps = {
  Router: null,
};

const useRouterContext = () => useContext(RouterContext);
export default useRouterContext;
