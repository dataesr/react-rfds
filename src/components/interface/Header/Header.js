import React, {
  useState, useEffect, cloneElement, Children,
} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';
import { deepForEach } from '../../../utils/children-utilities';
import dataAttributes from '../../../utils/data-attributes';
import useViewport from '../../../hooks/useViewport';
import HeaderContext from './headerContext';

import '@gouvfr/dsfr/dist/css/navigation.min.css';
import '@gouvfr/dsfr/dist/css/header.min.css';

/**
 *
 * @visibleName Header
 */

const Header = ({
  children,
  className,
  isOpenNav,
  isOpenSearch,
  closeButtonLabel,
  path,
  ...remainingProps
}) => {
  const { width } = useViewport();
  const [openSearch, setOpenSearch] = useState(isOpenSearch || false);
  const [openNav, setOpenNav] = useState(isOpenNav || false);
  let isSearchBar = false;
  let isNavBar = false;
  let isNavTool = false;
  const isMobile = width < 992;

  deepForEach(children, (child) => {
    if (!child) return;
    if (child.type && child.props.__TYPE === 'HeaderNav') {
      isNavBar = true;
    }
    if (child.type && child.props.__TYPE === 'ToolItemGroup') {
      isNavTool = true;
    }
    if (child && !!child.props.onSearch) {
      isSearchBar = true;
    }
  });
  const contextProps = {
    isNavBar,
    isNavTool,
    isMobile,
    isSearchBar,
    isOpenSearch: openSearch,
    onOpenSearch: () => setOpenSearch(!openSearch),
    isOpenNav: !!openNav,
    onOpenNav: (open) => setOpenNav(open),
  };

  useEffect(() => { setOpenNav(false); }, [path]);

  return (
    <HeaderContext.Provider value={contextProps}>
      <header
        className={classNames(className, 'fr-header')}
        role="banner"
        {...dataAttributes(remainingProps)}
      >
        {Children.toArray(children).map(
          (child) => cloneElement(child, { key: uuidv4(), closeButtonLabel }),
        )}
        {isNavTool && openNav && !isNavBar && (
        <div className={`fr-header__menu fr-modal ${openNav ? 'fr-modal--opened' : ''}`}>
          <div className="fr-container">
            <nav
              id="header-navigation"
              className="fr-nav"
              role="navigation"
              aria-label="Menu principal"
            >
              <button
                onClick={() => setOpenNav(false)}
                type="button"
                className="fr-link--close fr-link"
                title={closeButtonLabel}
                aria-controls="header-nav-popin"
              >
                {closeButtonLabel}
              </button>
            </nav>
            <div className="fr-header__menu-links">
              <ul className="fr-links-group" />
            </div>
          </div>
        </div>
        )}
      </header>
    </HeaderContext.Provider>
  );
};

Header.defaultProps = {
  className: '',
  isOpenNav: false,
  isOpenSearch: false,
  closeButtonLabel: 'Fermer',
  path: undefined,
};

Header.propTypes = {
  path: PropTypes.string,
  /**
   * Ouverture de la popin de recherche en mobile
   */
  isOpenSearch: PropTypes.bool,
  /**
   * Ouverture de la popin de navigation en mobile
   */
  isOpenNav: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  closeButtonLabel: PropTypes.string,
};

export default Header;
