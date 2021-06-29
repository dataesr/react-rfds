import CodeExample from '../../components/CodeExample';
import classic from './classic';
import isHorizontal from './isHorizontal';

export default () => (
  <>
    <CodeExample
      code={classic.code}
      component={<classic.Component />}
      description={classic.description}
      titre={classic.titre}
    />
    <CodeExample
      code={isHorizontal.code}
      component={<isHorizontal.Component />}
      description={isHorizontal.description}
      titre={isHorizontal.titre}
    />
  </>
);
