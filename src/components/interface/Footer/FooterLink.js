import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from '../Link/index';
import dataAttributes from '../../../utils/data-attributes';
import typeValidation from '../../../utils/type-validation';

const FooterLink = ({
  children, href, to, section, icon, className, ...remainingProps
}) => (
  <li
    className={classNames(`fr-footer__${section}-item`, className)}
    {...dataAttributes(remainingProps)}
  >
    <Link
      href={href}
      to={to}
      icon={icon}
      className={`fr-footer__${section}-link`}
    >
      {children}
    </Link>
  </li>
);

FooterLink.defaultProps = {
  __TYPE: 'FooterLink',
  section: null,
  className: '',
  icon: undefined,
  href: undefined,
  to: undefined,
};

FooterLink.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: typeValidation('FooterLink'),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  icon: PropTypes.string,
  href: PropTypes.string,
  to: PropTypes.string,
  section: PropTypes.oneOf(['bottom', 'top']),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default FooterLink;
