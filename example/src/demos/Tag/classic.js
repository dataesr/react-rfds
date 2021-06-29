import { Tag, TagGroup } from '@dataesr/react-dsfr';

const code = `
  <TagGroup>
    <Tag size="sm" as="span">Label tag</Tag>
    <Tag size="sm" as="span" icon="ri-arrow-right-line" iconPosition="left">Label tag</Tag>
    <Tag size="sm" as="span" icon="ri-arrow-right-line">Label tag</Tag>
    <Tag size="sm" as="span">Label tag</Tag>
    <Tag size="sm" as="span" icon="ri-arrow-right-line" iconPosition="left">Label tag</Tag>
    <Tag size="sm" as="span" icon="ri-arrow-right-line">Label tag</Tag>
  </TagGroup>
`;
const Component = () => (
  <TagGroup>
    <Tag size="sm" as="span">Label tag</Tag>
    <Tag size="sm" as="span" icon="ri-arrow-right-line" iconPosition="left">Label tag</Tag>
    <Tag size="sm" as="span" icon="ri-arrow-right-line">Label tag</Tag>
    <Tag size="sm" as="span">Label tag</Tag>
    <Tag size="sm" as="span" icon="ri-arrow-right-line" iconPosition="left">Label tag</Tag>
    <Tag size="sm" as="span" icon="ri-arrow-right-line">Label tag</Tag>
  </TagGroup>
);

const description = 'Les tags';
const titre = null;

export default {
  titre,
  description,
  code,
  Component,
};
