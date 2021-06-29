import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { createPortal } from 'react-dom';

import dataAttributes from '../../../utils/data-attributes';
import typeValidation from '../../../utils/type-validation';

import HeaderContext from './headerContext';

const ToolItemGroup = ({ children, className, ...remainingProps }) => {
  const [menuLinkElement, setMenuLinkElement] = useState();
  const { isMobile, shortcutClassName } = useContext(HeaderContext);
  useEffect(() => {
    setMenuLinkElement(document.querySelector('.fr-header__menu .fr-links-group'));
  }, [shortcutClassName, setMenuLinkElement, menuLinkElement]);

  return (
    <>
      {isMobile && menuLinkElement && createPortal(children, menuLinkElement)}
      <div
        className={classNames(className, 'fr-header__tools-links')}
        {...dataAttributes(remainingProps)}
      >
        <ul className="fr-links-group">
          {children}
        </ul>
      </div>
    </>
  );
};
ToolItemGroup.defaultProps = {
  __TYPE: 'ToolItemGroup',
  className: '',
};

ToolItemGroup.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: typeValidation('ToolItemGroup'),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
export default ToolItemGroup;
