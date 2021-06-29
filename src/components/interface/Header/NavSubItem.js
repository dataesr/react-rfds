import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link/index';
import dataAttributes from '../../../utils/data-attributes';

const NavSubItem = ({
  title, href, to, current, ...remainingProps
}) => (
  <li
    key={title}
    {...dataAttributes(remainingProps)}
  >
    <Link
      className="fr-nav__link"
      href={href}
      to={to}
      current={current}
    >
      {title}
    </Link>
  </li>
);

NavSubItem.defaultProps = {
  href: undefined,
  to: undefined,
  current: false,
};

NavSubItem.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string,
  to: PropTypes.string,
  current: PropTypes.bool,
};

export default NavSubItem;
