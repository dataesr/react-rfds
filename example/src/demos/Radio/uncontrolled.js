import { Radio, RadioGroup } from '@dataesr/react-dsfr';

const code = `
  <RadioGroup
    legend="Légende pour l’ensemble de champs"
  >
    <Radio
      label="Label radio 1"
      onChange={() => {}}
      value="value-1"
    />
    <Radio
      label="Label radio 2"
      onChange={() => {}}
      value="value-2"
    />
    <Radio
      label="Label radio 3"
      onChange={() => {}}
      value="value-3"
    />
  </RadioGroup>
`;

const Component = () => (
  <RadioGroup
    legend="Légende pour l’ensemble de champs"
  >
    <Radio
      label="Label radio 1"
      onChange={() => {}}
      value="value-1"
    />
    <Radio
      label="Label radio 2"
      onChange={() => {}}
      value="value-2"
    />
    <Radio
      label="Label radio 3"
      onChange={() => {}}
      value="value-3"
    />
  </RadioGroup>
);

const description = null;

const titre = 'Non controllé';

export default {
  titre, code, Component, description,
};
