import Summary from './Summary';
import Tile from './Tile';
import Tag from './Tag';
import Tabs from './Tabs';
import TextInput from './TextInput';
import Table from './Table';
import Sidemenu from './Sidemenu';
import Modal from './Modal';
import Select from './Select';
import Radio from './Radio';
import Checkbox from './Highlight';
import Media from './Media';
import Highlight from './Checkbox';
import Link from './Link';
import Logo from './Logo';
import Card from './Card';
import Texts from './Texts';
import Callout from './Callout';
import Breadcrumb from './Breadcrumb';
import Button from './Button';
import Toggle from './Toggle';
import Accordion from './Accordion';
import Skiplinks from './Skiplinks';
import Header from './Header';
import Footer from './Footer';

export default [
  {
    id: 'header',
    title: 'Header',
    section: 'organismes',
    component: <Header />,
  },
  {
    id: 'footer',
    title: 'Footer',
    section: 'organismes',
    component: <Footer />,
  },
  {
    id: 'sommaire',
    title: 'Sommaire',
    section: 'molecules',
    component: <Summary />,
  },
  {
    id: 'tile',
    title: 'Tile - Tuile',
    section: 'molecules',
    component: <Tile />,
  },
  {
    id: 'tag',
    title: 'Tag',
    section: 'atomes',
    component: <Tag />,
  },
  {
    id: 'table',
    title: 'Table',
    section: 'molecules',
    component: <Table />,
  },
  {
    id: 'sidemenu',
    title: 'Sidemenu',
    section: 'molecules',
    component: <Sidemenu />,
  },
  {
    id: 'modal',
    title: 'Modal',
    section: 'molecules',
    component: <Modal />,
  },
  {
    id: 'textinput',
    title: 'TextInput',
    section: 'atomes',
    component: <TextInput />,
  },
  {
    id: 'select',
    title: 'Select',
    section: 'atomes',
    component: <Select />,
  },
  {
    id: 'radio',
    title: 'Radio',
    section: 'atomes',
    component: <Radio />,
  },
  {
    id: 'checkbox',
    title: 'Checkbox',
    section: 'atomes',
    component: <Checkbox />,
  },
  {
    id: 'media',
    title: 'Media',
    section: 'atomes',
    component: <Media />,
  },
  {
    id: 'hightlight',
    title: 'Highlight',
    section: 'molecules',
    component: <Highlight />,
  },
  {
    id: 'lien',
    title: 'Lien',
    section: 'atomes',
    // eslint-disable-next-line
    component: <Link />,
  },
  {
    id: 'bloc',
    title: 'Bloc marque',
    section: 'atomes',
    component: <Logo />,
  },
  {
    id: 'card',
    title: 'Card',
    section: 'molecules',
    component: <Card />,
  },
  {
    id: 'tabs',
    title: 'Tabs - Onglets',
    section: 'molecules',
    component: <Tabs />,
  },
  {
    id: 'text',
    title: 'Texts / icons',
    section: 'atomes',
    component: <Texts />,
  },
  {
    id: 'callout',
    title: 'Callout',
    section: 'molecules',
    component: <Callout />,
  },
  {
    id: 'breadcrumb',
    title: 'Breadcrumb',
    section: 'molecules',
    component: <Breadcrumb />,
  },
  {
    id: 'button',
    title: 'Button',
    section: 'atomes',
    component: <Button />,
  },
  {
    id: 'toggle',
    title: 'Toggle',
    section: 'atomes',
    component: <Toggle />,
  },
  {
    id: 'accordion',
    title: 'Accordion',
    section: 'molecules',
    component: <Accordion />,
  },
  {
    id: 'skiplinks',
    title: 'Skiplinks',
    section: 'molecules',
    component: <Skiplinks />,
  },
];
