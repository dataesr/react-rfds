import {
  SimpleTable, Tabs, Tab, Accordion, AccordionItem,
} from '@dataesr/react-dsfr';
import CodeExample from '../../components/CodeExample';
import classic from './classic';
import { accordionItemProps, accordionProps } from './props';

export default () => (
  <>
    <Accordion>
      <AccordionItem title="Afficher les Propriétés">
        <Tabs>
          <Tab label="Accordion">
            <SimpleTable data={accordionProps} />
          </Tab>
          <Tab label="AccordionItem">
            <SimpleTable data={accordionItemProps} />
          </Tab>
        </Tabs>
      </AccordionItem>
    </Accordion>
    <CodeExample
      code={classic.code}
      component={<classic.Component />}
      description={classic.description}
      titre={classic.titre}
    />
  </>
);
