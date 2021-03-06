import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import Icon from '../../foundation/icon/index';

/*
* DSFR v1.0.0
*/
import '@gouvfr/dsfr/dist/css/core.min.css';
import '@gouvfr/dsfr/dist/css/content.min.css';
import '@gouvfr/dsfr/dist/css/forms.min.css';
import '@gouvfr/dsfr/dist/css/inputs.min.css';

/*
* react-ds-fr
*/
import '../../../style/colors.css';
import '../../../style/custom.css';

import '@gouvfr/dsfr/dist/css/schemes.min.css';
import '@gouvfr/dsfr/dist/css/buttons.min.css';

const iconSize = {
  sm: 'lg',
  md: 'lg',
  lg: '2x',
};

/**
 * @visibleName Button
 */
const Button = forwardRef((props, ref) => {
  const {
    size,
    secondary,
    disabled,
    title,
    icon,
    iconPosition,
    onClick,
    styleAsLink,
    children,
    className,
    submit,
    ...remainingProps
  } = props;
  const _className = classNames(
    `fr-btn--${size}`,
    className,
    {
      'fr-btn': !styleAsLink,
      'fr-link': styleAsLink,
      'fr-fi-icon': !children && icon,
      'fr-btn--secondary': secondary,
    },
  );
  const _button = (
    <button
      ref={ref}
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
      className={_className}
      title={title || undefined}
      disabled={disabled}
      {...dataAttributes(remainingProps)}
    >
      {children}
    </button>
  );
  return icon ? (
    <Icon
      name={icon}
      size={iconSize[size]}
      iconPosition={(children && `${iconPosition}`) || 'center'}
    >
      {_button}
    </Icon>
  ) : _button;
});

Button.defaultProps = {
  size: 'md',
  secondary: false,
  disabled: false,
  iconPosition: 'left',
  icon: '',
  onClick: () => { },
  children: '',
  className: '',
  styleAsLink: false,
  title: null,
  submit: false,
};

Button.propTypes = {
  secondary: PropTypes.bool,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  title: PropTypes.string,
  styleAsLink: PropTypes.bool,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  submit: PropTypes.bool,
};

export default Button;
