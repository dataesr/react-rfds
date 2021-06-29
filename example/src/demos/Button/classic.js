import { ButtonGroup, Button } from '@dataesr/react-dsfr';

const code = `
  <ButtonGroup>
    <Button title="title">Button</Button>
    <Button icon="ri-alert-fill" iconPosition="right" title="title">icon on the right</Button>
    <Button size="sm" secondary title="title">
      secondary sm button
    </Button>
  </ButtonGroup>
`;
const Component = () => (
  <ButtonGroup>
    <Button title="title">Button</Button>
    <Button icon="ri-alert-fill" iconPosition="right" title="title">icon on the right</Button>
    <Button size="sm" secondary title="title">
      secondary sm button
    </Button>
  </ButtonGroup>
);

const description = `Les boutons du design system`;

const titre = null;

export default {
  titre, code, Component, description,
};
