import { useState } from 'react';
import {
  Col, Button, Modal, ModalTitle, ModalContent, ModalFooter,
} from '@dataesr/react-dsfr';

const code = `
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <Col>
      <Button title="force action modal" onClick={() => setIsOpenModal(true)}>Force action modal</Button>
      <Modal isOpen={isOpenModal} hide={() => setIsOpenModal(false)} canClose={false}>
        <ModalTitle icon="ri-arrow-right-fill">I am a title</ModalTitle>
        <ModalContent>blah blah</ModalContent>
        <ModalFooter>
          <Button title="Une action" onClick={() => setIsOpenModal(false)}>blah</Button>
        </ModalFooter>
      </Modal>
    </Col>
  );
`;

const Component = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <Col>
      <Button title="force action modal" onClick={() => setIsOpenModal(true)}>Force action modal</Button>
      <Modal isOpen={isOpenModal} hide={() => setIsOpenModal(false)} canClose={false}>
        <ModalTitle icon="ri-arrow-right-fill">I am a title</ModalTitle>
        <ModalContent>blah blah</ModalContent>
        <ModalFooter>
          <Button title="Une action" onClick={() => setIsOpenModal(false)}>blah</Button>
        </ModalFooter>
      </Modal>
    </Col>
  );
};

const description = null;

const titre = 'Forcer un action utilisateur';

export default {
  titre, code, Component, description,
};
