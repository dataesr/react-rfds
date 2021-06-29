import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getSpace, getColSize } from '../../../utils/getters';
import { SCHEMES } from '../../../utils/constants';

/**
 *
 * @visibleName Col
 */
const Col = ({
  offset, n, scheme, children, className, spacing,
}) => {
  const { margin, padding } = getSpace(spacing);
  const { n: size, offset: off } = getColSize(n, offset);
  const _className = classNames(off, size, padding, margin, {
    'fr-col': !n,
    [`fr-scheme-${scheme}`]: scheme,
  }, className);
  return <div className={_className}>{children}</div>;
};

Col.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  spacing: PropTypes.string,
  /**
  * Col size
  */
  n: PropTypes.string,
  /**
  * Set Col offset.
  */
  offset: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  scheme: PropTypes.oneOf(SCHEMES),
};
Col.defaultProps = {
  n: '',
  offset: null,
  className: '',
  scheme: '',
  children: null,
  spacing: '',
};

export default Col;
