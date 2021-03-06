import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

/**
 *
 * @visibleName CheckboxGroup
 */
const CheckboxGroup = ({
  children,
  className,
  hint,
  isInline,
  legend,
  message,
  messageType,
  ariaLabel,
  required,
  ...remainingProps
}) => {
  const _className = classNames('fr-form-group', {
    'fr-fieldset--inline': isInline,
    [`fr-fieldset--${messageType}`]: messageType,
  }, className);
  return (
    <div
      className={_className}
      {...dataAttributes(remainingProps)}
    >
      <fieldset className="fr-fieldset" aria-label={ariaLabel || legend}>
        {legend && (
        <legend className="fr-fieldset__legend">
          {legend}
          {required && <span className="error"> *</span>}
        </legend>
        )}
        {hint && <p className="fr-hint-text">{hint}</p>}
        <div className="fr-fieldset__content">
          {children}
        </div>
        {(message && messageType) && <p className={`fr-${messageType}-text`}>{message}</p>}
      </fieldset>
    </div>
  );
};

CheckboxGroup.defaultProps = {
  className: '',
  hint: '',
  isInline: false,
  messageType: '',
  message: '',
  ariaLabel: '',
  required: false,
};

CheckboxGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  hint: PropTypes.string,
  ariaLabel: PropTypes.string,
  isInline: PropTypes.bool,
  legend: PropTypes.string.isRequired,
  message: PropTypes.string,
  messageType: PropTypes.oneOf(['error', 'valid', '']),
  required: PropTypes.bool,
};

export default CheckboxGroup;
