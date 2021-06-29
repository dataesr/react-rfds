import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';
import useCollapse from '../../../hooks/useCollapse';
import dataAttributes from '../../../utils/data-attributes';

const SideMenuItem = ({
  children, title, current, className, ...remainingProps
}) => {
  const itemID = uuidv4();
  const [isExpanded, setExpanded] = useState(current);
  const { item, collapse } = useCollapse(itemID, isExpanded);
  return (
    <li
      className={classNames('fr-sidemenu__item', { 'fr-sidemenu__item--active': current }, className)}
      {...dataAttributes(remainingProps)}
    >
      <button
        type="button"
        onClick={() => setExpanded(!isExpanded)}
        className="fr-sidemenu__btn"
        aria-expanded={isExpanded}
        aria-controls={itemID}
      >
        {title}
      </button>
      <div
        className={item.class}
        id={itemID}
        style={{ maxHeight: item.stateHeight, '--collapse': collapse }}
        data-testid={itemID}
      >
        <ul className="fr-sidemenu__list">
          {children}
        </ul>
      </div>
    </li>
  );
};

SideMenuItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string.isRequired,
  current: PropTypes.bool,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
SideMenuItem.defaultProps = {
  className: '',
  current: false,
};
export default SideMenuItem;
