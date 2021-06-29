import {
  Row, Col, Card, CardImage, CardDescription, CardDetail, CardTitle,
} from '@dataesr/react-dsfr';

const code = `
  <Row>
    <Col n="12" spacing="mb-2w">
      <Card isHorizontal href="/">
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
    <Col n="12">
      <Card isHorizontal href="/">
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
    <Col n="12" spacing="mb-2w">
      <Card isHorizontal href="/">
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
    <Col n="12">
      <Card isHorizontal href="/">
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

const description = `La carte peut également s'afficher de manière horizontale`;

const titre = 'Version horizontale';

export default {
  titre, code, Component, description,
};
