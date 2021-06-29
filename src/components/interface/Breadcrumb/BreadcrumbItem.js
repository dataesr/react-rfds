import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import dataAttributes from '../../../utils/data-attributes';
import Link from '../Link/index';
import typeValidation from '../../../utils/type-validation';

const BreadcrumbItem = ({
  className, children, href, to, ...remainingProps
}) => {
  const _className = classNames(
    'fr-breadcrumb__item', { 'fr-breadcrumb__item--current': !href }, className,
  );

  return (
    <li
      className={_className}
      {...dataAttributes(remainingProps)}
    >
      <Link
        current={!href && !to}
        className="fr-breadcrumb__link"
        to={to}
        href={href}
      >
        {children}
      </Link>
    </li>
  );
};

BreadcrumbItem.defaultProps = {
  __TYPE: 'BreadcrumbItem',
  className: '',
  href: undefined,
  to: undefined,
};

BreadcrumbItem.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: typeValidation('BreadcrumbItem'),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  href: PropTypes.string,
  to: PropTypes.string,
};

export default BreadcrumbItem;
