import React from 'react';
import PropTypes from 'prop-types';
import Table from './Table';

const SimpleTable = ({ data, ...remainingProps }) => {
  const headers = Object.keys(data?.[0]);
  return (
    <Table
      {...remainingProps}
      columns={headers.map((header) => ({ name: header, label: header }))}
      data={data}
      rowKey="id"
    />
  );
};

SimpleTable.defaultProps = {
  fixedLayout: false,
  noScroll: false,
  bordered: false,
  captionPosition: 'top',
  className: '',
};

SimpleTable.propTypes = {
  fixedLayout: PropTypes.bool,
  noScroll: PropTypes.bool,
  bordered: PropTypes.bool,
  captionPosition: PropTypes.oneOf(['top', 'bottom', 'none']),
  caption: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default SimpleTable;
