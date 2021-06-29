import React from 'react';

import {
  Footer as FooterWrapper,
  FooterLink,
  FooterBody,
  Logo,
  FooterBottom,
  FooterCopy,
} from '@dataesr/react-dsfr';

const Footer = () => (
  <FooterWrapper>
    <FooterBody
      description="react-dsfr est une implementation non officiel du design system de l'état français en React. Il est dévelopé et maintenu par l'équipe des outils d'aide à la décision du ministère de l'enseignement supérieur, de la recherche et de l'innovation."
    >
      <Logo>Ministère de l‘enseignement supérieur de la rechercher et de l‘innovation</Logo>
    </FooterBody>
    <FooterBottom>
      <FooterLink href="https://github.com/dataesr/react-dsfr" icon="ri-github-fill">
        Github
      </FooterLink>
      <FooterCopy to="/">© République Française 2020</FooterCopy>
    </FooterBottom>
  </FooterWrapper>
);

export default Footer;
