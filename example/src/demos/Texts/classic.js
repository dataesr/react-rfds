import {
  Icon, Text, Title, TitleDisplay,
} from '@dataesr/react-dsfr';

const code = `
  <>
    <Icon name="ri-bubble-chart-line" size="1x">
      <Text>Lorem ipsum</Text>
    </Icon>
    <Text size="xs">Text xs</Text>
    <Title as="h4">Title h4</Title>
    <Text size="lg">Text lg</Text>
    <TitleDisplay as="h1" size="sm">Title sm</TitleDisplay>
  </>
`;
const Component = () => (
  <>
    <Icon name="ri-bubble-chart-line" size="1x">
      <Text>Lorem ipsum</Text>
    </Icon>
    <Text size="xs">Text xs</Text>
    <Title as="h4">Title h4</Title>
    <Text size="lg">Text lg</Text>
    <TitleDisplay as="h1" size="sm">Title sm</TitleDisplay>
  </>
);

const description = 'Utilisation du composant Text';
const titre = null;

export default {
  titre,
  description,
  code,
  Component,
};
