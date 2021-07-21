import { render, screen } from '@testing-library/react';
import data from './__mocks__/data.json';
import { Table, SimpleTable } from '..';

describe('<Table />', () => {
  it('renders Table properly', () => {
    const columns = [
      { name: '1', label: 'Titre 1' },
      { name: '2', label: 'Titre 2' },
      { name: '3', label: 'Titre 3' },
    ];

    const complexData = [
      { 1: 'Donnée 1 1', 2: 'Donnée 1 2', 3: 'Donnée 1 3' },
      { 1: 'Donnée 2 1', 2: 'Donnée 2 2', 3: 'Donnée 2 3' },
      { 1: 'Donnée 3 1', 2: 'Donnée 3 2', 3: 'Donnée 3 3' },
      { 1: 'Donnée 4 1', 2: 'Donnée 4 2', 3: 'Donnée 4 3' },
    ];
    render(
      <Table
        bordered
        captionPosition="bottom"
        caption="Mon super tableau"
        data-testid="table"
        columns={columns}
        data={complexData}
      />,
    );
    const table = screen.getByTestId('table');
    const caption = screen.getByTestId('table-caption');
    expect(table).toBeInTheDocument();
    expect(caption).toBeInTheDocument();
    expect(caption).toHaveTextContent('Mon super tableau');
    expect(table.className).toBe('fr-table fr-table--caption-bottom fr-table--bordered');
    expect(table).toMatchSnapshot();
  });

  it('renders simple table properly', () => {
    render(
      <SimpleTable data={data} caption="Mon super tableau" />,
    );
    const cell = screen.getByText('Mathematics');
    expect(cell).toBeInTheDocument();
    expect(cell).toMatchSnapshot();
  });
});
