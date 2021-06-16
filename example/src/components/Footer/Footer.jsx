import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
  Footer,
  FooterTopCategory,
  FooterLink,
  FooterTop,
  FooterBody,
  FooterPartners,
  FooterPartnersTitle,
  FooterPartnersLogo,
  Logo,
  FooterBottom,
  FooterCopy,
} from '@dataesr/react-dsfr';

const FooterExample = () => (
  <Footer>
    <FooterTop>
      <FooterTopCategory title="Nom de la catégorie">
        <FooterLink
          asLink={<RouterLink to="/myFooterLink" />}
        >
          Footer Link Router
        </FooterLink>
        <FooterLink href="/">Footer Link</FooterLink>
        <FooterLink href="/">Footer Link</FooterLink>
        <FooterLink href="/">Footer Link</FooterLink>
        <FooterLink href="/">Footer Link</FooterLink>
      </FooterTopCategory>
      <FooterTopCategory title="Nom de la catégorie">
        <FooterLink href="/">Footer Link</FooterLink>
        <FooterLink href="/">Footer Link</FooterLink>
        <FooterLink href="/">Footer Link</FooterLink>
        <FooterLink href="/">Footer Link</FooterLink>
        <FooterLink href="/">Footer Link</FooterLink>
        <FooterLink href="/">Footer Link</FooterLink>
      </FooterTopCategory>
      <FooterTopCategory title="Nom de la catégorie">
        <FooterLink href="/">Footer Link</FooterLink>
        <FooterLink href="/">Footer Link</FooterLink>
        <FooterLink href="/">Footer Link</FooterLink>
        <FooterLink href="/">Footer Link</FooterLink>
      </FooterTopCategory>
      <FooterTopCategory title="Nom de la catégorie">
        <FooterLink href="/">Footer Link</FooterLink>
        <FooterLink href="/">Footer Link</FooterLink>
        <FooterLink href="/">Footer Link</FooterLink>
        <FooterLink href="/">Footer Link</FooterLink>
      </FooterTopCategory>
      <FooterTopCategory title="Nom de la catégorie">
        <FooterLink href="/">Footer Link</FooterLink>
        <FooterLink href="/">Footer Link</FooterLink>
        <FooterLink href="/">Footer Link</FooterLink>
        <FooterLink href="/">Footer Link</FooterLink>
      </FooterTopCategory>
    </FooterTop>
    <FooterBody
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Uenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    >
      <Logo>Ministère de l‘enseignement supérieur de la rechercher et de l‘innovation</Logo>
    </FooterBody>
    <FooterPartners>
      <FooterPartnersTitle>Nos partenaires</FooterPartnersTitle>
      <FooterPartnersLogo
        isMain
        href="/"
        imageSrc="https://dummyimage.com/140x80/000/fff.png&text=main-logo"
        imageAlt="Logo 1"
      />
      <FooterPartnersLogo
        href="/"
        imageSrc="https://dummyimage.com/100x80/000/fff.png&text=logo+2"
        imageAlt="Logo 2"
      />
      <FooterPartnersLogo
        href="/"
        imageSrc="https://dummyimage.com/100x80/000/fff.png&text=logo+3"
        imageAlt="Logo 3"
      />
      <FooterPartnersLogo
        href="/"
        imageSrc="https://dummyimage.com/100x80/000/fff.png&text=logo+4"
        imageAlt="Logo 4"
      />
    </FooterPartners>
    <FooterBottom>
      <FooterLink href="/">Footer Link</FooterLink>
      <FooterLink href="/">Footer Link</FooterLink>
      <FooterLink href="/">Footer Link</FooterLink>
      <FooterLink href="/">Footer Link</FooterLink>
      <FooterLink href="/">Footer Link</FooterLink>
      <FooterCopy href="/">© République Française 2020</FooterCopy>
    </FooterBottom>
  </Footer>
);

export default FooterExample;