import { Skiplinks, SkiplinkItem } from '@dataesr/react-dsfr';

const code = `
  <Skiplinks>
    <SkiplinkItem to="/mySkiplinkItem">Accéder au contenu</SkiplinkItem>
    <SkiplinkItem href="#">Accéder au menu</SkiplinkItem>
    <SkiplinkItem href="#">Accéder à la recherche</SkiplinkItem>
    <SkiplinkItem href="#">Accéder au footer</SkiplinkItem>
  </Skiplinks>
`;
const Component = () => (
  <Skiplinks>
    <SkiplinkItem to="/mySkiplinkItem">Accéder au contenu</SkiplinkItem>
    <SkiplinkItem href="#">Accéder au menu</SkiplinkItem>
    <SkiplinkItem href="#">Accéder à la recherche</SkiplinkItem>
    <SkiplinkItem href="#">Accéder au footer</SkiplinkItem>
  </Skiplinks>
);

const description = "Liens d'évitement";
const titre = null;

export default {
  titre,
  description,
  code,
  Component,
};
