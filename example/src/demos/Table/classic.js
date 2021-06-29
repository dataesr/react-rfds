import { SimpleTable } from '@dataesr/react-dsfr';

const code = `
  <SimpleTable
    tableClassName="tableClassName"
    tableID="tableID-1"
    caption="Simple Table"
    data={[
      {
        id: 'PE',
        level: 1,
        name_fr: 'Sciences & Technologies',
        name_en: 'Physical Sciences and Engineering',
      },
      {
        id: 'LS',
        level: 1,
        name_fr: 'Vie & Santé',
        name_en: 'Life Sciences',
      },
      {
        id: 'SH',
        level: 1,
        name_fr: 'Sciences Humaines & Sociales',
        name_en: 'Social Sciences and Humanities',
      },
      {
        id: 'PE1',
        level: 2,
        name_fr: 'Mathématiques',
        name_en: 'Mathematics',
      },
    ]}
  />
`;
const Component = () => (
  <SimpleTable
    tableClassName="tableClassName"
    tableID="tableID-1"
    caption="Simple Table"
    data={[
      {
        id: 'PE',
        level: 1,
        name_fr: 'Sciences & Technologies',
        name_en: 'Physical Sciences and Engineering',
      },
      {
        id: 'LS',
        level: 1,
        name_fr: 'Vie & Santé',
        name_en: 'Life Sciences',
      },
      {
        id: 'SH',
        level: 1,
        name_fr: 'Sciences Humaines & Sociales',
        name_en: 'Social Sciences and Humanities',
      },
      {
        id: 'PE1',
        level: 2,
        name_fr: 'Mathématiques',
        name_en: 'Mathematics',
      },
    ]}
  />
);

const description = 'Formatter un table';
const titre = null;

export default {
  titre,
  description,
  code,
  Component,
};
