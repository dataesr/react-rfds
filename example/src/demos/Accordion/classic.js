import { Accordion, AccordionItem } from "@dataesr/react-dsfr";

const code = `
  <Accordion>
    <AccordionItem title="title" titleAs="h1">Test</AccordionItem>
    <AccordionItem title="title">Test</AccordionItem>
    <AccordionItem title="title">Test</AccordionItem>
    <AccordionItem title="title">Test</AccordionItem>
  </Accordion>
`;

const Component = () => (
  <Accordion>
    <AccordionItem title="title" titleAs="h1">Test</AccordionItem>
    <AccordionItem title="title">Test</AccordionItem>
    <AccordionItem title="title">Test</AccordionItem>
    <AccordionItem title="title">Test</AccordionItem>
  </Accordion>
);

const description = `Un Accordion permet d'afficher du texte au clic`;

const titre = null;

export default {
  titre, code, Component, description,
};
