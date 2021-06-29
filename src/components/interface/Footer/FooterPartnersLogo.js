import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Link from '../Link/index';
import dataAttributes from '../../../utils/data-attributes';
import typeValidation from '../../../utils/type-validation';

const FooterPartnersLogo = ({
  href, to, imageSrc, imageAlt, className, ...remainingProps
}) => {
  if (!href && !to) {
    return (
      <img
        className={classNames('fr-footer__logo', className)}
        src={imageSrc}
        alt={imageAlt}
        {...dataAttributes(remainingProps)}
      />
    );
  }
  return (
    <Link
      className={classNames('footer__partners-link', className)}
      href={href}
      to={to}
      {...dataAttributes(remainingProps)}
    >
      <img
        className="fr-footer__logo"
        src={imageSrc}
        alt={imageAlt}
      />
    </Link>
  );
};

FooterPartnersLogo.defaultProps = {
  __TYPE: 'FooterPartnersLogo',
  href: undefined,
  to: undefined,
  imageSrc: '',
  className: '',
};

FooterPartnersLogo.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: typeValidation('FooterPartnersLogo'),
  href: PropTypes.string,
  to: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default FooterPartnersLogo;
