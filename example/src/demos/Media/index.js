import CodeExample from '../../components/CodeExample';
import video from './video';
import image from './image';

export default () => (
  <>
    <CodeExample
      code={video.code}
      component={<video.Component />}
      description={video.description}
      titre={video.titre}
    />
    <CodeExample
      code={image.code}
      component={<image.Component />}
      description={image.description}
      titre={image.titre}
    />
  </>
);
