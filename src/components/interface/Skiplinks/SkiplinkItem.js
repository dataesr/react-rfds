import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from '../Link/index';
import dataAttributes from '../../../utils/data-attributes';

const SkiplinkItem = ({
  href, to, target, children, className, ...remainingProps
}) => (
  <li
    className={classNames(className)}
    {...dataAttributes(remainingProps)}
  >
    <Link
      isSimple
      href={href}
      to={to}
      target={target}
    >
      {children}
    </Link>
  </li>
);

SkiplinkItem.defaultProps = {
  className: '',
  href: undefined,
  to: undefined,
  target: '_self',
};

SkiplinkItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  href: PropTypes.string,
  to: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.string, PropTypes.object),
  ]),
  target: PropTypes.string,
};

export default SkiplinkItem;
