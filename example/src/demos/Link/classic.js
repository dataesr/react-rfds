import { Link } from '@dataesr/react-dsfr';

const code = `
  <Link title="title" href="/">Link</Link>
`;
const Component = () => (
  <Link title="title" href="/">Link</Link>
);

const description = 'Lien simple sans react-router';
const titre = null;

export default {
  titre,
  description,
  code,
  Component,
};
