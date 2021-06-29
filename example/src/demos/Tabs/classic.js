import { Tabs, Tab } from '@dataesr/react-dsfr';

const code = `
  <Tabs>
    <Tab label="Label tab #1">
      <h3>Content tab #1</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Corporis dolorem est ex fugiat minima minus natus quos ratione.
        Adipisci, consequatur obcaecati porro soluta ullam ut.
        Aspernatur atque porro quis quod!
      </p>
    </Tab>
    <Tab label="Label tab #2" icon="fr-fi-checkbox-line">
      <h3>Content tab #2</h3>
    </Tab>
    <Tab label="Label tab #3" icon="fr-fi-checkbox-line">
      <h3>Content tab #3</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Corporis dolorem est ex fugiat minima minus natus quos ratione.
        Adipisci, consequatur obcaecati porro soluta ullam ut.
        Aspernatur atque porro quis quod!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Corporis dolorem est ex fugiat minima minus natus quos ratione.
        Adipisci, consequatur obcaecati porro soluta ullam ut.
        Aspernatur atque porro quis quod!
      </p>
    </Tab>
  </Tabs>
`;
const Component = () => (
  <Tabs>
    <Tab label="Label tab #1">
      <h3>Content tab #1</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Corporis dolorem est ex fugiat minima minus natus quos ratione.
        Adipisci, consequatur obcaecati porro soluta ullam ut.
        Aspernatur atque porro quis quod!
      </p>
    </Tab>
    <Tab label="Label tab #2" icon="fr-fi-checkbox-line">
      <h3>Content tab #2</h3>
    </Tab>
    <Tab label="Label tab #3" icon="fr-fi-checkbox-line">
      <h3>Content tab #3</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Corporis dolorem est ex fugiat minima minus natus quos ratione.
        Adipisci, consequatur obcaecati porro soluta ullam ut.
        Aspernatur atque porro quis quod!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Corporis dolorem est ex fugiat minima minus natus quos ratione.
        Adipisci, consequatur obcaecati porro soluta ullam ut.
        Aspernatur atque porro quis quod!
      </p>
    </Tab>
  </Tabs>
);

const description = 'Example de Tabs';
const titre = null;

export default {
  titre,
  description,
  code,
  Component,
};
