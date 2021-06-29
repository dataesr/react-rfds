import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import Link from '../Link/index';

const SideMenuLink = ({
  children, href, to, className, onClick, current, ...remainingProps
}) => (
  <li
    className={classNames('fr-sidemenu__item', { 'fr-sidemenu__item--active': current }, className)}
    {...dataAttributes(remainingProps)}
  >
    <Link
      className="fr-sidemenu__link"
      href={href}
      to={to}
      onClick={onClick}
    >
      {children}
    </Link>
  </li>
);

SideMenuLink.defaultProps = {
  className: '',
  to: undefined,
  href: undefined,
  onClick: undefined,
  current: false,
};

SideMenuLink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  href: PropTypes.string,
  to: PropTypes.string,
  current: PropTypes.bool,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  onClick: PropTypes.func,
};

export default SideMenuLink;
