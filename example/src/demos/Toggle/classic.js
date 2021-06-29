import { Toggle } from '@dataesr/react-dsfr';

const code = `
  <Toggle
      onChange={() => { }}
      isDisabled
      isChecked
      label="Toggle Label"
      description="Toggle descirption"
    />
`;
const Component = () => (
  <Toggle
    onChange={() => { }}
    isDisabled
    isChecked
    label="Toggle Label"
    description="Toggle descirption"
  />
);

const description = 'Bouton Toggle';
const titre = null;

export default {
  titre,
  description,
  code,
  Component,
};
