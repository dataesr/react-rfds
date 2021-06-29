export const accordionProps = [
  {
    nom: 'className',
    type: 'string',
    default: 'null',
    description: 'Ajouter une class css au composant',
  },
  {
    nom: 'as',
    type: 'string',
    default: 'div',
    description: `
      Le tag html utilisé pour le rendu du composant.
      Choix possibles: div, section
    `,
  },
  {
    nom: 'children',
    type: 'composant / liste de composants',
    default: 'required',
    description: `Un ou plusieurs composant AccrodionItem`,
  },
];

export const accordionItemProps = [
  {
    nom: 'className',
    type: 'string',
    default: 'null',
    description: 'Ajouter une class css au composant',
  },
  {
    nom: 'titleAs',
    type: 'string',
    default: 'h3',
    description: `
      Le tag html utilisé pour le rendu du titre.
      Choix possibles: h1, h2, h3, h4, h5, h6
    `,
  },
  {
    nom: 'title',
    type: 'string',
    default: 'required',
    description: `Titre de l'item
    `,
  },
];
