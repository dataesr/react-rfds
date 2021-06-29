import {
  Row, Col, Card, CardImage, CardDescription, CardDetail, CardTitle,
} from '@dataesr/react-dsfr';

const code = `
  <Row>
    <Col n="6" spacing="px-2w">
      <Card href="/">
        <CardImage alt="alternative" src="http://fakeimg.pl/300/" />
        <CardDetail>Détail</CardDetail>
        <CardTitle>
          Qu’est-ce que le Pass Culture et comment l’obtenir ?
        </CardTitle>
        <CardDescription>
          Description texte body small regular consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore…
        </CardDescription>
      </Card>
    </Col>
    <Col n="6" spacing="px-2w">
      <Card href="/">
        <CardImage alt="alternative" src="http://fakeimg.pl/300/" />
        <CardDetail>Détail</CardDetail>
        <CardTitle>
          Qu’est-ce que le Pass Culture et comment l’obtenir ?
        </CardTitle>
        <CardDescription>
          Description texte body small regular consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore…
        </CardDescription>
      </Card>
    </Col>
  </Row>
`;
const Component = () => (
  <Row>
    <Col n="6" spacing="px-2w">
      <Card href="/">
        <CardImage alt="alternative" src="http://fakeimg.pl/300/" />
        <CardDetail>Détail</CardDetail>
        <CardTitle>
          Qu’est-ce que le Pass Culture et comment l’obtenir ?
        </CardTitle>
        <CardDescription>
          Description texte body small regular consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore…
        </CardDescription>
      </Card>
    </Col>
    <Col n="6" spacing="px-2w">
      <Card href="/">
        <CardImage alt="alternative" src="http://fakeimg.pl/300/" />
        <CardDetail>Détail</CardDetail>
        <CardTitle>
          Qu’est-ce que le Pass Culture et comment l’obtenir ?
        </CardTitle>
        <CardDescription>
          Description texte body small regular consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore…
        </CardDescription>
      </Card>
    </Col>
  </Row>
);

const description = `
La carte est un lien vers une page éditoriale dont elle donne un aperçu.
Elle fait généralement partie d'une collection ou liste d’aperçus de contenu similaires.
La carte n’est jamais présentée de manière isolée.`;

const titre = null;

export default {
  titre, code, Component, description,
};
