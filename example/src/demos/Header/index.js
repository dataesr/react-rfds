import CodeExample from '../../components/CodeExample';
import classic from './classic';

export default () => (
  <CodeExample
    code={classic.code}
    component={<classic.Component />}
    description={classic.description}
    titre={classic.titre}
  />
);
