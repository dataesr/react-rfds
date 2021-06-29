import { Tile, TileBody, TileImage } from '@dataesr/react-dsfr';

const code = `
  <Tile horizontal verticalMedium>
    <TileBody
      title="Tuile horizontale par défaut"
      description="Et verticale en desktop"
      href="/myPath"
    />
    <TileImage
      alt="un petit carré"
      src="https://place-hold.it/80x80"
    />
  </Tile>
`;
const Component = () => (
  <Tile horizontal verticalMedium>
    <TileBody
      title="Tuile horizontale par défaut"
      description="Et verticale en desktop"
      href="/myPath"
    />
    <TileImage
      alt="un petit carré"
      src="https://place-hold.it/80x80"
    />
  </Tile>
);

const description = 'Example de Tuile';
const titre = null;

export default {
  titre,
  description,
  code,
  Component,
};
