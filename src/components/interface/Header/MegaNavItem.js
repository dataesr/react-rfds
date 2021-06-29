import React, { useCallback, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import dataAttributes from '../../../utils/data-attributes';
import Link from '../Link/index';
import useCollapse from '../../../hooks/useCollapse';
import useOnClickOutside from '../../../hooks/useOnClickOutside';

const MegaNavItem = ({
  children, title, linkLabel, href, to, current,
  as, description, closeButtonLabel, ...remainingProps
}) => {
  const Tag = `${as}`;
  const id = uuidv4();
  const [isExpanded, setIsExpanded] = useState(false);
  const { item, collapse } = useCollapse(null, isExpanded, 'fr-mega-menu');
  const expandedRef = useRef(null);
  const buttonRef = useRef(null);
  const close = useCallback((e) => {
    if ((buttonRef?.current !== e.target) && isExpanded) {
      setIsExpanded(false);
    }
  }, [isExpanded]);
  useOnClickOutside(expandedRef, close);

  return (
    <li
      className="fr-nav__item"
      {...dataAttributes(remainingProps)}
    >
      <button
        ref={buttonRef}
        onClick={() => setIsExpanded(!isExpanded)}
        type="button"
        aria-expanded={isExpanded}
        aria-controls={id}
        aria-current={current || undefined}
        className="fr-nav__btn"
        aria-label="ouvrir la navigation"
      >
        {title}
      </button>
      <div
        ref={expandedRef}
        id={id}
        className={item.class}
        style={{ maxHeight: item.stateHeight, '--collapse': collapse, padding: 0 }}
      >
        <div className="fr-container fr-container--fluid fr-container-lg">
          <button
            type="button"
            className="fr-link--close fr-link"
            aria-controls="mega-menu-775"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {closeButtonLabel}
          </button>
          <div className="fr-grid-row fr-grid-row-lg--gutters">
            <div className="fr-col-12 fr-col-lg-8 fr-col-offset-lg-4--right">
              <div className="fr-mega-menu__leader">
                <Tag className="fr-h4 fr-mb-2v">{title}</Tag>
                {description && <p className="fr-hidden fr-displayed-lg">{description}</p>}
                {(href || to) && linkLabel && (
                <Link
                  className="fr-link fr-fi-arrow-right-line fr-link--icon-right fr-link--align-on-content"
                  href={href}
                  to={to}
                >
                  {linkLabel}
                </Link>
                )}
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </li>
  );
};

MegaNavItem.defaultProps = {
  linkLabel: '',
  closeButtonLabel: 'Fermer',
  href: undefined,
  to: undefined,
  children: '',
  current: false,
  as: 'h4',
  description: '',
};
MegaNavItem.propTypes = {
  as: PropTypes.oneOf(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  title: PropTypes.string.isRequired,
  closeButtonLabel: PropTypes.string,
  linkLabel: PropTypes.string,
  href: PropTypes.string,
  to: PropTypes.string,
  description: PropTypes.string,
  current: PropTypes.bool,
};

export default MegaNavItem;
