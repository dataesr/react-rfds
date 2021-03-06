import { render, screen } from '@testing-library/react';
import ButtonGroup from '../ButtonGroup';
import { Button } from '../index';

describe('<ButtonGroup />', () => {
  it('renders ButtonGroup properly', () => {
    render(
      <ButtonGroup size="sm" isEquisized align="center" isInlineFrom="md" data-testid="buttongroup">
        <Button secondary title="title" data-testid="button">secondary sm button</Button>
        <Button title="title" data-test-id="button">sm button</Button>
      </ButtonGroup>,
    );
    const group = screen.getByTestId('buttongroup');
    expect(group).toBeInTheDocument();
    expect(group).toMatchSnapshot();
    expect(group.className).toBe('fr-btns-group fr-btns-group--sm fr-btns-group--center fr-btns-group--inline-md fr-btns-group--equisized');
  });
});
