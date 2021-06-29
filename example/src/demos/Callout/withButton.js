import {
  Callout,
  CalloutTitle,
  CalloutText,
  Button,
} from '@dataesr/react-dsfr';

const code = `
  <Callout>
    <CalloutTitle as="h3">Callout title</CalloutTitle>
    <CalloutText>Callout text that might be short and concise.</CalloutText>
    <Button title="acceder">
      Accéder au service
    </Button>
  </Callout>
`;
const Component = () => (
  <Callout>
    <CalloutTitle as="h3">Callout title</CalloutTitle>
    <CalloutText>Callout text that might be short and concise.</CalloutText>
    <Button title="acceder">
      Accéder au service
    </Button>
  </Callout>
);

const description = null;

const titre = 'Avec une action';

export default {
  titre, code, Component, description,
};
