import React from 'react';
import { useLocation } from 'react-router-dom';

import {
  Header as HeaderWrapper,
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
import SwitchThemeButton from './SwitchThemeButton';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <HeaderWrapper path={pathname}>
      <HeaderBody>
        <Logo splitCharacter={10}>République Française & cie</Logo>
        <Service
          to="/"
          title="@dataesr/react-dsfr"
          description="Example website for react-dsfr"
        />
        <Tool closeButtonLabel="fermer">
          <ToolItemGroup>
            <SwitchThemeButton />
            <ToolItem
              icon="ri-external-link-line"
              href="https://gouvfr.atlassian.net/wiki/spaces/DB/overview?homepageId=145359476"
            >
              Documentation officielle
            </ToolItem>
            <ToolItem
              icon="ri-github-fill"
              href="https://github.com/dataesr/react-dsfr"
            >
              Github
            </ToolItem>
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
            <Link to="/composants/atomes/button" current={pathname.startsWith('/composants/atomes/button')}>Buttons</Link>
            <Link to="/composants/atomes/tag" current={pathname.startsWith('/composants/atomes/tag')}>Tags</Link>
            <Link to="/composants/atomes/textinput" current={pathname.startsWith('/composants/atomes/textinput')}>TextInput</Link>
            <Link to="/composants/atomes/select" current={pathname.startsWith('/composants/atomes/select')}>Select</Link>
            <Link to="/composants/atomes/radio" current={pathname.startsWith('/composants/atomes/radio')}>Radios</Link>
            <Link to="/composants/atomes/checkbox" current={pathname.startsWith('/composants/atomes/checkbox')}>Checkboxes</Link>
            <Link to="/composants/atomes/media" current={pathname.startsWith('/composants/atomes/media')}>Medias</Link>
            <Link to="/composants/atomes/liens" current={pathname.startsWith('/composants/atomes/liens')}>Liens</Link>
            <Link to="/composants/atomes/bloc" current={pathname.startsWith('/composants/atomes/bloc')}>Bloc Marque</Link>
            <Link to="/composants/atomes/text" current={pathname.startsWith('/composants/atomes/text')}>Textes</Link>
            <Link to="/composants/atomes/toggle" current={pathname.startsWith('/composants/atomes/toggle')}>Toggle</Link>
          </MegaNavSubItem>
          <MegaNavSubItem title="Molécules">
            <Link to="/composants/molecules/sommaire" current={pathname.startsWith('/composants/molecules/sommaire')}>Sommaire</Link>
            <Link to="/composants/molecules/tile" current={pathname.startsWith('/composants/molecules/tile')}>Tuile</Link>
            <Link to="/composants/molecules/table" current={pathname.startsWith('/composants/molecules/table')}>Table</Link>
            <Link to="/composants/molecules/sidemenu" current={pathname.startsWith('/composants/molecules/sidemenu')}>Sidemenu</Link>
            <Link to="/composants/molecules/modal" current={pathname.startsWith('/composants/molecules/modal')}>Modales</Link>
            <Link to="/composants/molecules/hightlight" current={pathname.startsWith('/composants/molecules/hightlight')}>Highlights</Link>
            <Link to="/composants/molecules/card" current={pathname.startsWith('/composants/molecules/card')}>Cards</Link>
            <Link to="/composants/molecules/tabs" current={pathname.startsWith('/composants/molecules/tabs')}>Tabs</Link>
            <Link to="/composants/molecules/callout" current={pathname.startsWith('/composants/molecules/callout')}>Callout</Link>
            <Link to="/composants/molecules/breadcrumb" current={pathname.startsWith('/composants/molecules/breadcrumb')}>Breadcrumb</Link>
            <Link to="/composants/molecules/skiplinks" current={pathname.startsWith('/composants/molecules/skiplinks')}>SkipLinks</Link>
            <Link to="/composants/molecules/accordion" current={pathname.startsWith('/composants/molecules/accordion')}>Accordion</Link>
          </MegaNavSubItem>
          <MegaNavSubItem title="Organismes">
            <Link title="Header" href="/composants/organismes/header">Header</Link>
            <Link title="Footer" href="/composants/organismes/footer">Footer</Link>
          </MegaNavSubItem>
          <MegaNavSubItem title="Grille">
            <Link title="title" href="/path">Container</Link>
            <Link title="title" href="/path">Row</Link>
            <Link title="title" href="/path">Column</Link>
          </MegaNavSubItem>
        </MegaNavItem>
        <NavItem title="Couleurs" current={pathname.startsWith('/couleurs')}>
          <NavSubItem
            current={pathname.startsWith('/couleurs/palette')}
            title="Palette"
            to="/couleurs/palette"
          />
          <NavSubItem
            current={pathname.startsWith('/couleurs/combinaisons')}
            title="Combinaisons"
            to="/couleurs/combinaisons"
          />
        </NavItem>
        <NavItem title="Examples" current={pathname.startsWith('/examples/forms')}>
          <NavSubItem
            current={pathname.startsWith('/examples/forms')}
            title="Formulaires"
            to="/examples/forms"
          />
          <NavSubItem
            current={pathname.startsWith('/examples/components')}
            to="/examples/components"
            title="Composants"
          />
          <NavSubItem
            current={pathname.startsWith('/examples/layout')}
            title="Layout"
            to="/examples/layout"
          />
        </NavItem>
      </HeaderNav>
    </HeaderWrapper>
  );
};

export default Header;
