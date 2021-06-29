import React from 'react';
import PropTypes from 'prop-types';
import { CodeBlock, github } from "react-code-blocks";
import {
  Col, Tab, Tabs, Text, Title,
} from '@dataesr/react-dsfr';

export default function CodeExample({
  titre, code, component, description,
}) {
  return (
    <Col n="12" spacing="my-5w">
      {(titre) && <Title as="h2" look="h3">{titre}</Title>}
      {(description) && <Text>{description}</Text>}
      <Tabs>
        <Tab label="Example">
          {component}
        </Tab>
        <Tab label="Code" icon="fr-fi-checkbox-line">
          <CodeBlock
            text={code}
            showLineNumbers={false}
            language="jsx"
            theme={github}
          />
        </Tab>
      </Tabs>
    </Col>
  );
}

CodeExample.defaultProps = {
  description: null,
  titre: null,
};
CodeExample.propTypes = {
  code: PropTypes.string.isRequired,
  component: PropTypes.node.isRequired,
  description: PropTypes.string,
  titre: PropTypes.string,
};
