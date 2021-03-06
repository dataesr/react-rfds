import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import dataAttributes from '../../../utils/data-attributes';

import '@gouvfr/dsfr/dist/css/checkboxes.min.css';

/**
 *
 * @visibleName Checkbox
 */
const Checkbox = forwardRef((props, ref) => {
  const {
    className,
    hint,
    id,
    isDisabled,
    label,
    message,
    messageType,
    onChange,
    size,
    value,
    defaultChecked,
    ...remainingProps
  } = props;
  const _className = classNames('fr-checkbox-group', {
    [`fr-checkbox-group--${messageType}`]: messageType,
    'fr-checkbox-group--sm': (size !== 'md'),
  }, className);
  const checkboxId = id || uuidv4();
  const messageId = uuidv4();

  return (
    <div
      className={_className}
      {...dataAttributes(remainingProps)}
    >
      <input
        type="checkbox"
        id={checkboxId}
        name="checkbox"
        defaultChecked={defaultChecked}
        onChange={onChange}
        ref={ref}
        value={value}
        disabled={isDisabled}
      />
      <label className="fr-label" htmlFor={checkboxId}>{label}</label>
      {hint && <span className="fr-hint-text">{hint}</span>}
      {(message && messageType) && <p id={messageId} className={`fr-${messageType}-text`}>{message}</p>}
    </div>
  );
});

Checkbox.defaultProps = {
  className: '',
  hint: '',
  id: null,
  isDisabled: false,
  size: 'md',
  onChange: () => {},
  messageType: '',
  message: '',
  defaultChecked: false,
};

Checkbox.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  id: PropTypes.string,
  hint: PropTypes.string,
  isDisabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  message: PropTypes.string,
  messageType: PropTypes.oneOf(['error', 'valid', '']),
  onChange: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md']),
  value: PropTypes.string.isRequired,
  defaultChecked: PropTypes.bool,
};

export default Checkbox;
