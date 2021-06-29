import {
  Callout,
  CalloutTitle,
  CalloutText,
} from '@dataesr/react-dsfr';

const code = `
  <Callout>
    <CalloutTitle as="h3">Callout title</CalloutTitle>
    <CalloutText>Callout text that might be short and concise.</CalloutText>
  </Callout>
`;
const Component = () => (
  <Callout>
    <CalloutTitle as="h3">Callout title</CalloutTitle>
    <CalloutText>Callout text that might be short and concise.</CalloutText>
  </Callout>
);

const description = `Mise en exerge. Pour afficher des informations importantes`;

const titre = 'Par default';

export default {
  titre, code, Component, description,
};
