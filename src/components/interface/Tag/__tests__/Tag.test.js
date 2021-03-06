import { render, screen } from '@testing-library/react';
import { Tag, TagGroup } from '..';

describe('<Tag />', () => {
  it('should renders Tag properly', () => {
    render(<Tag as="a" href="/" title="titre">tag-test</Tag>);
    const tag = screen.getByText('tag-test');
    expect(tag).toBeInTheDocument();
    expect(tag).toMatchSnapshot();
  });
  it('should renders small Tag properly', () => {
    render(<Tag size="sm" as="span">tag-test</Tag>);
    const tag = screen.getByText(/tag-test/i);
    expect(tag).toBeInTheDocument();
    expect(tag.className).toBe('fr-tag fr-tag--sm');
    expect(tag).toMatchSnapshot();
  });
  it('should renders TagGroup properly', () => {
    render(
      <TagGroup data-testid="taggroup">
        <Tag size="sm" as="span" data-testid="tag1">tag-test</Tag>
        <Tag size="sm" as="span" data-test-id="tag2">tag-test</Tag>
        <Tag size="sm" as="span" data-test--id="tag3">tag-test</Tag>
        <Tag size="sm" as="span" data-test="tag4">tag-test</Tag>
      </TagGroup>,
    );
    const tagGroup = screen.getByTestId('taggroup');
    expect(tagGroup).toBeInTheDocument();
    const tags = screen.getAllByText('tag-test');
    expect(tags[0].className).toBe('fr-tag fr-tag--sm');
    expect(tags).toHaveLength(4);
    expect(tagGroup).toMatchSnapshot();
  });
});
