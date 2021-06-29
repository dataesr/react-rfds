import { useState } from 'react';
import { TextInput } from '@dataesr/react-dsfr';

const code = `
  const [textValue, setTextValue] = useState('Value');
  return (
    <>
      <TextInput
        value={textValue}
        onChange={(e) => { setTextValue(e.target.value); }}
        label="Text input"
        message="Non Non Non !"
        messageType="error"
      />
      <TextInput
        value={textValue}
        onChange={(e) => { setTextValue(e.target.value); }}
        label="Text input"
        message="Bien joué !"
        messageType="valid"
      />
    </>
  );
`;

// eslint-disable-next-line
const Component = ({ message, messageType }) => {
  const [textValue, setTextValue] = useState('Value');
  return (
    <>
      <TextInput
        value={textValue}
        onChange={(e) => { setTextValue(e.target.value); }}
        label="Text input"
        message="Non Non Non !"
        messageType="error"
      />
      <TextInput
        value={textValue}
        onChange={(e) => { setTextValue(e.target.value); }}
        label="Text input"
        message="Bien joué !"
        messageType="valid"
      />
    </>
  );
};

const description = `
L'input text peut s'afficher dans les deux etat, valid et error.
Pour afficher un etat, utilisez la propriété messageType. Utilisez message pour le message à afficher.
`;

const titre = 'Etat Valide et Erreur';

export default {
  titre, code, Component, description,
};
