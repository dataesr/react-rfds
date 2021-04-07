import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  Tool,
} from '../index';
import HeaderContext from '../headerContext';

Enzyme.configure({ adapter: new Adapter() });

describe('<Tool />', () => {
  let wrapper;
  const context = {
    isMobile: true,
    onOpenSearch: jest.fn(),
    isOpenSearch: true,
  };

  const initProps = {
    buttonClose: 'close',
  };

  beforeEach(() => {
    wrapper = (ui, { providerProps, ...renderOptions }) => render(
      <HeaderContext.Provider value={context}>
        {ui}
      </HeaderContext.Provider>,
      renderOptions,
    );
  });
  it('renders correctly', () => {
    const component = renderer
      .create(
        <Tool>
          Item #1
        </Tool>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('should find rf-fi-close-line class when isOpenSearch is true', () => {
    wrapper(<Tool>Item #1</Tool>, { ...context });
    expect(screen.getByRole('button')).toHaveClass('rf-link--close');
  });

  it('should call onOpenSearch on click', () => {
    wrapper(<Tool {...initProps}>Item #1</Tool>, { context });
    userEvent.click(screen.getByText(/close/i));
    expect(context.onOpenSearch).toHaveBeenCalled();
  });

  it('should have text close', () => {
    const props = {
      buttonClose: 'close it!',
    };
    wrapper(<Tool {...props}>Item #1</Tool>, { context });
    expect(screen.getByRole('button').textContent).toBe('close it!');
  });
});
