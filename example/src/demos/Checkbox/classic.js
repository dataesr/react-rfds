import { Checkbox, CheckboxGroup } from '@dataesr/react-dsfr';

const code = `
  <CheckboxGroup ariaLabel="This is aia label" legend="This is the legend">
    <Checkbox
      label="Label checkbox 1"
      onChange={() => {
      }}
      value="value-1"
    />
    <Checkbox
      label="Label checkbox 2"
      onChange={() => {
      }}
      value="value-2"
    />
  </CheckboxGroup>
`;
const Component = () => (
  <CheckboxGroup ariaLabel="This is aia label" legend="This is the legend">
    <Checkbox
      label="Label checkbox 1"
      onChange={() => {
      }}
      value="value-1"
    />
    <Checkbox
      label="Label checkbox 2"
      onChange={() => {
      }}
      value="value-2"
    />
  </CheckboxGroup>
);

const description = 'Example de checkbox';
const titre = null;

export default {
  titre,
  description,
  code,
  Component,
};
