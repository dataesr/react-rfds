import PropTypes from 'prop-types';
import classnames from 'classnames';
import { CLASS_NAME_TYPE } from '../../../utils/variables';

/**
 *
 * @visibleName Text
 */
const Text = ({
  as, size, alt, className, children,
}) => {
  const HtmlTag = `${as}`;
  return (
    <HtmlTag className={classnames({
      'rf-text--alt': size !== 'lead' && alt,
      [`rf-text--${size}`]: size !== 'md',
      'rf-text': size === 'md',
    }, { className })}
    >
      {children}
    </HtmlTag>
  );
};

Text.propTypes = {
  as: PropTypes.oneOf(['p', 'span']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'lead']),
  /**
  * If true Spectral is used instead of Marianne.
  */
  alt: PropTypes.bool,
  children: PropTypes.string.isRequired,
  /**
   * One of: string, object
   */
  className: CLASS_NAME_TYPE,
  /**
  * html tag to render
  */
};
Text.defaultProps = {
  as: 'p',
  size: 'md',
  alt: false,
  className: '',
};

export default Text;
