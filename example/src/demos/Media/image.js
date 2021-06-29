import { MediaImage } from '@dataesr/react-dsfr';

const code = `
  <MediaImage
    src="https://bibliotheques.csdm.qc.ca/files/2018/11/10_banques_dimages_gratuites_libres_de_droits-300x169.jpg"
    alt="description alternative à l‘image"
    legend="légende de l'image"
  />
`;
const Component = () => (
  <MediaImage
    src="https://bibliotheques.csdm.qc.ca/files/2018/11/10_banques_dimages_gratuites_libres_de_droits-300x169.jpg"
    alt="description alternative à l‘image"
    legend="légende de l'image"
  />
);

const description = null;

const titre = 'Média image';

export default {
  titre, code, Component, description,
};
