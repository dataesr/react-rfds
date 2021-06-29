import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getSpace } from '../../../utils/getters';
import { SCHEMES } from '../../../utils/constants';

/**
 *
 * @visibleName Row
 */
const Row = ({
  gutters, justifyContent, alignItems, children, scheme, className, spacing,
}) => {
  const { margin, padding } = getSpace(spacing);
  const _className = classNames(margin, padding, {
    'fr-grid-row': !gutters,
    'fr-grid-row fr-grid-row--gutters': gutters,
    [`fr-grid-row--${justifyContent}`]: justifyContent,
    [`fr-grid-row--${alignItems}`]: alignItems,
    [`fr-scheme-${scheme}`]: scheme,
  }, className);
  return <div className={_className}>{children}</div>;
};

Row.propTypes = {
  /**
  * Row children (should always be Col)
  */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  /**
  * Add gutters to row
  */
  gutters: PropTypes.bool,
  spacing: PropTypes.string,
  /**
  * Vertical alignment of children
  */
  alignItems: PropTypes.oneOf(['start', 'middle', 'end']),
  /**
  * Horizontal alignement.
  */
  justifyContent: PropTypes.oneOf(['start', 'center', 'end']),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  scheme: PropTypes.oneOf(SCHEMES),
};
Row.defaultProps = {
  className: '',
  gutters: false,
  alignItems: null,
  justifyContent: null,
  scheme: '',
  children: null,
  spacing: '',
};

export default Row;
