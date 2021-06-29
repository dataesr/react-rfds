import CodeExample from '../../components/CodeExample';
import classic from './classic';
import withMessage from './withMessage';

export default () => (
  <>
    <CodeExample
      code={classic.code}
      component={<classic.Component />}
      description={classic.description}
      titre={classic.titre}
    />
    <CodeExample
      code={withMessage.code}
      component={<withMessage.Component />}
      description={withMessage.description}
      titre={withMessage.titre}
    />
  </>
);
