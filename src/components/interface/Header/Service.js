import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Link from '../Link/index';
import dataAttributes from '../../../utils/data-attributes';
import typeValidation from '../../../utils/type-validation';

const Service = ({
  title, description, className, href, to, ...remainingProps
}) => (
  <div
    className={classNames(className, 'fr-header__service')}
    {...dataAttributes(remainingProps)}
  >
    <Link
      className="fr-header__service-title"
      href={href}
      to={to}
      title={title}
    >
      {title}
    </Link>
    <p className="fr-header__service-tagline">{description}</p>
  </div>
);

Service.defaultProps = {
  __TYPE: 'Service',
  className: '',
  description: 'Ouvrir le menu',
  href: undefined,
  to: undefined,
};

Service.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: typeValidation('Service'),
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  href: PropTypes.string,
  to: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default Service;
