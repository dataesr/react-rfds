import CodeExample from '../../components/CodeExample';
import controlled from './controlled';
import uncontrolled from './uncontrolled';

export default () => (
  <>
    <CodeExample
      code={controlled.code}
      component={<controlled.Component />}
      description={controlled.description}
      titre={controlled.titre}
    />
    <CodeExample
      code={uncontrolled.code}
      component={<uncontrolled.Component />}
      description={uncontrolled.description}
      titre={uncontrolled.titre}
    />
  </>
);
