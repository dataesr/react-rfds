import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

import dataAttributes from '../../../utils/data-attributes';

import '@gouvfr/dsfr/dist/css/alerts.min.css';

/**
 *
 * @visibleName Alert
 */
const Alert = ({
  className,
  as,
  type,
  title,
  description,
  small,
  show,
  closable,
  onClose,
  ...remainingProps
}) => {
  const HtmlTitleTag = `${as}`;
  const [internalShow, setInternalShow] = useState(show);
  const _className = classNames(
    'fr-alert',
    `fr-alert--${type}`,
    {
      'fr-alert--sm': small,
    },
    className,
  );

  useEffect(() => {
    setInternalShow(show);
  }, [show]);

  if (!internalShow) {
    return <></>;
  }

  return (
    <div
      role="alert"
      className={_className}
      {...dataAttributes(remainingProps)}
    >
      <HtmlTitleTag className="fr-alert__title">{title}</HtmlTitleTag>
      {!small && description && <p>{description}</p>}
      {closable && (
        <button
          type="button"
          className="fr-link--close fr-link"
          onClick={() => {
            setInternalShow(false);
            if (onClose) {
              onClose();
            }
          }}
        >
          Masquer le message
        </button>
      )}
    </div>
  );
};

Alert.defaultProps = {
  as: 'p',
  type: 'info',
  description: undefined,
  small: false,
  show: true,
  closable: false,
  onClose: undefined,
  className: '',
};

Alert.propTypes = {
  as: PropTypes.oneOf(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  type: PropTypes.oneOf(['error', 'success', 'info']),
  small: PropTypes.bool,
  show: PropTypes.bool,
  closable: PropTypes.bool,
  onClose: PropTypes.func,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default Alert;
