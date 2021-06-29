import {
  Header,
  HeaderOperator,
  HeaderBody,
  Logo,
  Service,
  Tool,
  ToolItem,
  ToolItemGroup,
  SearchBar,
  HeaderNav,
  NavItem,
  NavSubItem,
  MegaNavSubItem,
  MegaNavItem,
  Link,
} from '@dataesr/react-dsfr';

const code = `
  <Header>
    <HeaderBody>
      <Logo splitCharacter={10}>République Française & cie</Logo>
      <HeaderOperator>
        <img src="https://fakeimg.pl/145x81/" alt="texte alternatif" />
      </HeaderOperator>
      <Service
        to="/"
        title="Playground @dataesr/react-dsfr"
        description="messy tests"
      />
      <Tool closeButtonLabel="fermer">
        <ToolItemGroup>
          <ToolItem
            icon="ri-external-link-line"
            href="https://gouvfr.atlassian.net/wiki/spaces/DB/overview?homepageId=145359476"
          >
            Documentation officielle
          </ToolItem>
          <ToolItem icon="ri-sun-line" to="/path">Paramètres d&apos;affichage</ToolItem>
        </ToolItemGroup>
        <SearchBar
          onSearch={() => {
          }}
          label="SearchBar du gouvernement"
          placeholder="Rechercher"
          buttonLabel="Rechercher"
        />
      </Tool>
    </HeaderBody>
    <HeaderNav>
      <NavItem title="Acceuil" to="/" />
      <MegaNavItem
        title="Composants"
        as="h3"
        closeButtonLabel="Fermeture"
      >
        <MegaNavSubItem title="Atomes">
          <Link to="/composants/atomes/button">Buttons</Link>
          <Link to="/composants/atomes/tag">Tags</Link>
          <Link to="/composants/atomes/textinput">TextInput</Link>
        </MegaNavSubItem>
        <MegaNavSubItem title="Molécules">
          <Link to="/composants/molecules/sommaire">Sommaire</Link>
          <Link to="/composants/molecules/accordion">Accordion</Link>
        </MegaNavSubItem>
        <MegaNavSubItem title="Organismes">
          <Link title="title" href="/path">Link #1</Link>
        </MegaNavSubItem>
        <MegaNavSubItem title="Layout">
          <Link title="title" href="/path">Link #1</Link>
        </MegaNavSubItem>
      </MegaNavItem>
      <NavItem title="Couleurs">
        <NavSubItem
          title="Palette"
          to="/couleurs/palette"
        />
        <NavSubItem
          title="Combinaisons"
          to="/couleurs/combinaisons"
        />
      </NavItem>
      <NavItem title="Examples" current>
        <NavSubItem
          current
          title="Formulaires"
          to="/examples/forms"
        />
      </NavItem>
    </HeaderNav>
  </Header>
`;
const Component = () => (
  <Header>
    <HeaderBody>
      <Logo splitCharacter={10}>République Française & cie</Logo>
      <HeaderOperator>
        <img src="https://fakeimg.pl/145x81/" alt="texte alternatif" />
      </HeaderOperator>
      <Service
        to="/"
        title="Playground @dataesr/react-dsfr"
        description="messy tests"
      />
      <Tool closeButtonLabel="fermer">
        <ToolItemGroup>
          <ToolItem
            icon="ri-external-link-line"
            href="https://gouvfr.atlassian.net/wiki/spaces/DB/overview?homepageId=145359476"
          >
            Documentation officielle
          </ToolItem>
          <ToolItem icon="ri-sun-line" to="/path">Paramètres d&apos;affichage</ToolItem>
        </ToolItemGroup>
        <SearchBar
          onSearch={() => {
          }}
          label="SearchBar du gouvernement"
          placeholder="Rechercher"
          buttonLabel="Rechercher"
        />
      </Tool>
    </HeaderBody>
    <HeaderNav>
      <NavItem title="Acceuil" to="/" />
      <MegaNavItem
        title="Composants"
        as="h3"
        closeButtonLabel="Fermeture"
      >
        <MegaNavSubItem title="Atomes">
          <Link to="/composants/atomes/button">Buttons</Link>
          <Link to="/composants/atomes/tag">Tags</Link>
          <Link to="/composants/atomes/textinput">TextInput</Link>
        </MegaNavSubItem>
        <MegaNavSubItem title="Molécules">
          <Link to="/composants/molecules/sommaire">Sommaire</Link>
          <Link to="/composants/molecules/accordion">Accordion</Link>
        </MegaNavSubItem>
        <MegaNavSubItem title="Organismes">
          <Link title="title" href="/path">Link #1</Link>
        </MegaNavSubItem>
        <MegaNavSubItem title="Layout">
          <Link title="title" href="/path">Link #1</Link>
        </MegaNavSubItem>
      </MegaNavItem>
      <NavItem title="Couleurs">
        <NavSubItem
          title="Palette"
          to="/couleurs/palette"
        />
        <NavSubItem
          title="Combinaisons"
          to="/couleurs/combinaisons"
        />
      </NavItem>
      <NavItem title="Examples" current>
        <NavSubItem
          current
          title="Formulaires"
          to="/examples/forms"
        />
      </NavItem>
    </HeaderNav>
  </Header>
);

const description = 'Un example de header complet';
const titre = null;

export default {
  titre,
  description,
  code,
  Component,
};
