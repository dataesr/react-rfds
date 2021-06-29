import { MediaVideo } from '@dataesr/react-dsfr';

const code = `
  <MediaVideo
    legend="légende de l'image"
    buttonLabel="Transcription"
  >
    <iframe
      title="titre de l’iframe"
      className="fr-responsive-vid__player"
      src="https://www.youtube.com/embed/HyirpmPL43I"
      width="100%"
      height="100%"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen=""
    />
  </MediaVideo>
`;
const Component = () => (
  <MediaVideo
    legend="légende de l'image"
    buttonLabel="Transcription"
  >
    <iframe
      title="titre de l’iframe"
      className="fr-responsive-vid__player"
      src="https://www.youtube.com/embed/HyirpmPL43I"
      width="100%"
      height="100%"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen=""
    />
  </MediaVideo>
);

const description = null;

const titre = 'Média vidéo';

export default {
  titre, code, Component, description,
};
