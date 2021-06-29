import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';
import Link from '../Link/index';
import dataAttributes from '../../../utils/data-attributes';

const MegaNavSubItem = ({
  children, title, href, to, ...remainingProps
}) => {
  const childs = Children.toArray(children).map((child) => cloneElement(child, { className: 'fr-nav__link' }));
  return (
    <div
      className="fr-col-12 fr-col-lg-3"
      {...dataAttributes(remainingProps)}
    >
      <h5 className="fr-mega-menu__category">
        <Link className="fr-nav__link" href={href} to={to} target="_self">{title}</Link>
      </h5>
      <ul className="fr-mega-menu__list">
        {childs.map((child) => <li key={uuidv4()}>{child}</li>)}
      </ul>
    </div>
  );
};

MegaNavSubItem.defaultProps = {
  title: '',
  href: undefined,
  to: undefined,
};

MegaNavSubItem.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
};

export default MegaNavSubItem;
