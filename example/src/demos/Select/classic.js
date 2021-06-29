import { useState } from 'react';
import { Select } from '@dataesr/react-dsfr';

const code = `
  const [selectValue, setSelectValue] = useState('');
  const options = [
    { value: '', label: '- Select -', disabled: true, hidden: true },
    { value: '1', label: 'Burgers & sandwiches' }, { value: '2', label: 'Build your own' },
    { value: '3', label: 'Friendly meals' },
    { value: '4', label: 'Save menu & more' },
  ];
  return (
    <Select
      label="Label pour liste déroulante"
      selected={selectValue}
      onChange={(e) => { setSelectValue(e.target.value); }}
      options={options}
    />
  );
`;

const Component = () => {
  const [selectValue, setSelectValue] = useState('');
  const options = [
    {
      value: '', label: '- Select -', disabled: true, hidden: true,
    },
    { value: '1', label: 'Burgers & sandwiches' }, { value: '2', label: 'Build your own' },
    { value: '3', label: 'Friendly meals' },
    { value: '4', label: 'Save menu & more' },
  ];
  return (
    <Select
      label="Label pour liste déroulante"
      selected={selectValue}
      onChange={(e) => { setSelectValue(e.target.value); }}
      options={options}
    />
  );
};

const description = null;

const titre = 'Etat par default';

export default {
  titre, code, Component, description,
};
