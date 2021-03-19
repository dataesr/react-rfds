import { render, screen } from '@testing-library/react';
import ButtonGroup from '..';
import Button from '../../Button';

describe('<Card />', () => {
  it('renders Card properly', () => {
    render(
      <ButtonGroup size="sm" isEquisized align="center" isInlineFrom="md">
        <Button secondary title="title">secondary sm button</Button>
        <Button title="title">sm button</Button>
      </ButtonGroup>,
    );
    const group = screen.getByTestId('button-group');
    expect(group).toBeInTheDocument();
    expect(group).toMatchSnapshot();
    expect(group.className).toBe('rf-btns-group rf-btns-group--sm rf-btns-group--center rf-btns-group--inline-md rf-btns-group--equisized');
  });
});
