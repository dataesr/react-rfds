import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Row from '../Row';

it('renders Row properly', () => {
  render(
    <Row>Text</Row>,
  );
  const row = screen.getByText('Text');
  expect(row).toBeInTheDocument();
  expect(row.className).toBe('fr-grid-row');
});

it('renders Row with gutters properly', () => {
  render(
    <Row gutters>Text</Row>,
  );
  const row = screen.getByText('Text');
  expect(row).toBeInTheDocument();
  expect(row.className).toBe('fr-grid-row fr-grid-row--gutters');
});

it('renders Row with alignItems properly', () => {
  render(
    <Row alignItems="middle">Text</Row>,
  );
  const row = screen.getByText('Text');
  expect(row).toBeInTheDocument();
  expect(row.className).toContain('fr-grid-row--middle');
});

it('renders Row with justifyContent properly', () => {
  render(
    <Row justifyContent="center">Text</Row>,
  );
  const row = screen.getByText('Text');
  expect(row).toBeInTheDocument();
  expect(row.className).toContain('fr-grid-row--center');
});

it('renders Row offset and n properly', () => {
  render(
    <Row gutters alignItems="middle" justifyContent="center">Text</Row>,
  );
  const row = screen.getByText('Text');
  expect(row).toBeInTheDocument();
  expect(row.className).toContain('fr-grid-row--center');
  expect(row.className).toContain('fr-grid-row--middle');
  expect(row.className).toContain('fr-grid-row--gutters');
});
