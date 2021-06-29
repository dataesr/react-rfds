import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from '../Link/index';
import dataAttributes from '../../../utils/data-attributes';
import typeValidation from '../../../utils/type-validation';

const CardTitle = ({
  href, to, children, as, className, ...remainingProps
}) => {
  const Tag = `${as}`;
  return (
    <Tag
      className={classNames('fr-card__title', className)}
      {...dataAttributes(remainingProps)}
    >
      <Link href={href} to={to} className="fr-card__link">{children}</Link>
    </Tag>
  );
};

CardTitle.defaultProps = {
  __TYPE: 'CardTitle',
  as: 'p',
  className: '',
  href: undefined,
  to: undefined,
};
CardTitle.propTypes = {
  /**
   * @ignore
   */
  href: PropTypes.string,
  /**
   * @ignore
   */
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: typeValidation('CardTitle'),
  to: PropTypes.string,
  children: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  as: PropTypes.oneOf(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
};

export default CardTitle;
