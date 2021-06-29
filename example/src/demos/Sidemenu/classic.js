import { SideMenu, SideMenuItem, SideMenuLink } from '@dataesr/react-dsfr';

const code = `
  <SideMenu title="Titre de rubrique" buttonLabel="Dans cette rubrique">
    <SideMenuItem title="Niveau 1">
      <SideMenuLink to="mySideMenuLink">Accès direct niveau 2</SideMenuLink>
      <SideMenuLink href="/">Accès direct niveau 2</SideMenuLink>
      <SideMenuItem title="Niveau 2">
        <SideMenuLink href="/">Accès direct niveau 3</SideMenuLink>
        <SideMenuLink href="/">Accès direct niveau 3</SideMenuLink>
      </SideMenuItem>
      <SideMenuLink href="/">Accès direct niveau 2</SideMenuLink>
      <SideMenuLink href="/">Accès direct niveau 2</SideMenuLink>
      <SideMenuLink href="/">Accès direct niveau 2</SideMenuLink>
    </SideMenuItem>
    <SideMenuItem title="Niveau 1">
      <SideMenuLink href="/">Accès direct niveau 2</SideMenuLink>
      <SideMenuLink href="/">Accès direct niveau 2</SideMenuLink>
      <SideMenuItem title="Niveau 2">
        <SideMenuLink href="/">Accès direct niveau 3</SideMenuLink>
        <SideMenuLink href="/">Accès direct niveau 3</SideMenuLink>
      </SideMenuItem>
      <SideMenuLink href="/">Accès direct niveau 2</SideMenuLink>
      <SideMenuLink href="/">Accès direct niveau 2</SideMenuLink>
      <SideMenuLink href="/">Accès direct niveau 2</SideMenuLink>
    </SideMenuItem>
  </SideMenu>
`;
const Component = () => (
  <SideMenu title="Titre de rubrique" buttonLabel="Dans cette rubrique">
    <SideMenuItem title="Niveau 1">
      <SideMenuLink to="mySideMenuLink">Accès direct niveau 2</SideMenuLink>
      <SideMenuLink href="/">Accès direct niveau 2</SideMenuLink>
      <SideMenuItem title="Niveau 2">
        <SideMenuLink href="/">Accès direct niveau 3</SideMenuLink>
        <SideMenuLink href="/">Accès direct niveau 3</SideMenuLink>
      </SideMenuItem>
      <SideMenuLink href="/">Accès direct niveau 2</SideMenuLink>
      <SideMenuLink href="/">Accès direct niveau 2</SideMenuLink>
      <SideMenuLink href="/">Accès direct niveau 2</SideMenuLink>
    </SideMenuItem>
    <SideMenuItem title="Niveau 1">
      <SideMenuLink href="/">Accès direct niveau 2</SideMenuLink>
      <SideMenuLink href="/">Accès direct niveau 2</SideMenuLink>
      <SideMenuItem title="Niveau 2">
        <SideMenuLink href="/">Accès direct niveau 3</SideMenuLink>
        <SideMenuLink href="/">Accès direct niveau 3</SideMenuLink>
      </SideMenuItem>
      <SideMenuLink href="/">Accès direct niveau 2</SideMenuLink>
      <SideMenuLink href="/">Accès direct niveau 2</SideMenuLink>
      <SideMenuLink href="/">Accès direct niveau 2</SideMenuLink>
    </SideMenuItem>
  </SideMenu>
);

const description = null;
const titre = null;

export default {
  titre,
  description,
  code,
  Component,
};
