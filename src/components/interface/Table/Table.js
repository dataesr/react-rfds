import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Pagination from '../Pagination';

import dataAttributes from '../../../utils/data-attributes';

import '@gouvfr/dsfr/dist/css/table.min.css';

/**
 *
 * @visibleName Table
 */
const Table = ({
  children,
  noScroll,
  caption,
  captionPosition,
  bordered,
  fixedLayout,
  className,
  tableID,
  tableClassName,
  columns,
  data,
  rowKey,
  pagination,
  perPage,
  page,
  setPage,
  surrendingPages,
  ...remainingProps
}) => {
  const _className = classNames('fr-table', {
    'fr-table--no-caption': (captionPosition === 'none'),
    'fr-table--caption-bottom': (captionPosition === 'bottom'),
    'fr-table--bordered': bordered,
    'fr-table--no-scroll': noScroll,
    'fr-table--layout-fixed': fixedLayout,
  }, className);

  const [internalPage, setInternalPage] = useState(1);
  const [sort, setSort] = useState();
  const currentPage = page || internalPage;

  const manageSort = (column) => {
    if (sort && sort.column.name === column.name) {
      if (sort.direction === 'dsc') {
        setSort({ column, direction: 'asc' });
      } else {
        setSort();
      }
    } else {
      setSort({ column, direction: 'dsc' });
    }
  };

  let sortedData = data;
  if (sort) {
    let sortMethod = sort.column.sort;
    if (!sortMethod) {
      sortMethod = (a, b) => (a > b ? 1 : -1);
    }
    sortedData = data.sort((a, b) => {
      let current = a;
      let next = b;
      if (sort.direction === 'dsc') {
        current = b;
        next = a;
      }

      return sortMethod(current[sort.column.name], next[sort.column.name]);
    });
  }

  return (
    <div
      className={_className}
      {...dataAttributes(remainingProps)}
    >
      <table id={tableID || undefined} className={tableClassName || undefined}>
        <caption data-testid="table-caption">{caption}</caption>
        <thead>
          <tr key="headers">
            {columns.map((column) => (
              <th
                className={classNames({ sortable: column.sortable })}
                scope="col"
                key={column.name}
                onClick={() => {
                  if (column.sortable) {
                    manageSort(column);
                  }
                }}
              >
                {column.label}
                {sort && sort.column.name === column.name && (
                  sort.direction === 'dsc'
                    ? <span className="fr-fi fr-fi-arrow-down-s-line" aria-hidden="true" />
                    : <span className="fr-fi fr-fi-arrow-up-s-line" aria-hidden="true" />
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData
            .slice((currentPage - 1) * perPage, currentPage * perPage)
            .map((row) => (
              <tr key={row[rowKey]}>
                {columns.map((column) => (
                  <td key={column.name}>
                    {column.render ? column.render(row) : row[column.name]}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
      {pagination && (
        <Pagination
          currentPage={Math.min(currentPage, Math.ceil(data.length / perPage))}
          onClick={page ? setPage : setInternalPage}
          pageCount={Math.ceil(data.length / perPage)}
          surrendingPages={surrendingPages}
        />
      )}
    </div>
  );
};

Table.defaultProps = {
  fixedLayout: false,
  noScroll: false,
  bordered: false,
  captionPosition: 'top',
  className: '',
  tableID: '',
  tableClassName: '',
  children: null,
  pagination: false,
  surrendingPages: 3,
  perPage: 10,
  page: undefined,
  setPage: () => {},
};

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  fixedLayout: PropTypes.bool,
  tableID: PropTypes.string,
  tableClassName: PropTypes.string,
  noScroll: PropTypes.bool,
  bordered: PropTypes.bool,
  captionPosition: PropTypes.oneOf(['top', 'bottom', 'none']),
  caption: PropTypes.string.isRequired,
  rowKey: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  pagination: PropTypes.bool,
  surrendingPages: PropTypes.number,
  perPage: PropTypes.number,
  page: PropTypes.number,
  setPage: PropTypes.func,
};
export default Table;
