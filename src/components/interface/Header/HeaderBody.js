import classnames from 'classnames';
import { deepFilter } from 'react-children-utilities';
import { CHILDREN_TYPE, CLASS_NAME_TYPE } from '../../../utils/variables';

const HeaderBody = ({ children, className }) => {
  const logo = deepFilter(children, (child) => child.type.name === 'BrandLogo');
  const elements = deepFilter(children, (child) => child.type.name !== 'BrandLogo');

  return (
    <div className="rf-container">
      <div className={classnames(className, 'rf-header__body')} role="banner">
        <div className="rf-header__brand">
          {logo}
        </div>
        {elements}
      </div>
    </div>
  );
};

HeaderBody.defaultProps = {
  className: '',
  children: '',
};

HeaderBody.propTypes = {
  /**
   * One of: node, arrayOf(node), string
   */
  children: CHILDREN_TYPE,
  /**
   * One of: string, object
   */
  className: CLASS_NAME_TYPE,
};

export default HeaderBody;
