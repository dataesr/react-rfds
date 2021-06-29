import { Breadcrumb, BreadcrumbItem } from '@dataesr/react-dsfr';

const code = `
  <Breadcrumb>
    <BreadcrumbItem to="/myBreadcrumbLink">test #1</BreadcrumbItem>
    <BreadcrumbItem to="/path">test #2</BreadcrumbItem>
    <BreadcrumbItem>test #3</BreadcrumbItem>
  </Breadcrumb>
`;
const Component = () => (
  <Breadcrumb>
    <BreadcrumbItem to="/myBreadcrumbLink">test #1</BreadcrumbItem>
    <BreadcrumbItem to="/path">test #2</BreadcrumbItem>
    <BreadcrumbItem>test #3</BreadcrumbItem>
  </Breadcrumb>
);

const description = `Le fil d'ariane permet de se situer dans l'arborescence du site`;

const titre = null;

export default {
  titre, code, Component, description,
};
