import { useState } from 'react';
import { TextInput } from '@dataesr/react-dsfr';

const code = `
  const [textValue, setTextValue] = useState('Value');
  return (
    <TextInput
      value={textValue}
      onChange={(e) => { setTextValue(e.target.value); }}
      label="Text input"
    />
  );
`;

const Component = () => {
  const [textValue, setTextValue] = useState('Value');
  return (
    <TextInput
      value={textValue}
      onChange={(e) => { setTextValue(e.target.value); }}
      label="Text input"
    />
  );
};

const description = `
Un inputText permet à l'utilisateur d'entrer du texte.
`;

const titre = 'Etat par default';

export default {
  titre, code, Component, description,
};
