import { useState } from 'react';
import { Radio, RadioGroup } from '@dataesr/react-dsfr';

const code = `
  const [value, setValue] = useState();
  return (
    <RadioGroup
      legend="Légende pour l’ensemble de champs"
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
    >
      <Radio
        label="Label radio 1"
        value="value-1"
      />
      <Radio
        label="Label radio 2"
        value="value-2"
      />
      <Radio
        label="Label radio 3"
        value="value-3"
      />
    </RadioGroup>
  );
`;

const Component = () => {
  const [value, setValue] = useState();
  return (
    <RadioGroup
      legend="Légende pour l’ensemble de champs"
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
    >
      <Radio
        label="Label radio 1"
        value="value-1"
      />
      <Radio
        label="Label radio 2"
        value="value-2"
      />
      <Radio
        label="Label radio 3"
        value="value-3"
      />
    </RadioGroup>
  );
};

const description = null;

const titre = 'Controllé';

export default {
  titre, code, Component, description,
};
