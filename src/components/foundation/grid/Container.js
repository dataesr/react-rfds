import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getSpace } from '../../../utils/getters';
import { SCHEMES } from '../../../utils/constants';
import '@gouvfr/dsfr/dist/css/utilities.min.css';

/**
 *
 * @visibleName Container
 */
const Container = ({
  fluid, children, scheme, className, role, as, spacing,
}) => {
  const Tag = as ? `${as}` : 'div';
  const { margin, padding } = getSpace(spacing);
  const _className = classNames(margin, padding, {
    'fr-container': !fluid,
    'fr-container-fluid': fluid,
    [`fr-scheme-${scheme}`]: scheme,
  }, className);
  return <Tag role={role || undefined} className={_className}>{children}</Tag>;
};

Container.defaultProps = {
  fluid: false,
  className: '',
  scheme: '',
  role: '',
  as: 'div',
  children: null,
  spacing: '',
};

Container.propTypes = {
  /**
  * Container children node (should be Rows)
  */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  /**
  * Container with no outer margins
  */
  fluid: PropTypes.bool,
  spacing: PropTypes.string,
  role: PropTypes.string,
  as: PropTypes.oneOf(['div', 'section']),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  scheme: PropTypes.oneOf(SCHEMES),
};

export default Container;
