import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from '../Link/index';
import dataAttributes from '../../../utils/data-attributes';

/**
 *
 * @visibleName Corps de la tuile
 */
const TileBody = ({
  className,
  title,
  description,
  titleAs,
  href,
  to,
  linkTitle,
  linkTarget,
  ...remainingProps
}) => {
  const HtmlTag = `${titleAs}`;
  return (
    <div
      className={classNames('fr-tile__body', className)}
      {...dataAttributes(remainingProps)}
    >
      <HtmlTag className="fr-tile__title">
        <Link
          className="fr-tile__link"
          title={linkTitle}
          target={linkTarget || undefined}
          href={href}
          to={to}
        >
          {title}
        </Link>
      </HtmlTag>
      {description && <p className="fr-tile__desc">{description}</p>}
    </div>
  );
};

TileBody.defaultProps = {
  description: '',
  titleAs: 'p',
  linkTitle: '',
  linkTarget: '',
  className: '',
  href: undefined,
  to: undefined,
};

TileBody.propTypes = {
  /**
   * Html tag to render in accordion title.
   */
  titleAs: PropTypes.oneOf(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  linkTarget: PropTypes.string,
  linkTitle: PropTypes.string,
  href: PropTypes.string,
  to: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default TileBody;
