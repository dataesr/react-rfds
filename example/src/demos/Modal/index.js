import CodeExample from '../../components/CodeExample';
import classic from './classic';
import forceAction from './forceAction';

export default () => (
  <>
    <CodeExample
      code={classic.code}
      component={<classic.Component />}
      description={classic.description}
      titre={classic.titre}
    />
    <CodeExample
      code={forceAction.code}
      component={<forceAction.Component />}
      description={forceAction.description}
      titre={forceAction.titre}
    />
  </>
);
