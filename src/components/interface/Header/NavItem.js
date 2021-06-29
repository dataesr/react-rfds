import React, {
  useCallback, useState, Children, useRef,
} from 'react';

import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import dataAttributes from '../../../utils/data-attributes';
import Link from '../Link/index';
import useCollapse from '../../../hooks/useCollapse';
import useOnClickOutside from '../../../hooks/useOnClickOutside';

const NavItem = ({
  children, title, href, to, current, ...remainingProps
}) => {
  const id = `fr-nav-subitem-${uuidv4()}`;
  const [isExpanded, setIsExpanded] = useState(false);
  const { item, collapse } = useCollapse(null, isExpanded, 'fr-menu');
  const itemRef = useRef(null);
  const expandedRef = useRef(null);
  const buttonRef = useRef(null);
  const close = useCallback((e) => {
    if ((buttonRef?.current !== e.target) && isExpanded) {
      setIsExpanded(false);
    }
  }, [isExpanded]);
  useOnClickOutside(expandedRef, close);

  const subItems = Children.toArray(children).filter((child) => !!child);
  return (
    subItems && subItems.length > 0 ? (
      <li
        ref={itemRef}
        className="fr-nav__item"
        {...dataAttributes(remainingProps)}
      >
        <button
          ref={buttonRef}
          onClick={() => setIsExpanded(!isExpanded)}
          type="button"
          aria-expanded={isExpanded}
          aria-current={(current && 'page') || undefined}
          aria-controls={id}
          className="fr-nav__btn"
          aria-label="ouvrir la navigation"
        >
          {title}
        </button>
        <div
          ref={expandedRef}
          id={id}
          className={item.class}
          style={{ maxHeight: item.stateHeight, '--collapse': collapse }}
        >
          <ul className="fr-menu__list">{children}</ul>
        </div>
      </li>
    ) : (
      <li ref={itemRef} className="fr-nav__item">
        <Link
          className="fr-nav__link"
          href={href}
          to={to}
          current={current}
        >
          {title}
        </Link>
      </li>
    )
  );
};

NavItem.defaultProps = {
  children: '',
  current: false,
  href: undefined,
  to: undefined,
};

NavItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  title: PropTypes.string.isRequired,
  href: PropTypes.string,
  to: PropTypes.string,
  current: PropTypes.bool,
  /**
   * @ignore
   */
};

export default NavItem;
