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

const code = `
  <Footer>
    <FooterTop>
      <FooterTopCategory title="Nom de la catégorie">
        <FooterLink to="/myFooterLink">
          Footer Link Router
        </FooterLink>
        <FooterLink to="/">Footer Link</FooterLink>
        <FooterLink to="/">Footer Link</FooterLink>
        <FooterLink to="/">Footer Link</FooterLink>
        <FooterLink to="/">Footer Link</FooterLink>
      </FooterTopCategory>
      <FooterTopCategory title="Nom de la catégorie">
        <FooterLink to="/">Footer Link</FooterLink>
        <FooterLink to="/">Footer Link</FooterLink>
        <FooterLink to="/">Footer Link</FooterLink>
        <FooterLink to="/">Footer Link</FooterLink>
        <FooterLink to="/">Footer Link</FooterLink>
        <FooterLink to="/">Footer Link</FooterLink>
      </FooterTopCategory>
      <FooterTopCategory title="Nom de la catégorie">
        <FooterLink to="/">Footer Link</FooterLink>
        <FooterLink to="/">Footer Link</FooterLink>
        <FooterLink to="/">Footer Link</FooterLink>
        <FooterLink to="/">Footer Link</FooterLink>
      </FooterTopCategory>
      <FooterTopCategory title="Nom de la catégorie">
        <FooterLink to="/">Footer Link</FooterLink>
        <FooterLink to="/">Footer Link</FooterLink>
        <FooterLink to="/">Footer Link</FooterLink>
        <FooterLink to="/">Footer Link</FooterLink>
      </FooterTopCategory>
      <FooterTopCategory title="Nom de la catégorie">
        <FooterLink to="/">Footer Link</FooterLink>
        <FooterLink to="/">Footer Link</FooterLink>
        <FooterLink to="/">Footer Link</FooterLink>
        <FooterLink to="/">Footer Link</FooterLink>
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
      <FooterLink to="/">Footer Link</FooterLink>
      <FooterLink to="/">Footer Link</FooterLink>
      <FooterLink to="/">Footer Link</FooterLink>
      <FooterLink to="/">Footer Link</FooterLink>
      <FooterLink to="/">Footer Link</FooterLink>
      <FooterCopy to="/">© République Française 2020</FooterCopy>
    </FooterBottom>
  </Footer>
`;
const Component = () => (
  <Footer>
    <FooterTop>
      <FooterTopCategory title="Nom de la catégorie">
        <FooterLink to="/myFooterLink">
          Footer Link Router
        </FooterLink>
        <FooterLink to="/">Footer Link</FooterLink>
        <FooterLink to="/">Footer Link</FooterLink>
        <FooterLink to="/">Footer Link</FooterLink>
        <FooterLink to="/">Footer Link</FooterLink>
      </FooterTopCategory>
      <FooterTopCategory title="Nom de la catégorie">
        <FooterLink to="/">Footer Link</FooterLink>
        <FooterLink to="/">Footer Link</FooterLink>
        <FooterLink to="/">Footer Link</FooterLink>
        <FooterLink to="/">Footer Link</FooterLink>
        <FooterLink to="/">Footer Link</FooterLink>
        <FooterLink to="/">Footer Link</FooterLink>
      </FooterTopCategory>
      <FooterTopCategory title="Nom de la catégorie">
        <FooterLink to="/">Footer Link</FooterLink>
        <FooterLink to="/">Footer Link</FooterLink>
        <FooterLink to="/">Footer Link</FooterLink>
        <FooterLink to="/">Footer Link</FooterLink>
      </FooterTopCategory>
      <FooterTopCategory title="Nom de la catégorie">
        <FooterLink to="/">Footer Link</FooterLink>
        <FooterLink to="/">Footer Link</FooterLink>
        <FooterLink to="/">Footer Link</FooterLink>
        <FooterLink to="/">Footer Link</FooterLink>
      </FooterTopCategory>
      <FooterTopCategory title="Nom de la catégorie">
        <FooterLink to="/">Footer Link</FooterLink>
        <FooterLink to="/">Footer Link</FooterLink>
        <FooterLink to="/">Footer Link</FooterLink>
        <FooterLink to="/">Footer Link</FooterLink>
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
      <FooterLink to="/">Footer Link</FooterLink>
      <FooterLink to="/">Footer Link</FooterLink>
      <FooterLink to="/">Footer Link</FooterLink>
      <FooterLink to="/">Footer Link</FooterLink>
      <FooterLink to="/">Footer Link</FooterLink>
      <FooterCopy to="/">© République Française 2020</FooterCopy>
    </FooterBottom>
  </Footer>
);

const description = 'Un example de footer complet';
const titre = null;

export default {
  titre,
  description,
  code,
  Component,
};
