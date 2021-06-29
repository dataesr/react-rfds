import CodeExample from '../../components/CodeExample';
import classic from './classic';
import withButton from './withButton';

export default () => (
  <>
    <CodeExample
      code={classic.code}
      component={<classic.Component />}
      description={classic.description}
      titre={classic.titre}
    />
    <CodeExample
      code={withButton.code}
      component={<withButton.Component />}
      description={withButton.description}
      titre={withButton.titre}
    />
  </>
);
