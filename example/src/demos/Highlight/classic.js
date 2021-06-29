import { Highlight } from '@dataesr/react-dsfr';

const code = `
  <Highlight size="sm">
    Highlight text that might be short and concise.
    Highlight text that might be short and concise.
    Highlight text that might be short and concise.
  </Highlight>
`;
const Component = () => (
  <Highlight size="sm">
    Highlight text that might be short and concise.
    Highlight text that might be short and concise.
    Highlight text that might be short and concise.
  </Highlight>
);

const description = 'Mise en avant';
const titre = null;

export default {
  titre,
  description,
  code,
  Component,
};
