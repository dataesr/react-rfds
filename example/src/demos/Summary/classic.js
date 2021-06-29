import { Summary, SummaryItem } from '@dataesr/react-dsfr';

const code = `
  <Summary title="Sommaire">
    <SummaryItem to="/mySummaryItem">Item 1</SummaryItem>
    <SummaryItem href="#">Item 2</SummaryItem>
    <SummaryItem href="#">Item 3</SummaryItem>
    <SummaryItem href="#">Item 4</SummaryItem>
  </Summary>
`;
const Component = () => (
  <Summary title="Sommaire">
    <SummaryItem to="/mySummaryItem">Item 1</SummaryItem>
    <SummaryItem href="#">Item 2</SummaryItem>
    <SummaryItem href="#">Item 3</SummaryItem>
    <SummaryItem href="#">Item 4</SummaryItem>
  </Summary>
);

const description = 'Utilisation du sommaire';
const titre = null;

export default {
  titre,
  description,
  code,
  Component,
};
