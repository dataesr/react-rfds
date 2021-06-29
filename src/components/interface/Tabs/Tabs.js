import React, {
  cloneElement, useState, Children,
} from 'react';

import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import dataAttributes from '../../../utils/data-attributes';
import { SCHEMES } from '../../../utils/constants';
import TabButton from './TabButton';

import '@gouvfr/dsfr/dist/css/tabs.min.css';

/**
 *
 * @visibleName Tabs
 */
const Tabs = ({
  className, children, defaultActiveTab, scheme, ...remainingProps
}) => {
  const [activeTab, setActiveTab] = useState(() => defaultActiveTab);
  const [contentTabHeight, setHeight] = useState(() => 500);
  const addProps = {
    activeTab, setHeight,
  };
  const tabsPanel = Children.toArray(children).map((child, index) => cloneElement(child, {
    ...addProps,
    index,
    key: uuidv4(),
    _id: uuidv4(),
  }));

  const _className = classNames('fr-tabs', className, { [`fr-scheme-${scheme}`]: scheme });
  return (
    <div
      className={_className}
      style={{ height: contentTabHeight }}
      {...dataAttributes(remainingProps)}
    >
      <ul className="fr-tabs__list" role="tablist">
        {tabsPanel.map((element, index) => (
          <TabButton
            key={uuidv4()}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            index={index}
            label={element.props.label}
            icon={element.props.icon}
          />
        ))}
      </ul>
      {tabsPanel}
    </div>
  );
};

Tabs.defaultProps = {
  className: '',
  scheme: '',
  defaultActiveTab: 0,
};

Tabs.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  scheme: PropTypes.oneOf(SCHEMES),
  defaultActiveTab: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};

export default Tabs;
