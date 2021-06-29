import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import Link from '../Link/index';
import dataAttributes from '../../../utils/data-attributes';

const ToolItem = ({
  icon, href, to, className, children, ...remainingProps
}) => (
  <li
    key={uuidv4()}
    {...dataAttributes(remainingProps)}
  >
    <Link
      className={className}
      isSimple
      display="flex"
      icon={icon}
      iconPosition="left"
      iconSize="1x"
      href={href}
      to={to}
    >
      {children}
    </Link>
  </li>
);

ToolItem.defaultProps = {
  className: '',
  icon: '',
  href: undefined,
  to: undefined,
};

ToolItem.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  icon: PropTypes.string,
  children: PropTypes.string.isRequired,
  href: PropTypes.string,
  to: PropTypes.string,
};

export default ToolItem;
