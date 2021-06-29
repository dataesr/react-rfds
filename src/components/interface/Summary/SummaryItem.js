import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link/index';
import dataAttributes from '../../../utils/data-attributes';

const SummaryItem = ({
  href, to, target, children, className, ...remainingProps
}) => (
  <li
    {...dataAttributes(remainingProps)}
  >
    <Link
      isSimple
      href={href}
      target={target}
      className="fr-summary__link"
    >
      {children}
    </Link>
  </li>
);

SummaryItem.defaultProps = {
  className: '',
  href: undefined,
  to: undefined,
  target: '_self',
  asLink: null,
};

SummaryItem.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string,
  to: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.string, PropTypes.object),
  ]),
  target: PropTypes.string,
  asLink: PropTypes.element,
};

export default SummaryItem;
